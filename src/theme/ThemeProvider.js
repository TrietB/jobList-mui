import { ThemeProvider, createTheme } from '@mui/material/styles';
import React from 'react'


const theme = createTheme({
    palette: {
        primary: {
            main: '#000000'
        }
    }
  });
  
function Theming({children}) {

  return (
    <ThemeProvider theme={theme}>
        {children}
    </ThemeProvider>
  )
}

export default Theming