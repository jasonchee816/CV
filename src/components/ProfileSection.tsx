import React from 'react';
import { Box, Typography, Avatar, Link, Stack } from '@mui/material';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import EmailIcon from '@mui/icons-material/Email';
import ProfileModal from './ProfileModal';
import jasonCheeImage from '../images/JasonChee.jpg';

const ProfileSection: React.FC = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        mb: 4,
        textAlign: 'center',
      }}
    >
      <ProfileModal>
        <Box sx={{ position: 'relative', display: 'inline-block' }}>
          <Avatar
            src={jasonCheeImage}
            alt="Jason Chee"
            sx={{
              width: { xs: 120, sm: 150 },
              height: { xs: 120, sm: 150 },
              border: 3,
              borderColor: 'primary.main',
              boxShadow: 4,
              transition: 'transform 0.2s ease-in-out',
              '&:hover': {
                transform: 'scale(1.05)',
              },
            }}
          />
          <Box
            sx={{
              position: 'absolute',
              top: 8,
              right: 8,
              bgcolor: 'primary.main',
              color: 'primary.contrastText',
              borderRadius: '50%',
              width: 24,
              height: 24,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '0.75rem',
              fontWeight: 'bold',
              boxShadow: 2,
            }}
          >
            i
          </Box>
        </Box>
      </ProfileModal>

      <Typography
        variant="h3"
        sx={{
          fontWeight: 700,
          mt: 3,
          mb: 2,
          color: 'text.primary',
        }}
      >
        Hi! I'm Jason Chee
      </Typography>

      <Typography
        variant="h6"
        component={'text'}
        sx={{
          fontWeight: 500,
          mb: 1,
          color: 'text.primary',
        }}
      >
        software engineer, runner, writer
      </Typography>

      <Stack direction="row" spacing={2} sx={{ mt: 2 }}>
        <Link
          href="https://www.linkedin.com/in/jia-sheng-chee-5097701ab/"
          target="_blank"
          rel="noopener noreferrer"
          sx={{
            color: 'primary.main',
            '&:hover': {
              color: 'primary.dark',
            },
          }}
        >
          <LinkedInIcon sx={{ fontSize: 32 }} />
        </Link>
        <Link
          href="https://github.com/jasonchee816"
          target="_blank"
          rel="noopener noreferrer"
          sx={{
            color: 'text.primary',
            '&:hover': {
              color: 'primary.main',
            },
          }}
        >
          <GitHubIcon sx={{ fontSize: 32 }} />
        </Link>
        <Link
          href="mailto:jasonchee01@hotmail.com"
          sx={{
            color: 'error.main',
            '&:hover': {
              color: 'error.dark',
            },
          }}
        >
          <EmailIcon sx={{ fontSize: 32 }} />
        </Link>
      </Stack>
    </Box>
  );
};

export default ProfileSection;

