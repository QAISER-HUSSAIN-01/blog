import '../styles/globals.css'
import Layout from '../src/components/shared/layout'
import { SnackbarProvider } from 'notistack'
export default function App({ Component, pageProps }) {
  return (
    <SnackbarProvider autoHideDuration={2000} anchorOrigin={{horizontal: 'center', vertical: 'bottom'}}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </SnackbarProvider>
  )
}
