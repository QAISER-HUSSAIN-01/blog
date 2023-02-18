import '../styles/globals.css'
import Layout from '../src/components/shared/layout'
import { SnackbarProvider } from 'notistack'
import { CookiesProvider } from 'react-cookie'
export default function App({ Component, pageProps }) {
  return (
    <SnackbarProvider autoHideDuration={2000} anchorOrigin={{ horizontal: 'center', vertical: 'bottom' }}>
      <CookiesProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </CookiesProvider>
    </SnackbarProvider>
  )
}
