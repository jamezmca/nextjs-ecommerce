import Header from '../components/Header'
import { AppWrapper } from '../context/CartContext'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return <AppWrapper><Header/><Component {...pageProps} /></AppWrapper>

}

export default MyApp
