import { TextField } from '@mui/material'
import { style } from './index.style'

export type Size = 'sm' | 'md' | 'lg'

export type Props = {
  size: Size
  placeholder?: string
  value: string
  changeEvent?: (e: React.ChangeEvent<HTMLInputElement>) => void
}

export default function FormTextField({
  size,
  placeholder = '',
  value,
  changeEvent,
}: Props): JSX.Element {
  return (
    <TextField
      variant="outlined"
      placeholder={placeholder}
      css={style.text(size)}
      value={value}
      onChange={changeEvent}
    />
  )
}
