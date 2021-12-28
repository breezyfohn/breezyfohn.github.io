import * as React from 'react';

import {
  BrowserRouter,
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
    <BrowserRouter>
      <Navigation />
      <Container style={style}>
        <Routes>
          <Route path="/" element={<Members />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </Container>
    </BrowserRouter>
  </ThemeProvider>
  )
}