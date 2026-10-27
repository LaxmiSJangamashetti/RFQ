import React from 'react';
import { CssBaseline, ThemeProvider, createTheme } from '@mui/material';
import AppRoutes from './routes/AppRoutes';
import './App.css';
import './SidebarPalette.css';

const theme = createTheme({
  palette: {
    primary: { main: '#1877f2', dark: '#0d5bbd', light: '#ebf3fe', contrastText: '#ffffff' },
    secondary: { main: '#f97316', dark: '#ea580c', light: '#fff7ed', contrastText: '#ffffff' },
    success: { main: '#10b981', dark: '#059669', light: '#ecfdf5' },
    warning: { main: '#f59e0b', dark: '#d97706', light: '#fffbeb' },
    info: { main: '#0284c7', dark: '#0369a1', light: '#f0f9ff' },
    error: { main: '#ef4444', dark: '#dc2626', light: '#fef2f2' },
    background: { default: '#f8fafc', paper: '#ffffff' },
    text: { primary: '#0f172a', secondary: '#64748b' },
    divider: '#e2e8f0',
  },
  typography: {
    fontFamily: "'Inter', 'IBM Plex Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
    h1: { fontFamily: "'Inter', 'IBM Plex Sans', sans-serif", fontWeight: 700, letterSpacing: '-0.02em' },
    h2: { fontFamily: "'Inter', 'IBM Plex Sans', sans-serif", fontWeight: 600, letterSpacing: '-0.01em' },
    h3: { fontFamily: "'Inter', 'IBM Plex Sans', sans-serif", fontWeight: 600 },
    h4: { fontFamily: "'Inter', 'IBM Plex Sans', sans-serif", fontWeight: 700 },
    h5: { fontFamily: "'Inter', 'IBM Plex Sans', sans-serif", fontWeight: 600 },
    h6: { fontFamily: "'Inter', 'IBM Plex Sans', sans-serif", fontWeight: 600 },
    button: { textTransform: 'none', fontWeight: 600 },
  },
  shape: { borderRadius: 6 },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 6,
          boxShadow: 'none',
          textTransform: 'none',
          transition: 'all 0.15s ease-in-out',
          '&:active': {
            transform: 'scale(0.97)',
          },
        },
        containedPrimary: {
          backgroundColor: '#1877f2',
          color: '#ffffff',
          '&:hover': {
            backgroundColor: '#0d5bbd',
            boxShadow: '0 2px 8px rgba(24, 119, 242, 0.35)',
          },
          '&:active': {
            backgroundColor: '#082f62 !important',
            color: '#ffffff !important',
          },
        },
        outlined: {
          borderColor: '#cbd5e1',
          color: '#1e293b',
          '&:hover': {
            borderColor: '#1877f2',
            backgroundColor: '#eff6ff',
            color: '#1877f2',
          },
          '&:active': {
            backgroundColor: '#0f172a !important',
            borderColor: '#0f172a !important',
            color: '#ffffff !important',
          },
        },
      },
    },
    MuiToggleButton: {
      styleOverrides: {
        root: {
          textTransform: 'none',
          fontWeight: 600,
          borderRadius: 6,
          padding: '5px 12px',
          fontSize: '12px',
          transition: 'all 0.15s ease-in-out',
          '&.Mui-selected': {
            backgroundColor: '#1877f2 !important',
            color: '#ffffff !important',
            '&:hover': {
              backgroundColor: '#0d5bbd !important',
            },
            '&:active': {
              backgroundColor: '#082f62 !important',
              color: '#ffffff !important',
            },
          },
          '&:not(.Mui-selected)': {
            backgroundColor: '#ffffff',
            color: '#475569',
            borderColor: '#e2e8f0',
            '&:hover': {
              backgroundColor: '#f1f5f9',
              color: '#0f172a',
            },
            '&:active': {
              backgroundColor: '#0f172a !important',
              borderColor: '#0f172a !important',
              color: '#ffffff !important',
            },
          },
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        outlined: {
          borderColor: '#e2e8f0',
          borderRadius: 8,
          boxShadow: '0 1px 3px 0 rgba(0, 0, 0, 0.04), 0 1px 2px -1px rgba(0, 0, 0, 0.04)',
        },
      },
    },
    MuiTab: {
      styleOverrides: {
        root: {
          textTransform: 'none',
          fontWeight: 600,
          minHeight: 46,
          fontSize: '13px',
          color: '#64748b',
          '&.Mui-selected': {
            color: '#1877f2',
          },
        },
      },
    },
  },
});

function App() {
  return <ThemeProvider theme={theme}><CssBaseline /><AppRoutes /></ThemeProvider>;
}

export default App;
