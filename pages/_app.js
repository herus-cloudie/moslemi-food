import Layout from '@/components/layout'
import '../style/globals.css'
import { SessionProvider } from 'next-auth/react'

export default function App({ Component, pageProps : { session , ...pageProps } }) {
  return <SessionProvider session={session}>
    <Layout component={<Component {...pageProps} />}/>
  </SessionProvider>
}
