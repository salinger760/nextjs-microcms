import { css } from 'styled-components'
import { minMq } from '@/styles/breakPoints'
import variables from '@/styles/variables'
import { fontSize } from '@/styles/mixin'

export const page = css`
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  display: flex;
  flex-flow: column;
  font-family: 'Noto Sans JP', 'Hiragino Kaku Gothic ProN', 'ヒラギノ角ゴ ProN W3', sans-serif;
  ${fontSize(14)}

  justify-content: flex-start;
  min-height: 100vh;
  padding-top: ${variables.HEADER_H_SP};
  position: relative;

  ${minMq('MD')} {
    ${fontSize(16)}
    padding-top: ${variables.HEADER_H_PC};
  }
`

export const style = {
  page,
}
