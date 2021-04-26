import '../styles/globals.css';
import '../styles/common.css';
import Header from './header';
import Footer from './footer';

function MyApp({ Component, pageProps }) {
  return(
    <>
    <Header/>
      <Component {...pageProps} />
    <Footer/>
    </>
  )
}

export default MyApp
