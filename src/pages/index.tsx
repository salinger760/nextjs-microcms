import Page from '@/components/layouts/Page'
import Content from '@/components/layouts/Content'
import { Section } from '@/components/layouts/Heading/Section'
import { H } from '@/components/layouts/Heading/H'
import { style } from '@/features/home/components/index.style'
import { BASE_PATH } from '@/config'

export default function Home(): JSX.Element {
  const pageTitle = 'Boilerplate'

  return (
    <Page title={pageTitle}>
      <Content>
        <section css={style.mainSection}>
          <img
            src={`${BASE_PATH}/home/img/background.jpg`}
            alt=""
            css={style.visual}
          />
        </section>
        <Section>
          <section css={style.mainSection}>
            <p css={style.title}>TEST</p>

            <div>
              <H>
                メッセージ<span>Message</span>
              </H>
              <p>
                ビデオを使うと、伝えたい内容を明確に表現できます。[オンライン ビデオ]
                をクリックすると、追加したいビデオを、それに応じた埋め込みコードの形式で貼り付けできるようになります。キーワードを入力して、文書に最適なビデオをオンラインで検索することもできます。
                Word に用意されているヘッダー、フッター、表紙、テキスト ボックス
                デザインを組み合わせると、プロのようなできばえの文書を作成できます。たとえば、一致する表紙、ヘッダー、サイドバーを追加できます。[挿入]
                をクリックしてから、それぞれのギャラリーで目的の要素を選んでください。
                テーマとスタイルを使って、文書全体の統一感を出すこともできます。[デザイン]
                をクリックし新しいテーマを選ぶと、図やグラフ、SmartArt
                グラフィックが新しいテーマに合わせて変わります。スタイルを適用すると、新しいテーマに適合するように見出しが変更されます。
                Word
                では、必要に応じてその場に新しいボタンが表示されるため、効率よく操作を進めることができます。文書内に写真をレイアウトする方法を変更するには、写真をクリックすると、隣にレイアウト
                オプションのボタンが表示されます。表で作業している場合は、行または列を追加する場所をクリックして、プラス記号をクリックします。
                新しい閲覧ビューが導入され、閲覧もさらに便利になりました。文書の一部を折りたたんで、必要な箇所に集中することができます。最後まで読み終わる前に中止する必要がある場合、Word
                では、たとえ別のデバイスであっても、どこまで読んだかが記憶されます。
              </p>
              <Section>
                <H>ああああ</H>
              </Section>
            </div>
          </section>
        </Section>
      </Content>
    </Page>
  )
}
