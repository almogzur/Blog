// root level component for feeding next width the style modles 

import '../styles/globals.css'
import '../styles/hearer.css'
import '../styles/card.css'

    function MyApp({ Component, pageProps }) {
      return <Component {...pageProps} />
    }

    export default MyApp