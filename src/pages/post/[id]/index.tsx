import { GetStaticProps, GetStaticPaths } from 'next'
import Router from 'next/router'
import Page from '@/components/layouts/Page'
import { PageHeader } from '@/components/layouts/PageHeader'
import Content from '@/components/layouts/Content'
import { Posts } from '@/features/post/types'
import { client } from '@/libs/microcmsClient'
import { parseContents } from '@/libs/htmlReactParser'

const title = 'ユーザ詳細'

const returnList = () => {
  Router.push({
    pathname: '/post',
  })
}

type Props = {
  data: Posts
}

const UserDetail = ({ data }: Props): JSX.Element => {
  return (
    <Page title={title}>
      <PageHeader pageTitle="News detail" />
      <Content>
        <div css={''}>
          <h1>{data.title}</h1>
          {parseContents(data.detail)}
          {data.mainImage && <img src={data.mainImage.url} alt={data.title} />}
          <button css={''} onClick={returnList}>
            <span>一覧に戻る</span>
          </button>
        </div>
      </Content>
    </Page>
  )
}

export default UserDetail

export const getStaticPaths: GetStaticPaths = async () => {
  const data = await client.get({ endpoint: 'posts' })

  const paths = data.contents.map((content: Posts) => `/post/${content.id}`)
  return { paths, fallback: false }
}

export const getStaticProps: GetStaticProps = async (context) => {
  const id = context.params?.id as string
  const data: Posts = await client.get({ endpoint: 'posts', contentId: id })

  return {
    props: {
      data: data,
    },
  }
}
