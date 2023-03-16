import * as React from 'react'
import { LinearProgress } from '@mui/material'

export type Props = {
  progress: number
}

export default function CustomProgress({ progress }: Props): JSX.Element {
  return <LinearProgress variant="determinate" value={progress} />
}
