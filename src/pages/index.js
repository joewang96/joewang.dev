import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"

import HomeHero from "../components/home/HomeHero"
import PortfolioSection from "../components/home/PortfolioSection"

import Layout from "../components/Layout"
import Image from "../components/image"
import SEO from "../components/Seo"

import H1 from "../elements/H1"
import H2 from "../elements/H2"
import P from "../elements/P"
import A from "../elements/A"

import { COLORS, SIZES } from "../tokens"

const List_Wrapper = styled.section`
  padding: 0 0 0 ${SIZES.PADDING_DESKTOP};
  margin-bottom: 136px;
  display: flex;

  @media (max-width: ${SIZES.BREAK_LG}) {
    padding: 0 0 0 ${SIZES.PADDING_TABLET};
  }

  @media (max-width: ${SIZES.BREAK_MD}) {
    flex-direction: column;
    margin-bottom: 60px;
  }

  @media (max-width: ${SIZES.BREAK_SM}) {
    padding: 0 0 0 ${SIZES.PADDING_MOBILE};
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
`

const List_Item = styled.div`
  padding-bottom: 40px;
  border-bottom: 1px solid ${COLORS.OFF_WHITE};
  position: relative;
  padding-right: 60px;
  &:not(last-child) {
    margin-bottom: 40px;
  }
`

const List_Wrapper__Content = styled.div`
  flex-grow: 1;
  margin-left: auto;
  @media (max-width: ${SIZES.BREAK_MD}) {
    max-width: 600px;
  }
`

const List_Item__Content = styled.div`
  max-width: 523px;
`

const List_Item__Title = styled(P)`
  font-family: "Biryani", Cabin, Helvetica Neue, Helvetica, sans-serif;
  font-weight: bold;
  line-height: 1.75;
  margin-bottom: 12px;
  color: ${COLORS.BLACK};
`

const List_Item__Body = styled(P)`
  font-size: 16px;
  line-height: 1.75;
  margin-bottom: 0;
`

const IndexPage = () => (
  <Layout>
    <SEO title="Joseph Wang" keywords={[`gatsby`, `application`, `react`]} />

    {/* Hero Container */}
    <HomeHero />

    {/* Portfolio Section */}
    <PortfolioSection />

    {/* Written or Job(?) Section */}
    <List_Wrapper>
      <List_Wrapper__Title>Writing and some thoughts.</List_Wrapper__Title>

      <List_Wrapper__Content>
        <List_Item>
          <List_Item__Content>
            <List_Item__Title>
              Managing a team of designers and developers — Scout Studio.
            </List_Item__Title>
            <List_Item__Body>
              How I co-led a team of 25 designers and developers working on
              various studio projects for start-up ventures.
            </List_Item__Body>
          </List_Item__Content>
        </List_Item>

        <List_Item>
          <List_Item__Content>
            <List_Item__Title>
              The importance of accessibility — how to equip young developers
              and designers.
            </List_Item__Title>
            <List_Item__Body>
              A project which gave me a first look into service design and
              deeper insight into balancing company and user needs in a product.
            </List_Item__Body>
          </List_Item__Content>
        </List_Item>

        <List_Item>
          <List_Item__Content>
            <List_Item__Title>
              Should designers code — should devs design?
            </List_Item__Title>
            <List_Item__Body>
              My first client project at Scout Studio, we took on creating a
              brand and website from scratch.
            </List_Item__Body>
          </List_Item__Content>
        </List_Item>
      </List_Wrapper__Content>
    </List_Wrapper>
  </Layout>
)

export default IndexPage
