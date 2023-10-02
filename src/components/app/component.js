import * as React from 'react';

import {
  // BrowserRouter,
  HashRouter,
  Routes,
  Route
} from "react-router-dom";

import useMediaQuery from '@mui/material/useMediaQuery';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

import { Container } from '@mui/material'

import Members from 'Components/members/component'
import Navigation from 'Components/navigation/component'
import About from 'Components/about/component'
import Cancer from 'Components/cancer/component';

export default function App() {

  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');

  const theme = React.useMemo(
    () =>
      createTheme({
        palette: {
          mode: prefersDarkMode ? 'dark' : 'light',
        },
      }),
    [prefersDarkMode],
  );
  
  const style = {
    paddingTop: 10
  }

  return (
  <ThemeProvider theme={theme}>
    <CssBaseline />
    <HashRouter>
      <Navigation />
      <Container style={style}>
        <Routes>
          <Route path="/" element={<Members />} />
          <Route path="/about" element={<About />} />
          <Route path="/cancer" element={<Cancer />} />
        </Routes>
      </Container>
    </HashRouter>
  </ThemeProvider>
  )
}