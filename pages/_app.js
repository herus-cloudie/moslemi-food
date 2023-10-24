import Layout from '@/components/layout'
import '../style/globals.css'

export default function App({ Component, pageProps }) {
  return <Layout component={<Component {...pageProps} />}/>
}
