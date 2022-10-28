import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { DashBoardLayout } from '../Components/Layouts'

function MyApp({ Component, pageProps }: AppProps) {
  return (
      <DashBoardLayout>
          <Component {...pageProps} />
      </DashBoardLayout>
  )
}

export default MyApp
