import React from 'react';
import { ColorModeContext, useMode } from './theme';
import { Box, Button, CssBaseline, Stack, ThemeProvider } from '@mui/material';
function App() {

  const [theme, colorMode, mode] = useMode();

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="app">
          Let's Cheers together!

          <Box>
            <Stack spacing={2} direction='row'>
              <Button variant="text">Text</Button>
              <Button variant="contained" color='primary' onClick={() => colorMode.toggleColorMode()}>{mode}</Button>
              <Button variant="outlined">Outlined</Button>
            </Stack>
            <Stack spacing={2} direction='row'>
              <Button variant="text" disabled>Text</Button>
              <Button variant="contained" color='primary' disabled>Contained</Button>
              <Button variant="outlined" disabled>Outlined</Button>
            </Stack>
          </Box>

        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>

  );
}

export default App;
