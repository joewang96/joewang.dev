import "react"
import styled from "styled-components"

import { COLORS, SIZES } from "../tokens"

const H1 = styled.h1`
  font-family: "Noto Serif", Georigia, serif;
  font-size: 48px;
  font-weight: normal;
  line-height: 1.833;
  color: ${COLORS.BLACK};

  @media (max-width: ${SIZES.BREAK_LG}) {
    font-size: 44px;
  }
  @media (max-width: ${SIZES.BREAK_MD}) {
    font-size: 40px;
  }
  @media (max-width: ${SIZES.BREAK_SM}) {
    font-size: 36px;
  }

  // font-size: 3.75vw;
`

export default H1
