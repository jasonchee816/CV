import React, { useState, createContext, useContext } from 'react';
import { ThemeProvider, createTheme, CssBaseline, Box } from '@mui/material';
import ProfileSection from './components/ProfileSection';
import ContentSection from './components/ContentSection';
import ThemeToggle from './components/ThemeToggle';

interface ThemeContextType {
  toggleTheme: () => void;
  isDarkMode: boolean;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const useThemeContext = (): ThemeContextType => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useThemeContext must be used within ThemeProvider');
  }
  return context;
};

function App(): React.ReactElement {
  const [isDarkMode, setIsDarkMode] = useState<boolean>(true);

  const toggleTheme = (): void => {
    setIsDarkMode((prev) => !prev);
  };

  const theme = createTheme({
    palette: {
      mode: isDarkMode ? 'dark' : 'light',
    },
    components: {
      MuiDialog: {
        styleOverrides: {
          paper: {
            borderRadius: 16,
          },
        },
      },
      MuiButton: {
        styleOverrides: {
          root: {
            textTransform: 'none',
          },
        },
      },
    },
  });

  return (
    <ThemeContext.Provider value={{ toggleTheme, isDarkMode }}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Box
          sx={{
            minHeight: '100vh',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            py: 4,
            px: 2,
          }}
        >
          <ThemeToggle />
          <ProfileSection />
          <ContentSection />
        </Box>
      </ThemeProvider>
    </ThemeContext.Provider>
  );
}

export default App;

