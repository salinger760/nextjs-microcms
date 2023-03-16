import { css } from 'styled-components'
import { minMq, maxMq } from '@/styles/breakPoints'
import variables from '@/styles/variables'
import { fontSize } from '@/styles/mixin'

const common = css`
  main {
    flex: 1;
  }

  h2 {
    width: fit-content;
    padding-bottom: 10px;
    margin-bottom: -10px;
    font-family: 'M PLUS 1p', sans-serif;
    ${fontSize(30)}
    font-style: normal;
    font-weight: 500;
    line-height: 100%;
    background: linear-gradient(97.61deg, #29c0ff 13.66%, #1e73be 101.36%);
    background-clip: text;
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;

    span {
      width: -webkit-fit-content;
      width: -moz-fit-content;
      width: fit-content;
      padding-bottom: 10px;
      margin-bottom: -10px;
      ${fontSize(80)}
      font-style: normal;
      font-weight: 500;
      line-height: 100%;
      background: linear-gradient(97.61deg, #29c0ff 13.66%, #1e73be 101.36%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      -webkit-background-clip: text;
      background-clip: text;
      -webkit-text-fill-color: transparent;
      text-fill-color: transparent;
    }
  }

  h3 {
    color: ${variables.BASE_BDC};
    font-weight: 700;
  }

  a {
    cursor: pointer;
    text-decoration: none;

    &.is-hover {
      transition: all 0.2s;
      img,
      span {
        opacity: 0.75;
      }
    }

    img,
    span {
      display: block;
      max-width: 100%;
      pointer-events: none;
    }
  }

  button {
    cursor: pointer;
  }

  [data-mq='sp'] {
    ${minMq('MD')} {
      display: none !important;
    }
  }

  [data-mq='pc'] {
    ${maxMq('MD')} {
      display: none !important;
    }
  }
`

export default common
