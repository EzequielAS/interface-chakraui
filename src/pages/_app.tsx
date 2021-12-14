import { ChakraProvider } from '@chakra-ui/react'
import type { AppProps } from 'next/app'
import Head from 'next/head';

import { theme } from '../styles/theme'

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import '../styles/slider.css'

export default function MyApp({ Component, pageProps }: AppProps) {
    return(
      <>
        <Head>
          <title>worldtrip</title>
        </Head>
        <ChakraProvider theme={theme}>
          <Component {...pageProps} />
        </ChakraProvider>
      </>
    )
}
