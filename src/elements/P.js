import "react"
import styled from "styled-components"

import { COLORS, SIZES } from "../tokens"

const P = styled.p`
  font-family: "Noto Sans", Cabin, Helvetica Neue, Helvetica, sans-serif;
  font-size: 20px;
  line-height: 1.8;
  color: ${COLORS.OFF_BLACK};
  @media (max-width: ${SIZES.BREAK_SM}) {
    font-size: 18px;
  }
`

export default P
