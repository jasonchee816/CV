import React, { ReactNode, useState, useRef } from 'react';
import {
  Dialog,
  DialogTitle,
  DialogContent,
  Drawer,
  IconButton,
  Typography,
  Box,
  Button,
  useMediaQuery,
  useTheme,
  Zoom,
} from '@mui/material';
import { SvgIconComponent } from '@mui/icons-material';
import CloseIcon from '@mui/icons-material/Close';
import DraggablePaper from './DraggablePaper';

interface SectionAccordionProps {
  title: string;
  icon?: SvgIconComponent;
  children: ReactNode;
  defaultExpanded?: boolean;
}

const SectionAccordion: React.FC<SectionAccordionProps> = ({
  title,
  icon: Icon,
  children,
  defaultExpanded = false,
}) => {
  const [open, setOpen] = useState<boolean>(defaultExpanded);
  const [resetPosition, setResetPosition] = useState<boolean>(false);
  const [buttonRect, setButtonRect] = useState<DOMRect | null>(null);
  const [isClosing, setIsClosing] = useState<boolean>(false);
  const [lastPosition, setLastPosition] = useState<{ x: number; y: number } | null>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up('md'));

  const handleOpen = (): void => {
    // Store button position for zoom-out animation (only on first open)
    if (buttonRef.current && !lastPosition) {
      setButtonRect(buttonRef.current.getBoundingClientRect());
      setResetPosition(true);
    } else {
      // If we have a last position, don't reset
      setResetPosition(false);
      setButtonRect(null);
    }
    setIsClosing(false);
    setOpen(true);
    // Reset the flag after animation completes (only if we're doing zoom animation)
    if (!lastPosition) {
      setTimeout(() => {
        setResetPosition(false);
      }, 350);
    }
  };

  const handleClose = (): void => {
    setIsClosing(true);
    setOpen(false);
    // Clear button rect after closing animation completes
    setTimeout(() => {
      setButtonRect(null);
      setIsClosing(false);
    }, 400);
  };
  

  return (
    <>
      <Button
        ref={buttonRef}
        onClick={handleOpen}
        sx={{
          bgcolor: 'background.paper',
          borderRadius: '16px',
          py: 2,
          px: 2,
          textTransform: 'none',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          color: 'text.primary',
          minHeight: 'auto',
          minWidth: 'auto',
          flex: 1,
          '&:hover': {
            bgcolor: 'action.hover',
            transform: 'translateY(-2px)',
            transition: 'all 0.2s ease-in-out',
          },
          boxShadow: 2,
          transition: 'all 0.2s ease-in-out',
        }}
      >
        {Icon && (
          <Icon 
            sx={{ 
              color: 'primary.main', 
              fontSize: 28,
              mb: 1,
            }} 
          />
        )}
        <Typography 
          variant="body2" 
          sx={{ 
            fontWeight: 500, 
            textAlign: 'center',
            fontSize: '0.75rem',
          }}
        >
          {title}
        </Typography>
      </Button>

      {isDesktop ? (
        <Dialog
          open={open}
          onClose={handleClose}
          maxWidth="md"
          fullWidth
          TransitionComponent={Zoom}
          TransitionProps={{
            timeout: 300,
            onExited: () => {
              setResetPosition(false);
              // Dialog is fully gone now; safe to reset
              setButtonRect(null);
            },
          }}
          PaperComponent={(props) => (
            <DraggablePaper 
              isDesktop={isDesktop} 
              resetPosition={resetPosition}
              buttonRect={buttonRect}
              isClosing={isClosing}
              lastPosition={lastPosition}
              onPositionChange={setLastPosition}
              {...props} 
            />
          )}
          sx={{
            '& .MuiDialog-container': {
              alignItems: 'flex-start',   // push to top
              justifyContent: 'center',   // horizontally centered
            },
            '& .MuiDialog-paper': {
              mt: '10vh',                 // 10% from top
              width: '90%',
              maxWidth: 600,
            },
            '& .MuiBackdrop-root': {
              backgroundColor: 'rgba(0, 0, 0, 0.6)',
              backdropFilter: 'blur(4px)',
            },
          }}
          PaperProps={{
            sx: {
              borderRadius: 3,
              maxHeight: '90vh',
              bgcolor: 'background.paper',
              // no position/top/left/transform here
            },
          }}
        >
          <DialogTitle
            className="draggable-dialog-title"
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              pb: 2,
              borderBottom: 1,
              borderColor: 'divider',
              cursor: 'move',
              '&:hover': {
                bgcolor: 'action.hover',
              },
            }}
          >
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              {Icon && <Icon sx={{ mr: 2, color: 'primary.main' }} />}
              <Typography variant="h5" sx={{ fontWeight: 600 }}>
                {title}
              </Typography>
            </Box>
            <IconButton
              onClick={handleClose}
              sx={{
                color: 'text.secondary',
                '&:hover': {
                  bgcolor: 'action.hover',
                },
              }}
              aria-label="close"
            >
              <CloseIcon />
            </IconButton>
          </DialogTitle>
          <DialogContent
            sx={{
              pt: 5,
              px: 3,
              pb: 3,
              '&::-webkit-scrollbar': {
                width: '8px',
              },
              '&::-webkit-scrollbar-track': {
                bgcolor: 'transparent',
              },
              '&::-webkit-scrollbar-thumb': {
                bgcolor: 'action.disabled',
                borderRadius: '4px',
                '&:hover': {
                  bgcolor: 'action.disabledBackground',
                },
              },
            }}
          >
            {children}
          </DialogContent>
        </Dialog>
      ) : (
        <Drawer
          anchor="bottom"
          open={open}
          onClose={handleClose}
          PaperProps={{
            sx: {
              borderTopLeftRadius: 16,
              borderTopRightRadius: 16,
              maxHeight: '90vh',
            },
          }}
        >
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              p: 2,
              borderBottom: 1,
              borderColor: 'divider',
            }}
          >
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              {Icon && <Icon sx={{ mr: 2, color: 'primary.main' }} />}
              <Typography variant="h6" sx={{ fontWeight: 600 }}>
                {title}
              </Typography>
            </Box>
            <IconButton
              onClick={handleClose}
              sx={{
                color: 'text.secondary',
                '&:hover': {
                  bgcolor: 'action.hover',
                },
              }}
              aria-label="close"
            >
              <CloseIcon />
            </IconButton>
          </Box>
          <Box
            sx={{
              pt: 3,
              px: 3,
              pb: 3,
              maxHeight: 'calc(90vh - 73px)',
              overflowY: 'auto',
              '&::-webkit-scrollbar': {
                width: '8px',
              },
              '&::-webkit-scrollbar-track': {
                bgcolor: 'transparent',
              },
              '&::-webkit-scrollbar-thumb': {
                bgcolor: 'action.disabled',
                borderRadius: '4px',
                '&:hover': {
                  bgcolor: 'action.disabledBackground',
                },
              },
            }}
          >
            {children}
          </Box>
        </Drawer>
      )}
    </>
  );
};

export default SectionAccordion;
