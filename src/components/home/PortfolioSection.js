import React from 'react';
import styled from 'styled-components';
import H2 from '../../elements/H2';
import { SIZES } from '../../tokens';
import PortfolioItem from './PortfolioItem';

import * as generatePreview from '../../images/generate_preview.jpg';
import * as mentalligencePreview from '../../images/mentalligence_preview.jpg';
import * as booboston_preview from '../../images/booboston_preview.jpg';
import * as canvas_preview from '../../images/canvas_preview.svg';

const Section = styled.section`
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
  max-width: 29rem;
  margin-bottom: 63px;

  @media (max-width: ${SIZES.BREAK_MD}) {
    margin-bottom: 48px;
  }

  @media (max-width: ${SIZES.BREAK_SM}) {
    margin-bottom: 28px;
    padding: 0 ${SIZES.PADDING_MOBILE};
  }
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
`;

const Row = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  &:not(:last-child) {
    margin-bottom: 3rem;
  }

  // Matches PortfolioItem
  @media (max-width: ${SIZES.BREAK_MD}) {
    flex-direction: column;
    &:not(:last-child) {
      margin-bottom: 60px;
    }
  }
  @media (max-width: ${SIZES.BREAK_SM}) {
    &:not(:last-child) {
      margin-bottom: 52px;
    }
  }
`;

const PortfolioSection = () => (
  <Section>
    <Title>My work — some featured case studies.</Title>
    {/* Portfolio Container */}
    <Container>
      <Row>
        <PortfolioItem
          title="Generate Website Redesign"
          body="complete visual, UX, and website overhaul."
          id="portfolio-title--generate"
          to="/portfolio/generate/"
          image={generatePreview}
        />
        <PortfolioItem
          title="HubSpot Canvas"
          body="maintaining a first-class design
            system that scales."
          id="portfolio-title--canvas"
          to="/portfolio/hubspot-canvas/"
          image={canvas_preview}
        />
      </Row>
      <Row>
        <PortfolioItem
          title="Boo! Boston"
          body="designing an AR app using service
          design concepts."
          id="portfolio-title--boo-boston"
          to="/portfolio/boo-boston/"
          image={booboston_preview}
        />
        <PortfolioItem
          title="Mentalligence"
          body=" brand identity and website development for an author and professor."
          id="portfolio-title--mentalligence"
          to="/portfolio/mentalligence/"
          image={mentalligencePreview}
        />
      </Row>
    </Container>
  </Section>
);

export default PortfolioSection;
