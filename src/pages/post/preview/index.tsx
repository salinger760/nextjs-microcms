import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import Page from '@/components/layouts/Page'
import { PageHeader } from '@/components/layouts/PageHeader'
import Content from '@/components/layouts/Content'
import { Posts } from '@/features/post/types'
import { client } from '@/libs/microcmsClient'
import { parseContents } from '@/libs/htmlReactParser'

const title = 'ニュース | プレビュー'

const UserDetail = (): JSX.Element => {
  const router = useRouter()

  const [data, setData] = useState<Posts>()

  useEffect(() => {
    const getNews = async () => {
      if (!router.isReady) return

      const res = await client.get<Posts>({
        endpoint: 'posts',
        contentId: router.query.slug as string,
        queries: { draftKey: router.query.draftKey as string },
      })

      setData(res)
    }

    getNews()
  }, [router])

  const Preview = () => {
    if (data) {
      return (
        <div css={''}>
          <h1>{data.title}</h1>
          {parseContents(data.detail)}
          {data.mainImage && <img src={data.mainImage.url} alt={data.title} />}
          <button css={''}>
            <span>一覧に戻る</span>
          </button>
        </div>
      )
    } else {
      return <p>Loading</p>
    }
  }

  return (
    <Page title={title}>
      <PageHeader pageTitle="News detail" />
      <Content>{Preview()}</Content>
    </Page>
  )
}

export default UserDetail
