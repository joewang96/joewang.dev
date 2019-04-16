import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';

import H2 from '../../elements/H2';

import * as generatePreview from '../../images/generate_preview.png';
import * as mentalligencePreview from '../../images/mentalligence_preview.png';
import * as booboston_preview from '../../images/booboston_preview.png';

import { SIZES } from '../../tokens';

const Styled_PortfolioSection = styled.section`
  padding: 0 ${SIZES.PADDING_DESKTOP};
  margin-bottom: 136px;

  @media (max-width: ${SIZES.BREAK_LG}) {
    padding: 0 ${SIZES.PADDING_TABLET};
  }

  @media (max-width: ${SIZES.BREAK_MD}) {
    margin-bottom: 100px;
  }

  @media (max-width: ${SIZES.BREAK_SM}) {
    padding: 0;
    margin-bottom: 80px;
  }
`;

const Title = styled(H2)`
  max-width: 431px;
  margin-bottom: 63px;

  @media (max-width: ${SIZES.BREAK_MD}) {
    margin-bottom: 48px;
  }

  @media (max-width: ${SIZES.BREAK_SM}) {
    margin-bottom: 28px;
    padding: 0 ${SIZES.PADDING_MOBILE};
  }
`;

const PortfolioSection__Container = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
`;

const Portfolio_Tag = styled.p`
  font-family: 'Biryani', 'Cabin', 'Helvetica Neue', Helvetica, sans-serif;
  font-size: 16px;
  line-height: 1.5;

  ${props => (props.top ? 'margin-top: 16px' : 'margin-bottom: 16px')};

  @media (max-width: ${SIZES.BREAK_MD}) {
    margin: 0;
  }
  @media (max-width: ${SIZES.BREAK_SM}) {
    padding: 0 ${SIZES.PADDING_MOBILE};
  }
`;

const Portfolio_Row = styled.div`
  display: flex;
  flex-direction: row;
  align-items: ${props => (props.alignStart ? 'flex-start' : 'flex-end')};

  &:first-of-type {
    margin-bottom: 33px;
  }

  @media (max-width: ${SIZES.BREAK_MD}) {
    flex-direction: column;
    &:first-of-type {
      margin: 0;
    }
  }
`;

const Portfolio_Col = styled.div`
  display: flex;
  flex-direction: ${props => (props.reverse ? 'column-reverse' : 'column')};
  width: ${({ width }) => width};

  ${Portfolio_Col}:first-of-type {
    margin-right: 33px;
  }

  @media (max-width: ${SIZES.BREAK_MD}) {
    width: 100%;
    flex-direction: column-reverse;
    margin-bottom: 60px;

    ${Portfolio_Col}:first-of-type {
      margin-right: 0;
    }
  }
  @media (max-width: ${SIZES.BREAK_SM}) {
    margin-bottom: 52px;
  }
`;

const Portfolio_Image = styled.div`
  width: 100%;
  height: ${props => props.height || '30vh'};
  background: radial-gradient(circle, #fafaff 0%, #eff0ff 100%);
  transition: transform 200ms ease-in-out;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;

  @media (max-width: ${SIZES.BREAK_MD}) {
    height: 0;
    padding-bottom: 60%;
    margin-bottom: 16px;
  }
  @media (max-width: ${SIZES.BREAK_SM}) {
    padding-bottom: 62.5%;
  }

  &:hover,
  &:focus {
    transform: scale(0.975);
  }
`;

const PortfolioSection = () => (
  <Styled_PortfolioSection>
    <Title>My work — some featured case studies.</Title>

    {/* Portfolio Container */}
    <PortfolioSection__Container>
      {/* Row */}
      <Portfolio_Row>
        <Portfolio_Col width="58%">
          <Portfolio_Tag id="portfolio-title--generate" aria-hidden="true">
            <strong>Generate Website Redesign</strong> — complete visual, UX,
            and website overhaul.
          </Portfolio_Tag>
          <Link
            to="/portfolio/generate"
            aria-labelledby="portfolio-title--generate"
          >
            <Portfolio_Image
              height="410px"
              style={{
                backgroundImage: `url(${generatePreview})`,
              }}
            />
          </Link>
        </Portfolio_Col>
        <Portfolio_Col width="42%">
          <Portfolio_Tag id="portfolio-title--canvas" aria-hidden="true">
            <strong>HubSpot Canvas</strong> — maintaining a first-class design
            system that scales.
          </Portfolio_Tag>
          <Link
            to="/portfolio/hubspot-canvas"
            aria-labelledby="portfolio-title--canvas"
          >
            <Portfolio_Image height="287px" />
          </Link>
        </Portfolio_Col>
      </Portfolio_Row>

      {/* Row */}
      <Portfolio_Row alignStart>
        <Portfolio_Col reverse width="41%">
          <Portfolio_Tag
            top
            id="portfolio-title--boo-boston"
            aria-hidden="true"
          >
            <strong>Boo! Boston</strong> — designing an AR app using service
            design concepts.
          </Portfolio_Tag>
          <Link
            to="/portfolio/boo-boston"
            aria-labelledby="portfolio-title--boo-boston"
          >
            <Portfolio_Image
              height="487px"
              style={{ backgroundImage: `url(${booboston_preview})` }}
            />
          </Link>
        </Portfolio_Col>
        <Portfolio_Col reverse width="50%" style={{ marginBottom: 0 }}>
          <Portfolio_Tag
            top
            id="portfolio-title--mentalligence"
            aria-hidden="true"
          >
            <strong>Mentalligence</strong> — brand identity and website
            development for an author / professor.
          </Portfolio_Tag>
          <Link
            to="/portfolio/mentalligence"
            aria-labelledby="portfolio-title--mentalligence"
          >
            <Portfolio_Image
              height="346px"
              style={{
                backgroundImage: `url(${mentalligencePreview})`,
              }}
            />
          </Link>
        </Portfolio_Col>
      </Portfolio_Row>
    </PortfolioSection__Container>
  </Styled_PortfolioSection>
);

export default PortfolioSection;
