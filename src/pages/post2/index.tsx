import Link from 'next/link'
import { client } from '@/libs/microcmsClient'
import Page from '@/components/layouts/Page'
import Content from '@/components/layouts/Content'
import { PageHeader } from '@/components/layouts/PageHeader'
import { Pagenation } from '@/components/layouts/Pagenation'
import { Posts } from '@/features/post/types'
import { style } from '@/features/post/components/index.style'

import { dehydrate, QueryClient, useQuery } from '@tanstack/react-query'

import type { GetServerSideProps } from 'next'

export const config = {
  runtime: 'experimental-edge',
}

const pageTitle = 'お知らせ一覧 | boilerplate'

type Props = {
  contents: Posts[]
  totalCount: number
}

export default function Post(): JSX.Element {
  //export default function Post(props: Props): JSX.Element {

  const { isLoading, error, data } = useQuery<boolean, Error, Props>(
    ['posts'],
    () => client.get({ endpoint: 'posts', queries: { limit: 5, offset: 0 } }),
    {
      staleTime: Infinity,
    },
  )

  if (error || !data) return <p>An error has occurred</p>

  if (isLoading) return <p>Loading...</p>

  const news = data.contents

  return (
    <Page title={pageTitle}>
      <PageHeader pageTitle="News" />
      <Content>
        <div css={style.userSection}>
          <h1>お知らせ一覧 SSR</h1>
        </div>

        <ul>
          {news.map((post: Posts) => (
            <li key={post.id}>
              <Link href={`/post/${post.id}`}>{post.title}</Link>
            </li>
          ))}
        </ul>

        <Pagenation totalCount={data.totalCount} />
      </Content>
    </Page>
  )
}

export const getServerSideProps: GetServerSideProps = async () => {
  //const data = await client.get({ endpoint: 'posts', queries: { limit: 5, offset: 0 } })

  const queryClient = new QueryClient()

  await queryClient.prefetchQuery(['posts'], () =>
    client.get({ endpoint: 'posts', queries: { limit: 5, offset: 0 } }),
  )

  return {
    props: {
      //news: data.contents,
      //totalCount: data.totalCount,
      dehydratedState: dehydrate(queryClient),
    },
  }
}
