import { useEffect, useState } from 'react'
import type { AppProps } from 'next/app'
import { QueryClient, QueryClientProvider, Hydrate } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
//import axios from '@/lib/axios'
//import storeCsrf from '@/stores/storeCsrf'
//import { CsrfToken } from '@/types'
import { addHoverEvent } from '@/utils/addHoverEvent'
//import { googleTagManagerId } from '../utils/gtm'
//import GoogleTagManager, {
//  GoogleTagManagerId,
//} from '../components/GoogleTagManager'
//import { GoogleReCaptchaProvider } from 'react-google-recaptcha-v3'

//const queryClient = new QueryClient({
//  defaultOptions: {
//    queries: {
//      retry: false,
//      refetchOnWindowFocus: false,
//    },
//  },
//})

export default function MyApp({ Component, pageProps, router }: AppProps) {
  useEffect(() => {
    // Processing when hovering to a tag
    addHoverEvent()
  }, [router.pathname])

  const [queryClient] = useState(() => new QueryClient())

  return (
    <>
      <QueryClientProvider client={queryClient}>
        <Hydrate state={pageProps.dehydratedState}>
          <Component {...pageProps} />
          <ReactQueryDevtools initialIsOpen={false} />
        </Hydrate>
      </QueryClientProvider>
    </>
  )
}
