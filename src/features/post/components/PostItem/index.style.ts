import { css } from 'styled-components'
import variables from '@/styles/variables'
import { fontSize } from '@/styles/mixin'

const wrapCard = css`
  background-color: ${variables.WHITE};
  border-radius: 10px;
  box-shadow: 20px 20px 60px ${variables.BASE_BGC}, -20px -20px 60px ${variables.BASE_BGC};
  display: flex;
  margin-top: 100px;
  padding: ${variables.BLOCK_PAD};
`

const content = css`
  display: flex;
  flex-flow: column;
  justify-content: space-between;
  margin-left: 20px;
`

const cardHeader = css`
  p {
    ${fontSize(20)}
  }
`

const image = css`
  height: 100%;
  width: 150px;
`

const button = css`
  align-self: flex-start;
  border-bottom: 2px solid ${variables.THEME_C};
  ${fontSize(16)}
`

export const style = {
  wrapCard,
  content,
  cardHeader,
  image,
  button,
}
