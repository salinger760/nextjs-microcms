import { NextPage } from 'next'
import { useRouter } from 'next/router'
import { createGlobalStyle } from 'styled-components'
import HeadInfo from '@/components/HeadInfo'
import SiteHeader from '@/components/layouts/SiteHeader'
import { SiteFooter } from '@/components/layouts/SiteFooter'
import ScrollTop from '@/components/layouts/ScrollTop'
import Body from '@/components/layouts/Body'
import normalize from '@/styles/normalize'
import common from '@/styles/common'
import icomoon from '@/styles/icomoon'
import { style } from './index.style'

type Props = {
  title: string
  children: React.ReactNode
}

const Page: NextPage<Props> = (props) => {
  const GlobalStyle = createGlobalStyle`
  ${normalize}
  ${common}
  ${icomoon}
`

  const { asPath } = useRouter()
  const origin =
    typeof window !== 'undefined' && window.location.origin ? window.location.origin : ''

  return (
    <div css={style.page}>
      <GlobalStyle />
      <HeadInfo siteTitle={props.title} pageBaseUrl={origin} pagePath={asPath} />
      <SiteHeader />

      <Body>{props.children}</Body>
      <SiteFooter />
      <ScrollTop />
    </div>
  )
}

export default Page
