import * as React from 'react';
import { Grid } from '@mui/material';
import members from 'Data/members';
import Member from 'Components/member/component'

import useMediaQuery from '@mui/material/useMediaQuery';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

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

  const memberComponents = members.map(
    member => <Grid item xs={3} key={member.id}><Member
                name={member.name}
                github={member.github}
                webpage={member.webpage}
              >
              </Member></Grid>
    )
  return (
  <ThemeProvider theme={theme}>
    <CssBaseline />
      <Grid container spacing={2}>
        {memberComponents}
      </Grid>
  </ThemeProvider>
  )
}