import React from "react"
import styled, { css } from "styled-components"

import Layout from "../components/Layout"
import SEO from "../components/Seo"

import H1 from "../elements/H1"
import P from "../elements/P"
import A from "../elements/A"

import { SIZES } from "../tokens"

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  height: calc(100vh - 100px - 163px - 60px);
  min-height: 400px;
  box-sizing: content-box;

  padding: 0 ${SIZES.PADDING_DESKTOP};
  margin-bottom: 60px;

  @media (max-width: ${SIZES.BREAK_MD}) {
    padding: 0 ${SIZES.PADDING_TABLET};
  }

  @media (max-width: ${SIZES.BREAK_SM}) {
    padding: 0 ${SIZES.PADDING_MOBILE};
  }

  padding-top: 60px;
  padding-bottom: 60px;
`

const Container = styled.div``

const Title = styled(H1)`
  margin-bottom: 48px;
  @media (max-width: ${SIZES.BREAK_MD}) {
    margin-bottom: 32px;
  }
`

const Body = styled(P)`
  max-width: 530px;
  &:not(:last-child) {
    margin-bottom: 36px;
  }
`

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />

    <Wrapper>
      <Container>
        <Title>Hmm, that doesn’t look right…</Title>
        <Body>
          The page you are looking for either doesn’t exist, has been moved, or
          deleted 😬.
        </Body>
        <Body>
          Don’t worry, you can always go back <A href="/">home</A> or even learn
          more <A href="/about">about me</A>.
        </Body>
      </Container>
    </Wrapper>
  </Layout>
)

export default NotFoundPage
