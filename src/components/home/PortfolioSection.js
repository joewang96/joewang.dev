import React from "react"
import styled from "styled-components"
import H2 from "../../elements/H2"

import { SIZES } from "../../tokens"

const Styled_PortfolioSection = styled.section`
  padding: 0 ${SIZES.PADDING_DESKTOP};

  @media (max-width: ${SIZES.BREAK_LG}) {
    padding: 0 ${SIZES.PADDING_TABLET};
  }

  @media (max-width: ${SIZES.BREAK_SM}) {
    padding: 0 ${SIZES.PADDING_MOBILE};
  }
`

const PortfolioSection__Container = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  margin-bottom: 136px;
`

const Portfolio_Tag = styled.p`
  font-family: "PT Mono", monnospace;
  font-size: 16px;
  line-height: 1.125;

  ${props => (props.top ? "margin-top: 16px" : "margin-bottom: 16px")};
`

const Portfolio_Row = styled.div`
  display: flex;
  flex-direction: row;
  align-items: ${props => (props.alignStart ? "flex-start" : "flex-end")};

  &:first-of-type {
    margin-bottom: 33px;
  }
`

const Portfolio_Col = styled.div`
  display: flex;
  flex-direction: ${props => (props.reverse ? "column-reverse" : "column")};
`

const Portfolio_Image = styled.div`
  width: 100%;
  height: ${props => props.height || "30vh"};
  background: radial-gradient(circle, #fafaff 0%, #eff0ff 100%);
  transition: transform 200ms ease-in-out;

  &:hover,
  &:focus {
    transform: scale(0.975);
  }
`

const PortfolioSection = () => (
  <Styled_PortfolioSection>
    <H2 style={{ maxWidth: 431, marginBottom: 63 }}>
      My work — some featured case studies.
    </H2>

    {/* Portfolio Container */}
    <PortfolioSection__Container>
      {/* Row */}
      <Portfolio_Row>
        <Portfolio_Col style={{ width: "58%", marginRight: 33 }}>
          <Portfolio_Tag>
            Generate Website Redesign — visual, UX, and dev overhaul
          </Portfolio_Tag>
          <a href="#">
            <Portfolio_Image height="410px" />
          </a>
        </Portfolio_Col>
        <Portfolio_Col style={{ width: "42%" }}>
          <Portfolio_Tag>
            Canvas — creating a first-class design system
          </Portfolio_Tag>
          <a href="#">
            <Portfolio_Image height="287px" />
          </a>
        </Portfolio_Col>
      </Portfolio_Row>

      {/* Row */}
      <Portfolio_Row alignStart>
        <Portfolio_Col reverse style={{ width: "41%", marginRight: 33 }}>
          <Portfolio_Tag top>
            Boo! Boston — designing an AR app concept
          </Portfolio_Tag>
          <a href="#">
            <Portfolio_Image height="487px" />
          </a>
        </Portfolio_Col>
        <Portfolio_Col reverse style={{ width: "50%" }}>
          <Portfolio_Tag top>
            Mentalligence — brand identity & website dev
          </Portfolio_Tag>
          <a href="#">
            <Portfolio_Image height="346px" />
          </a>
        </Portfolio_Col>
      </Portfolio_Row>
    </PortfolioSection__Container>
  </Styled_PortfolioSection>
)

export default PortfolioSection
