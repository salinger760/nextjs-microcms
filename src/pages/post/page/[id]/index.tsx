import { GetStaticProps, GetStaticPaths } from 'next'
import Link from 'next/link'
import Page from '@/components/layouts/Page'
import { PageHeader } from '@/components/layouts/PageHeader'
import Content from '@/components/layouts/Content'
import { Pagenation } from '@/components/layouts/Pagenation'
import { client } from '@/libs/microcmsClient'
import { PER_PAGE } from '@/config'
import { Posts } from '@/features/post/types'

const pageTitle = 'お知らせ一覧 | boilerplate'

type Props = {
  posts: Posts[]
  totalCount: number
}

const PageId = ({ posts, totalCount }: Props): JSX.Element => {
  return (
    <Page title={pageTitle}>
      <PageHeader pageTitle="News" />
      <Content>
        <ul>
          {posts.map((post: Posts) => {
            return (
              <li key={post.id}>
                <Link href={`/post/${post.id}`}>{post.title}</Link>
              </li>
            )
          })}
        </ul>
        <Pagenation totalCount={totalCount} />
      </Content>
    </Page>
  )
}

export default PageId

export const getStaticPaths: GetStaticPaths = async () => {
  const repos = await client.get({ endpoint: 'posts' })

  const range = (start: number, end: number) => [...Array(end - start + 1)].map((_, i) => start + i)

  const paths = range(1, Math.ceil(repos.totalCount / PER_PAGE)).map((repo) => `/post/page/${repo}`)

  return { paths, fallback: false }
}

// データを取得
export const getStaticProps: GetStaticProps = async (context) => {
  const id = context.params?.id
  const idExceptArray = id instanceof Array ? Number(id[0]) : Number(id)
  const data = await client.get({
    endpoint: 'posts',
    queries: { offset: (idExceptArray - 1) * PER_PAGE, limit: PER_PAGE },
  })

  return {
    props: {
      posts: data.contents,
      totalCount: data.totalCount,
    },
  }
}
