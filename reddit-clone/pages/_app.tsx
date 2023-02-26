import '@/styles/globals.css'
import { ChakraProvider } from '@chakra-ui/react';
import type { AppProps } from 'next/app'
import {} from '../Chakra/chakraTheme'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
    <ChakraProvider>
      <Component {...pageProps} />
    </ChakraProvider>
    </>
  )
}
