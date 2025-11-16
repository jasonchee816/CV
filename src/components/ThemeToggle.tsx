import React from 'react';
import { IconButton, useTheme } from '@mui/material';
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import { useThemeContext } from '../App';

interface ThemeToggleProps {
  // No props needed
}

const ThemeToggle: React.FC<ThemeToggleProps> = () => {
  const { toggleTheme, isDarkMode } = useThemeContext();
  const theme = useTheme();

  return (
    <IconButton
      onClick={toggleTheme}
      sx={{
        position: 'fixed',
        top: 16,
        right: 16,
        zIndex: 1300,
        bgcolor: 'background.paper',
        boxShadow: 2,
        '&:hover': {
          bgcolor: 'action.hover',
        },
      }}
      aria-label="toggle theme"
    >
      {isDarkMode ? (
          <DarkModeIcon sx={{ color: theme.palette.primary.main }} />
        ) : (
          <LightModeIcon sx={{ color: theme.palette.warning.main }} />
      )}
    </IconButton>
  );
};

export default ThemeToggle;

