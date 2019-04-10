import { Link } from "gatsby"
import React from "react"
import styled from "styled-components"

import { COLORS, SIZES } from "../tokens"

const Navigation = styled.nav`
  padding: 0 ${SIZES.PADDING_DESKTOP};
  height: 100px;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: ${SIZES.BREAK_LG}) {
    padding: 0 ${SIZES.PADDING_TABLET};
  }

  @media (max-width: ${SIZES.BREAK_SM}) {
    padding: 0 ${SIZES.PADDING_MOBILE};
  }
`

const Navigation__Wrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;

  &:before {
    content: " ";
    position: absolute;
    left: calc(-32px - ${SIZES.PADDING_DESKTOP});
    width: ${SIZES.PADDING_DESKTOP};
    height: 1px;
    top: -1px;
    bottom: 0;
    margin: auto;
    background: #e0e0e0;

    @media (max-width: ${SIZES.BREAK_LG}) {
      left: calc(-20px - ${SIZES.PADDING_TABLET});
      width: ${SIZES.PADDING_TABLET};
    }
  }
`
const Icon_Link = styled(Link)`
  text-decoration: none;
`

const Icon = styled.i`
  font-size: 22px;
  color: ${COLORS.BLACK};
`

const Header = () => (
  <Navigation>
    <Navigation__Wrapper>
      <Icon_Link to="/">
        <Icon className="icon icon-logo" />
      </Icon_Link>
    </Navigation__Wrapper>
  </Navigation>
)

export default Header
