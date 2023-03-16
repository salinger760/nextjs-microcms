import { Suspense } from 'react'
import Link from 'next/link'
import { client } from '@/libs/microcmsClient'
import Page from '@/components/layouts/Page'
import { PageHeader } from '@/components/layouts/PageHeader'
import Content from '@/components/layouts/Content'
import { Pagenation } from '@/components/layouts/Pagenation'
import { Posts } from '@/features/post/types'
import { style } from '@/features/post/components/index.style'

const pageTitle = 'お知らせ一覧 | boilerplate'

type Props = {
  news: Posts[]
}

const Post = (props: Props): JSX.Element => {
  return (
    <Page title={pageTitle}>
      <PageHeader pageTitle="News" />
      <Content>
        <div css={style.userSection}>
          <h1>お知らせ一覧</h1>
        </div>

        <Suspense fallback={<p>Loading...</p>}>
          <ul>
            {props.news.map((post: Posts) => (
              <li key={post.id}>
                <Link href={`/post/${post.id}`}>{post.title}</Link>
              </li>
            ))}
          </ul>
        </Suspense>
        <Pagenation totalCount={6} />
      </Content>
    </Page>
  )
}

export default Post

export async function getStaticProps() {
  const data = await client.get({ endpoint: 'posts', queries: { limit: 5, offset: 0 } })
  return {
    props: {
      news: data.contents,
      totalCount: data.totalCount,
    },
  }
}
