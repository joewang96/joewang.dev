import React from "react"
import styled from "styled-components"

import H1 from "../../elements/H1"
import P from "../../elements/P"
import A from "../../elements/A"

import { SIZES } from "../../tokens"

import * as headshot from "../../images/headshot.png"

const HeroContainer = styled.section`
  padding-left: ${SIZES.PADDING_DESKTOP};
  box-sizing: content-box;
  display: flex;
  justify-content: space-between;
  align-items: center;

  margin-bottom: 68px;

  @media (max-width: ${SIZES.BREAK_LG}) {
    padding-left: ${SIZES.PADDING_TABLET};
  }

  @media (max-width: ${SIZES.BREAK_MD}) {
    flex-direction: column;
    align-items: flex-start;
    padding: 0 ${SIZES.PADDING_TABLET};
  }

  @media (max-width: ${SIZES.BREAK_SM}) {
    padding: 0 ${SIZES.PADDING_MOBILE};
  }
`

const Hero_TextContent = styled.div`
  max-width: 616px;
  margin-right: 33px;

  @media (max-width: ${SIZES.BREAK_MD}) {
    margin-bottom: 60px;
  }
`

const Hero_ImageContainer = styled.div`
  width: 100%;
  max-width: 41vw;
  position: relative;
  background: radial-gradient(circle, #fafaff 0%, #eff0ff 100%);

  @media (max-width: ${SIZES.BREAK_MD}) {
    max-width: 400px;
  }
`

const Hero_Image = styled.div`
  width: 100%;
  padding-bottom: 100%;
  background-image: url(${headshot});
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
`

const HomeHero = () => (
  <HeroContainer>
    <Hero_TextContent>
      <H1 style={{ marginBottom: 48 }}>
        Technology and design make a great pairing.
      </H1>
      <P style={{ maxWidth: 463 }}>
        Luckily, I have a background in both. Currently a Software Engineer at{" "}
        <A href="https://hubspot.com" target="_blank" rel="noreferrer noopener">
          HubSpot
        </A>{" "}
        working on{" "}
        <A
          href="https://canvas.hubspot.com"
          target="_blank"
          rel="noreferrer noopener"
        >
          Canvas
        </A>{" "}
        — their in-house design system.
      </P>
    </Hero_TextContent>
    <Hero_ImageContainer>
      <Hero_Image />
    </Hero_ImageContainer>
  </HeroContainer>
)

export default HomeHero
