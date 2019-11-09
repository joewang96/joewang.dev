import React from 'react';
import styled from 'styled-components';
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
    margin-bottom: ${SIZES.TABLET_SECTION_SPACING};
    padding: 0 ${SIZES.PADDING_MOBILE};
  }

  @media (max-width: ${SIZES.BREAK_SM}) {
    margin-bottom: 80px;
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
  align-items: ${({ alignEnd }) => (alignEnd ? 'flex-end' : 'flex-start')};
  justify-content: flex-start;
  &:not(:last-child) {
    margin-bottom: 2.125rem;
  }

  // Matches PortfolioItem
  @media (max-width: ${SIZES.BREAK_MD}) {
    flex-direction: row;
    align-items: flex-start;
    &:not(:last-child) {
      margin-bottom: 40px;
    }
  }
  @media (max-width: ${SIZES.BREAK_SM}) {
    flex-direction: column;
    &:not(:last-child) {
      margin-bottom: 40px;
    }
  }
`;

const PortfolioSection = () => (
  <Section>
    {/* Portfolio Container */}
    <Container>
      <Row alignEnd={true}>
        <PortfolioItem
          title="Digital branding and web design for an engineering organization."
          id="portfolio-title--generate"
          to="/portfolio/generate/"
          image={generatePreview}
          basis="58%"
          above={true}
        />
        <PortfolioItem
          title="Maintaining a first-class design
            system that scales."
          id="portfolio-title--canvas"
          to="/portfolio/hubspot-canvas/"
          image={canvas_preview}
          basis="42%"
          above={true}
          left={false}
        />
      </Row>
      <Row style={{ justifyContent: 'center' }}>
        <PortfolioItem
          title="Service model concept for an augmented-reality app."
          id="portfolio-title--boo-boston"
          to="/portfolio/boo-boston/"
          image={booboston_preview}
          basis="37.77%"
          ratio="114%"
        />
        <PortfolioItem
          title=" Brand identity and website development for an author."
          id="portfolio-title--mentalligence"
          to="/portfolio/mentalligence/"
          image={mentalligencePreview}
          basis="48%"
          left={false}
        />
      </Row>
    </Container>
  </Section>
);

export default PortfolioSection;
