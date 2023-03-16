import { css } from 'styled-components'
import { minMq } from '@/styles/breakPoints'
import variables from '@/styles/variables'

const siteHeader = css`
  align-items: center;
  background-color: ${variables.WHITE};
  display: flex;
  height: ${variables.HEADER_H_SP};
  justify-content: space-between;
  left: 0;
  padding: calc(${variables.UNIT} * 2);
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 99;
  ${minMq('MD')} {
    height: ${variables.HEADER_H_PC};
    justify-content: center;
  }
`

const siteTitle = css`
  align-items: center;
  display: flex;
  max-width: 200px;
  position: static;
  z-index: 1;

  ${minMq('MD')} {
    margin-left: 40px;
  }
`

export const style = {
  siteHeader,
  siteTitle,
}
