import { FormGroup, FormControlLabel, Checkbox } from '@mui/material'

type Items = {
  label: string
  defaultChecked?: boolean
}

export type Props = {
  items: Array<Items>
}

export default function CustomCheckbox({ items }: Props): JSX.Element {
  return (
    <FormGroup row>
      {items.map((item) => {
        return (
          <FormControlLabel
            key={item.label}
            control={<Checkbox defaultChecked={item.defaultChecked} />}
            label={item.label}
          />
        )
      })}
    </FormGroup>
  )
}
