import { Button, createTheme, CssBaseline, ThemeProvider } from '@mui/material';
import React, { useState } from 'react'


const themeLight = createTheme({
    palette: {
      background: {
        default: "#e4f0e2"
      }
    }
  });
  
  const themeDark = createTheme({
    palette: {
      background: {
        default: "#222222"
      },
      text: {
        primary: "#ffffff"
      }
    }
  });
function ToggleTheme() {
    const [light, setLight] = useState(true)
  return (
    <ThemeProvider theme={light? themeLight: themeDark}>
        <CssBaseline />
      <Button onClick={() => setLight((prev) => !prev)}>Toggle Theme</Button>
    </ThemeProvider>
  )
}

export default ToggleTheme