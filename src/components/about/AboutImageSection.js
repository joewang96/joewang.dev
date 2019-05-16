import React from 'react';
import styled from 'styled-components';

import ImagesContainer from './ImagesContainer';
import ImagesRow from './ImagesRow';
import ImagesColumn from './ImagesColumn';
import ImageGroup from './ImageGroup';

import H3 from '../../elements/H3';
import P from '../../elements/P';
import { SIZES } from '../../tokens';

import * as washingtonDC from '../../images/about/dc-street.jpg';
import * as scretreat from '../../images/about/sc-treat.jpg';
import * as techDesignDuo from '../../images/about/tech-design-duo.jpg';

const Smaller = styled(P)`
  font-size: 1.125rem;

  ${H3} + & {
    margin-top: 12px;
  }

  & + & {
    margin-top: 30px;
  }
`;

const TextContainer = styled.div`
  max-width: 23rem;
  margin: auto;
  padding-top: 5%;
  padding-right: 5%;
  box-sizing: content-box;

  @media (max-width: ${SIZES.BREAK_MD}) {
    padding: 0 5%;
    max-width: unset;
    margin-top: 60px;
  }
  @media (max-width: ${SIZES.BREAK_SM}) {
    padding: 0;
  }
`;

const AboutImageSection = () => {
  return (
    <ImagesContainer>
      {/* Row */}
      <ImagesRow>
        <ImagesColumn width="58%">
          <ImageGroup
            caption="Group photo at retreat from my first semester in Scout!"
            src={scretreat}
          />
        </ImagesColumn>
        <ImagesColumn width="42%">
          <ImageGroup
            caption="Scout’s Tech and Design Director power duo 🙌"
            src={techDesignDuo}
            alignRight={true}
          />
        </ImagesColumn>
      </ImagesRow>

      {/* Row */}
      <ImagesRow alignStart={true} reverse={true}>
        <ImagesColumn reverse width="48%" style={{ marginBottom: 0 }}>
          <ImageGroup
            caption="My home is Northern Virginia, right by Washington D.C."
            src={washingtonDC}
            alignRight={true}
            flip={true}
          />
        </ImagesColumn>
        <ImagesColumn width="48%">
          <TextContainer>
            <H3>Never stop — always learning</H3>
            <Smaller>
              I believe that one of my greatest traits is a continual hunger to
              seek knowledge and continue to develop my existing skills.
            </Smaller>
            <Smaller>
              Whether it be in my personal or professional life I always seek
              out ways to challenge myself and learn as much as I can from every
              experience.
            </Smaller>
          </TextContainer>
        </ImagesColumn>
      </ImagesRow>
    </ImagesContainer>
  );
};

export default AboutImageSection;
