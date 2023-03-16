export type Schedule = {
  id: number
  user_id: number
  period_start: Date
  period_end: Date
  title: string
  memo: string
}

export type EditedSchedule = Schedule

export type UserInfo = {
  email: string
}
export type User = {
  email: string
  password: string
}

export type Login = {
  id: number
  name: string
  email: string
  is_active: boolean
}

export type CreateUser = {
  id: number
  name: string
  email: string
  is_active: boolean
  hashed_password: string
}

export type CsrfToken = {
  csrf_token: string
  csrf_token_expire: boolean
}
export type ToggleCsrfState = Omit<CsrfToken, 'csrf_token'>

export type VerifyLogin = {
  verify_login: boolean
}
