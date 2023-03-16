import { css } from 'styled-components'
import { minMq } from '@/styles/breakPoints'
import variables from '@/styles/variables'
import { fontSize } from '@/styles/mixin'

const pageHeader = css`
  background-color: ${variables.BASE_BGC};
  padding-bottom: ${variables.BLOCK_SPACE};
  padding-top: ${variables.BLOCK_PAD};
`
const title = css`
  ${fontSize(20)}
  margin-top: 0.5em;

  ${minMq('MD')} {
    ${fontSize(22)}
  }
`

export const style = {
  pageHeader,
  title,
}
