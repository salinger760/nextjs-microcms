import emailjs from '@emailjs/browser'
import { EMAILJS_PUBLIC_KEY, EMAILJS_EMAILJS_SERVICE_ID, EMAILJS_PTEMPLATE_ID } from '@/config'

export const mailSend = (templateParams: { [key: string]: string }) => {
  emailjs.send(EMAILJS_EMAILJS_SERVICE_ID, EMAILJS_PTEMPLATE_ID, templateParams, EMAILJS_PUBLIC_KEY)
}
