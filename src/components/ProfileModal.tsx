import React, { useState, useRef } from 'react';
import {
  Dialog,
  DialogTitle,
  DialogContent,
  Drawer,
  IconButton,
  Typography,
  Box,
  Paper,
  useMediaQuery,
  useTheme,
  Divider,
  Table,
  TableBody,
  TableCell,
  TableRow,
  Zoom,
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import PersonIcon from '@mui/icons-material/Person';
import DraggablePaper from './DraggablePaper';

interface ProfileModalProps {
  children: React.ReactNode;
}

const ProfileModal: React.FC<ProfileModalProps> = ({ children }) => {
  const [open, setOpen] = useState<boolean>(false);
  const [resetPosition, setResetPosition] = useState<boolean>(false);
  const [buttonRect, setButtonRect] = useState<DOMRect | null>(null);
  const [isClosing, setIsClosing] = useState<boolean>(false);
  const [lastPosition, setLastPosition] = useState<{ x: number; y: number } | null>(null);
  const triggerRef = useRef<HTMLDivElement>(null);
  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up('lg'));

  const handleOpen = (): void => {
    // Store trigger element position for zoom-out animation (only on first open)
    if (triggerRef.current && !lastPosition) {
      setButtonRect(triggerRef.current.getBoundingClientRect());
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
      <Box ref={triggerRef} onClick={handleOpen} sx={{ cursor: 'pointer' }}>
        {children}
      </Box>

      {isDesktop ? (
        <Dialog
          open={open}
          onClose={handleClose}
          TransitionComponent={Zoom}
          TransitionProps={{
            timeout: 300,
            onExited: () => {
              setResetPosition(false);
              setButtonRect(null);
            },
          }}
          maxWidth="md"
          fullWidth
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
          PaperProps={{
            sx: {
              borderRadius: 3,
              maxHeight: '90vh',
              bgcolor: 'background.paper',
              m: 0,
              position: 'fixed',
              top: '10%',
              left: '50%',
              transform: 'translate(-50%, 0)',
              width: '90%',
              maxWidth: '600px',
            },
          }}
          sx={{
            '& .MuiBackdrop-root': {
              backgroundColor: 'rgba(0, 0, 0, 0.6)',
              backdropFilter: 'blur(4px)',
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
              <PersonIcon sx={{ mr: 2, color: 'primary.main' }} />
              <Typography variant="h5" sx={{ fontWeight: 600 }}>
                About Me
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
            <Box sx={{ mb: 3, mt: 1.5 }}>
              <Typography variant="h6" gutterBottom sx={{ fontWeight: 600 }}>
                Personal Profile
              </Typography>
              <Divider sx={{ mb: 2 }} />
              <Typography variant="body2" paragraph>
                A highly passionate Software Engineer based in Malaysia with good
                critical thinking skill and problem-solving skill. Some of my strengths include
                that I work well under pressure, I have good time management, I adapt and
                learn fast, and I have great leadership.
              </Typography>
            </Box>

            <Box sx={{ mb: 3 }}>
              <Typography variant="h6" gutterBottom sx={{ fontWeight: 600 }}>
                Career Objective
              </Typography>
              <Divider sx={{ mb: 2 }} />
              <Typography variant="body2" paragraph>
                To be an Engineer that can lead a team and be involved in different aspects of Software
                Development. Seeking a position in a firm where I am able to utilize
                my skills to contribute to the company while having the scope to develop my
                own skills.
              </Typography>
            </Box>

            <Box>
              <Typography variant="h6" gutterBottom sx={{ fontWeight: 600 }}>
                Language
              </Typography>
              <Divider sx={{ mb: 2 }} />
              <Paper variant="outlined" sx={{ p: 1 }}>
                <Table size="small">
                  <TableBody>
                    <TableRow>
                      <TableCell>
                        <Typography variant="body2" sx={{ fontWeight: 500 }}>Chinese:</Typography>
                      </TableCell>
                      <TableCell>
                        <Typography variant="body2">Mother Tongue</Typography>
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>
                        <Typography variant="body2" sx={{ fontWeight: 500 }}>English:</Typography>
                      </TableCell>
                      <TableCell>
                        <Typography variant="body2">Fluent</Typography>
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>
                        <Typography variant="body2" sx={{ fontWeight: 500 }}>Malay:</Typography>
                      </TableCell>
                      <TableCell>
                        <Typography variant="body2">Conversational</Typography>
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>
                        <Typography variant="body2" sx={{ fontWeight: 500 }}>Cantonese:</Typography>
                      </TableCell>
                      <TableCell>
                        <Typography variant="body2">Conversational</Typography>
                      </TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </Paper>
            </Box>
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
              <PersonIcon sx={{ mr: 2, color: 'primary.main' }} />
              <Typography variant="h6" sx={{ fontWeight: 600 }}>
                About Me
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
            <Box sx={{ mb: 3 }}>
              <Typography variant="h6" gutterBottom sx={{ fontWeight: 600 }}>
                Personal Profile
              </Typography>
              <Divider sx={{ mb: 2 }} />
              <Typography variant="body2" paragraph>
                A highly passionate Software Engineer based in Malaysia with good
                critical thinking skill and problem-solving skill. Some of my strengths include
                that I work well under pressure, I have good time management, I adapt and
                learn fast, and I have great leadership.
              </Typography>
            </Box>

            <Box sx={{ mb: 3 }}>
              <Typography variant="h6" gutterBottom sx={{ fontWeight: 600 }}>
                Career Objective
              </Typography>
              <Divider sx={{ mb: 2 }} />
              <Typography variant="body2" paragraph>
                To be an Engineer that can lead a team and be involved in different aspects of Software
                Development. Seeking a position in a firm where I am able to utilize
                my skills to contribute to the company while having the scope to develop my
                own skills.
              </Typography>
            </Box>

            <Box>
              <Typography variant="h6" gutterBottom sx={{ fontWeight: 600 }}>
                Language
              </Typography>
              <Divider sx={{ mb: 2 }} />
              <Paper variant="outlined" sx={{ p: 1 }}>
                <Table size="small">
                  <TableBody>
                    <TableRow>
                      <TableCell>
                        <Typography variant="body2" sx={{ fontWeight: 500 }}>Chinese:</Typography>
                      </TableCell>
                      <TableCell>
                        <Typography variant="body2">Mother Tongue</Typography>
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>
                        <Typography variant="body2" sx={{ fontWeight: 500 }}>English:</Typography>
                      </TableCell>
                      <TableCell>
                        <Typography variant="body2">Fluent</Typography>
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>
                        <Typography variant="body2" sx={{ fontWeight: 500 }}>Malay:</Typography>
                      </TableCell>
                      <TableCell>
                        <Typography variant="body2">Conversational</Typography>
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>
                        <Typography variant="body2" sx={{ fontWeight: 500 }}>Cantonese:</Typography>
                      </TableCell>
                      <TableCell>
                        <Typography variant="body2">Conversational</Typography>
                      </TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </Paper>
            </Box>
          </Box>
        </Drawer>
      )}
    </>
  );
};

export default ProfileModal;

