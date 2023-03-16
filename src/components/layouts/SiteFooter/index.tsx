import Link from 'next/link'
import { style } from './index.style'
import Content from '@/components/layouts/Content'
import { BASE_PATH } from '@/config'

export function SiteFooter(): JSX.Element {
  return (
    <footer css={style.siteFooter}>
      <Content>
        <div css={style.wrapFooter}>
          <div css={style.footerLogo}>
            <Link href="/">
              <img src={`${BASE_PATH}/common/logo.png`} alt="" />
            </Link>
          </div>

          <div css={style.footerSns}>
            <a href="" target="_blank" rel="noopener noreferrer">
              <img
                src={`${BASE_PATH}/common/twitter.svg`}
                alt=""
                css={style.twitter}
              />
            </a>
          </div>
        </div>
        <div css={style.copyright}>
          <p>TEST</p>
        </div>
      </Content>
    </footer>
  )
}
