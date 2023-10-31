import React, { lazy, Suspense } from 'react';

import {
  HashRouter,
  Routes,
  Route
} from "react-router-dom";

import useMediaQuery from '@mui/material/useMediaQuery';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

import { Container } from '@mui/material'

import Navigation from 'Components/navigation/component'
const Members = lazy( () => import('Components/members/component'))
const About = lazy( () => import('Components/about/component'))
const Cancer = lazy( () => import('Components/cancer/component'))

export default function App() {

  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');

  const theme = React.useMemo(
    () =>
      createTheme({
        palette: {
          mode: prefersDarkMode ? 'dark' : 'light',
          background: {
            default: prefersDarkMode ? '#111' : '#eee'
          }
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
        <Suspense fallback={<div>loading...</div>}>
          <Routes>
            <Route path="/" element={<Members />} />
            <Route path="/about" element={<About />} />
            <Route path="/cancer" element={<Cancer />} />
          </Routes>
        </Suspense>
      </Container>
    </HashRouter>
  </ThemeProvider>
  )
}