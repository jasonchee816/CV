import React from 'react';
import { Paper, PaperProps } from '@mui/material';
import Draggable from 'react-draggable';

interface DraggablePaperProps extends PaperProps {
  isDesktop: boolean;
  resetPosition: boolean;
  buttonRect: DOMRect | null;
  isClosing?: boolean;
  lastPosition?: { x: number; y: number } | null;
  onPositionChange?: (position: { x: number; y: number }) => void;
}

const DraggablePaper = React.forwardRef<HTMLDivElement, DraggablePaperProps>(
  function DraggablePaper(
    {
      children,
      isDesktop,
      resetPosition,
      buttonRect,
      isClosing = false,
      lastPosition = null,
      onPositionChange,
      className,     // ⬅️ capture transition props
      style,         // ⬅️ capture transition props
      ...paperProps
    },
    ref
  ) {
    const paperRef = React.useRef<HTMLDivElement>(null);
    const [isAnimating, setIsAnimating] = React.useState(false);
    const draggableKeyRef = React.useRef<string>('draggable');
    const isClosingRef = React.useRef<boolean>(false);
    const currentPositionRef = React.useRef<{ x: number; y: number }>(lastPosition || { x: 0, y: 0 });

    // Update closing ref
    React.useEffect(() => {
      isClosingRef.current = isClosing;
    }, [isClosing]);

    // Preserve current transform when closing starts - prevent any reset
    React.useEffect(() => {
      if (!isDesktop || !isClosing || !paperRef.current) return;
      
      const el = paperRef.current;
      if (!el) return;

      // Capture the current transform immediately
      let savedTransform = getComputedStyle(el).transform;
        if (!savedTransform || savedTransform === 'none') {
        savedTransform = 'translate(0px, 0px)';
      }

    //   // Continuously maintain the transform during closing to prevent reset
    //   const maintainTransform = (): void => {
    //     if (draggableWrapper && isClosingRef.current) {
    //       const current = getComputedStyle(draggableWrapper).transform;
    //       // Only update if transform was reset (changed from saved)
    //       if (current !== savedTransform) {
    //         draggableWrapper.style.transform = savedTransform;
    //       }
    //     }
    //   };

      // Set initial transform
      el.style.transform = savedTransform;
      el.style.willChange = 'transform';

      // Continuously check and maintain transform during closing
       const interval = setInterval(() => {
           if (isClosingRef.current) {
             const current = getComputedStyle(el).transform;
             if (current !== savedTransform) el.style.transform = savedTransform;
           }
        }, 16);
      // Cleanup after Dialog exit animation completes
      const timeout = setTimeout(() => {
        clearInterval(interval);
        el.style.removeProperty('will-change');
      }, 450);

      return () => {
        clearInterval(interval);
        clearTimeout(timeout);
      };
    }, [isClosing, isDesktop]);

    // Update key ref when resetting (but not when closing or when we have a saved position)
    React.useEffect(() => {
      if (isClosingRef.current) {
        // Don't change key when closing
        return;
      }
      // Only change key on first open (when resetPosition is true and no lastPosition)
      // This allows zoom animation to work on first open
      if (resetPosition && !lastPosition) {
        draggableKeyRef.current = `reset-${Date.now()}`;
      } else if (lastPosition) {
        // Keep key stable when we have a saved position
        draggableKeyRef.current = 'draggable-stable';
      } else {
        draggableKeyRef.current = 'draggable';
      }
    }, [resetPosition, lastPosition]);

    // OPEN animation - only do zoom-out animation on first open (when resetPosition is true)
    React.useEffect(() => {
      if (!isDesktop || !paperRef.current || !resetPosition || !buttonRect || isClosingRef.current) {
        setIsAnimating(false);
        return;
      }
      const el = paperRef.current;

      setIsAnimating(true);

      const buttonCenterX = buttonRect.left + buttonRect.width / 2;
      const buttonCenterY = buttonRect.top + buttonRect.height / 2;

      const modalWidth = 600;
      const modalHeight = 400;
      const finalX = window.innerWidth / 2;
      const finalY = window.innerHeight * 0.1;

      const initialScale =
        Math.min(buttonRect.width / modalWidth, buttonRect.height / modalHeight) * 0.8;

      const translateX = finalX - buttonCenterX;
      const translateY = finalY - buttonCenterY;

      el.style.transform = `translate(${translateX}px, ${translateY}px) scale(${initialScale})`;
      el.style.transformOrigin = 'center center';
      el.style.opacity = '0';
      void el.offsetHeight;
      el.style.transition =
        'transform 0.4s cubic-bezier(0.4, 0, 0.2, 1), opacity 0.4s cubic-bezier(0.4, 0, 0.2, 1)';
      el.style.willChange = 'transform, opacity';
      el.style.opacity = '1';
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          el.style.transform = 'translate(0px, 0px) scale(1)';
        });
      });

      const timeout = setTimeout(() => {
        el.style.transition = '';
        el.style.willChange = '';
        el.style.opacity = '';
        setIsAnimating(false);
        
        // After zoom animation completes, save the current position (should be {x:0, y:0})
        // Get the actual position from Draggable wrapper if it exists
        const wrapper = el.parentElement;
        if (wrapper && onPositionChange) {
          // After animation, position should be at center (0, 0)
          // But check if user has dragged it
          const computedTransform = getComputedStyle(wrapper).transform;
          if (computedTransform && computedTransform !== 'none') {
            // Parse transform to get x, y if needed, but after animation it should be identity
            // For now, save {x: 0, y: 0} as the initial position after zoom
            onPositionChange({ x: 0, y: 0 });
          }
        }
      }, 400);

      return () => clearTimeout(timeout);
    }, [resetPosition, buttonRect, isDesktop, onPositionChange]);

    // Use last position if available, otherwise default to center
    const defaultPosition = lastPosition || { x: 0, y: 0 };
    
    // Track current position for controlled mode (must be before early return)
    const [currentPosition, setCurrentPosition] = React.useState<{ x: number; y: number }>(defaultPosition);
    
    // Update position when lastPosition changes (when opening with saved position)
    React.useEffect(() => {
      if (lastPosition && !resetPosition) {
        setCurrentPosition(lastPosition);
        currentPositionRef.current = lastPosition;
      } else if (!lastPosition) {
        setCurrentPosition({ x: 0, y: 0 });
        currentPositionRef.current = { x: 0, y: 0 };
      }
    }, [lastPosition, resetPosition]);

    // Handle drag stop to save position
    const handleStop = (_e: unknown, data: { x: number; y: number }): void => {
      const newPosition = { x: data.x, y: data.y };
      setCurrentPosition(newPosition);
      currentPositionRef.current = newPosition;
      if (onPositionChange) {
        onPositionChange(newPosition);
      }
    };

    // Use controlled mode if we have a saved position and not doing zoom animation
    const useControlled = lastPosition && !resetPosition && !isAnimating;

    // Hook up the forwarded ref to the Paper node
    const setRefs = (node: HTMLDivElement | null) => {
      (paperRef as any).current = node;
      if (typeof ref === 'function') ref(node as any);
      else if (ref) (ref as React.MutableRefObject<HTMLDivElement | null>).current = node;
    };

    if (!isDesktop) {
      return (
        <Paper ref={setRefs} className={className} style={style} {...paperProps}>
          {children}
        </Paper>
      );
    }

    // Use ref-based key - when closing, use the current stable key to prevent remount
    // When opening with reset, use a new key to allow remount
    const draggableKey = draggableKeyRef.current;

    return (
      <Draggable
        key={draggableKey}
        handle=".draggable-dialog-title"
        cancel={'[class*="MuiDialogContent-root"], .MuiIconButton-root'} // ⬅️ don't start drag from the close button
        defaultPosition={useControlled ? undefined : defaultPosition}
        position={useControlled ? currentPosition : undefined}
        disabled={isAnimating || isClosing}
        nodeRef={paperRef}
        defaultClassName={className}
        onStop={handleStop}
      >
        <Paper ref={setRefs} className={className} style={style} {...paperProps}>
              {children}
        </Paper>
      </Draggable>
    );
  }
);

export default DraggablePaper;
