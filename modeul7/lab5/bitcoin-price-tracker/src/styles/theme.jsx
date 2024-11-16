// src/styles/theme.js
import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#4caf50', 
    },
    secondary: {
      main: '#000000', 
    },
  },
  typography: {
    h1: {
      fontFamily: '"Roboto", sans-serif',
      fontWeight: 700,
    },
    h2: {
      fontFamily: '"Roboto", sans-serif',
      fontWeight: 500,
    },
    body1: {
      fontFamily: '"Arial", sans-serif',
      fontWeight: 400,
    },
  },
});

export default theme;
