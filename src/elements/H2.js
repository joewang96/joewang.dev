import "react"
import styled from "styled-components"

import { COLORS, SIZES } from "../tokens"

const H1 = styled.h2`
  font-family: "Noto Serif", Georigia, serif;
  font-size: 40px;
  font-weight: normal;
  line-height: 1.833;
  color: ${COLORS.BLACK};

  @media (max-width: ${SIZES.BREAK_LG}) {
    font-size: 36px;
  }
  @media (max-width: ${SIZES.BREAK_MD}) {
    font-size: 32px;
  }
  @media (max-width: ${SIZES.BREAK_SM}) {
    font-size: 28px;
  }

  // font-size: 3.125vw;
`

export default H1
