import { TextField, Box } from '@mui/material'

import { style } from './index.style'

export default function CustomTimePicker(): JSX.Element {
  return (
    <Box>
      <TextField type="time" css={style.timePicker} />
    </Box>
  )
}
