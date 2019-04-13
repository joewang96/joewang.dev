import React from "react"
import styled from "styled-components"

import H2 from "../elements/H2"

import { SIZES } from "../tokens"

const List_Wrapper = styled.section`
  padding: 0 0 0 ${SIZES.PADDING_DESKTOP};
  margin-bottom: 136px;
  display: flex;

  @media (max-width: ${SIZES.BREAK_LG}) {
    padding: 0 0 0 ${SIZES.PADDING_TABLET};
    margin-bottom: 100px;
  }

  @media (max-width: ${SIZES.BREAK_MD}) {
    flex-direction: column;
    margin-bottom: 60px;
  }

  @media (max-width: ${SIZES.BREAK_SM}) {
    padding: 0 0 0 ${SIZES.PADDING_MOBILE};
    margin-bottom: 40px;
  }
`

const List_Wrapper__Title = styled(H2)`
  max-width: 338px;
  margin-right: 126px;
  box-sizing: content-box;
  flex-shrink: 0;

  @media (max-width: ${SIZES.BREAK_LG}) {
    margin-right: 72px;
  }
  @media (max-width: ${SIZES.BREAK_MD}) {
    margin-bottom: 60px;
    max-width: 426px;
  }

  @media (max-width: ${SIZES.BREAK_SM}) {
    margin-bottom: 36px;
  }
`

const List_Wrapper__Content = styled.div`
  flex-grow: 1;
  margin-left: auto;
  @media (max-width: ${SIZES.BREAK_MD}) {
    max-width: 600px;
    width: 90%;
  }
  @media (max-width: ${SIZES.BREAK_SM}) {
    width: 92.5%;
  }
`

const ListComponent = ({ title, content, ...rest }) => {
  return (
    <List_Wrapper {...rest}>
      <List_Wrapper__Title>{title}</List_Wrapper__Title>
      <List_Wrapper__Content>{content}</List_Wrapper__Content>
    </List_Wrapper>
  )
}

export default ListComponent
