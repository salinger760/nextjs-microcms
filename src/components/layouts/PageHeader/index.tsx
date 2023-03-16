import { style } from './index.style'
import Content from '@/components/layouts/Content'

type Props = {
  pageTitle: string
}

export function PageHeader(props: Props): JSX.Element {
  return (
    <header css={style.pageHeader} id="page_header">
      <Content>
        <h1 css={style.title}>
          <span>{props.pageTitle}</span>
        </h1>
      </Content>
    </header>
  )
}
