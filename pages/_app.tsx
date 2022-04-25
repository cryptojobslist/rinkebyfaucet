import 'styles/index.css'
import Head from 'next/head'
import { NextSeo } from 'next-seo'
import { ThemeProvider } from 'next-themes'
import { NextContextProvider } from 'lib/contextApi'

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider>
      <NextContextProvider>
        <NextSeo
          title={process.env.appName}
          description='Rinkeby Faucet - Get your Rinkeby ETH for development and testing here.'
        />
        <Head>
          <link
            rel='stylesheet'
            href='https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,400;0,700;1,400&display=swap'
          />
        </Head>
        <Component {...pageProps} />
      </NextContextProvider>
    </ThemeProvider>
  )
}

export default MyApp
