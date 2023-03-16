import emailjs from '@emailjs/browser'
import { useForm, Controller, SubmitHandler } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as z from 'zod'
import Page from '@/components/layouts/Page'
import { PageHeader } from '@/components/layouts/PageHeader'
import Content from '@/components/layouts/Content'
import FormTextField from '@/components/ui/FormTextField'
import FormRadio, { Items as RadioType } from '@/components/ui/FormRadio'
import { EMAILJS_PUBLIC_KEY, EMAILJS_EMAILJS_SERVICE_ID, EMAILJS_PTEMPLATE_ID } from '@/config'

const pageTitle = 'mail form'

type FormInput = {
  name: string
  email: string
  text: string
  category: string
}

export default function Contact(): JSX.Element {
  const schema = z.object({
    name: z.string().min(1, { message: '名前は入力必須です!' }),
    email: z
      .string()
      .email({ message: 'メールアドレスの形式にしてね!' })
      .min(1, { message: 'メールアドレスは入力必須です!' }),
    text: z.string().max(100, { message: '100文字以内にしてね!' }),
    category: z.string().min(1, { message: '必須です!' }),
  })

  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<FormInput>({
    mode: 'onSubmit',
    defaultValues: { name: '', email: '', text: '', category: '' },
    resolver: zodResolver(schema),
  })

  const onSubmit: SubmitHandler<FormInput> = (data) => {
    console.log('SubmitHandler - ', data)
    emailjs.send(EMAILJS_EMAILJS_SERVICE_ID, EMAILJS_PTEMPLATE_ID, data, EMAILJS_PUBLIC_KEY).then(
      (result) => {
        alert(result.text)
      },
      (error) => {
        alert(error.text)
      },
    )
  }

  const raditoItems: RadioType[] = [
    {
      value: '1',
      label: '1番',
    },
    {
      value: '2',
      label: '2番',
    },
    {
      value: '3',
      label: '3番',
    },
  ]

  return (
    <Page title={pageTitle}>
      <PageHeader pageTitle="Add User" />
      <Content>
        <h2>フォーム</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Controller
            name="name"
            control={control}
            render={({ field: { onChange, value } }) => (
              <FormTextField
                value={value}
                changeEvent={(e) => {
                  onChange(e)
                  //(e, 'name')
                }}
                size="md"
                placeholder="なまえ"
              />
            )}
            defaultValue=""
          />
          <p>{errors.name?.message}</p>

          <Controller
            control={control}
            name="email"
            render={({ field: { onChange, value } }) => (
              <FormTextField
                value={value}
                changeEvent={(e) => {
                  onChange(e)
                  //handleOnChenge(e, 'email')
                }}
                size="md"
                placeholder="Eメール"
              />
            )}
            defaultValue=""
          />
          <p>{errors.email?.message}</p>

          <Controller
            name="category"
            control={control}
            render={({ field: { name, onChange, value } }) => {
              console.log('value - ', value)
              return (
                <FormRadio
                  formLabel="テストグループ"
                  defaultValue="2"
                  name={name}
                  value={value}
                  changeEvent={onChange}
                  items={raditoItems}
                />
              )
            }}
          />
          <p>{errors.category?.message}</p>

          <Controller
            name="text"
            control={control}
            render={({ field: { onChange, value } }) => (
              <FormTextField
                value={value}
                changeEvent={(e) => {
                  onChange(e)
                  //handleOnChenge(e, 'text')
                }}
                size="lg"
                placeholder="問い合わせ内容"
              />
            )}
            defaultValue=""
          />
          <p>{errors.text?.message}</p>

          <input type="submit" value="送信" />
        </form>
      </Content>
    </Page>
  )
}
