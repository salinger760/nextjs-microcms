import { useState } from 'react'
import Page from '@/components/layouts/Page'
import { PageHeader } from '@/components/layouts/PageHeader'
import Content from '@/components/layouts/Content'
import FormTemplate from '@/features/contact/components/Template'
import { Input, Confirm, Thanks } from '@/features/contact/components'

const pageTitle = 'mail form'

export default function Contact(): JSX.Element {
  const [step, setStep] = useState(0)

  type switchFunction = () => void
  const nextStep = () => setStep(step + 1)
  const prevStep = () => setStep(step - 1)

  const switchForm = (nextStep: switchFunction): JSX.Element => {
    switch (step) {
      case 0:
        return <Input nextFormStep={nextStep} />
      case 1:
        return <Confirm nextFormStep={nextStep} />
      default:
        return <Thanks />
    }
  }

  return (
    <Page title={pageTitle}>
      <PageHeader pageTitle="Add User" />
      <Content>
        <h2>フォーム{step}</h2>
        <FormTemplate prevFromStep={prevStep} currentStep={step}>
          {switchForm(nextStep)}
        </FormTemplate>
      </Content>
    </Page>
  )
}
