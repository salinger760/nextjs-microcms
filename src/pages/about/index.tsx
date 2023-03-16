import Page from '@/components/layouts/Page'
import { PageHeader } from '@/components/layouts/PageHeader'
import Content from '@/components/layouts/Content'
import { Section } from '@/components/layouts/Heading/Section'
import { H } from '@/components/layouts/Heading/H'

const pageTitle = '概要'

export default function About(): JSX.Element {
  return (
    <Page title={pageTitle}>
      <PageHeader pageTitle="About" />
      <Content>
        <Section>
          <H>
            <span>About</span>
          </H>
          <Section>
            <H>
              <span>About2</span>
            </H>
            <Section>
              <H>
                <span>About3</span>
              </H>
            </Section>
          </Section>
        </Section>
      </Content>
    </Page>
  )
}
