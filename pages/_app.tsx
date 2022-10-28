import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { DashBoardLayout } from '../Components/Layouts'
import {ThemeProvider, createTheme} from '@mui/material'

const theme = createTheme({
    typography: {
      fontFamily: 'Raleway, Arial',
    },
    components: {
      MuiCssBaseline: {
        styleOverrides: `
          @font-face {
            font-family: 'Raleway';
            font-style: normal;
            font-display: swap;
            font-weight: 400;
            src: url('../public/fonts/raleway.ttf')
          }
        `,
      },
    },
  });

function MyApp({ Component, pageProps }: AppProps) {
  return (
      <ThemeProvider theme={theme}>
          <DashBoardLayout>
              <Component {...pageProps} />
          </DashBoardLayout>
      </ThemeProvider>
  )
}

export default MyApp
