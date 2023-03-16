import { useState } from 'react'

function useBool(initialValue: boolean): [boolean, () => void, () => void] {
  const [value, setValue] = useState(initialValue)
  return [value, () => setValue(true), () => setValue(false)]
}

export default useBool
