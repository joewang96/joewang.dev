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

const Smaller = styled(P)`
  font-size: 1.125rem;

  ${H3} + & {
    margin-top: 12px;
  }

  & + & {
    margin-top: 30px;
  }
`;

const ScrollableRow = styled(ImagesRow)`
  @media (max-width: ${SIZES.BREAK_MD}) {
    overflow-x: scroll;
    overflow-y: hidden;
    flex-direction: row;
    align-items: flex-start;

    padding: 0 ${SIZES.PADDING_TABLET};

    ${ImagesColumn} {
      margin-bottom: 24px;
    }
    
    ${ImagesColumn} + ${ImagesColumn} {
      margin-left: 5vw;
      padding-right: ${SIZES.PADDING_TABLET};
    }
  }

  @media (max-width: ${SIZES.BREAK_SM}) {
    padding: 0 ${SIZES.PADDING_MOBILE};

    ${ImagesColumn} + ${ImagesColumn} {
      padding-right: ${SIZES.PADDING_MOBILE};
    }
  }
`;

const FloatingColumn = styled(ImagesColumn)`
  position: absolute;
  top: 35%;
  right: 0;

  @media (max-width: ${SIZES.BREAK_MD}) {
    position: static;
  }
`;

const TextRow = styled(ImagesRow)`
  max-width: 54%;
  @media (max-width: ${SIZES.BREAK_MD}) {
    max-width: 100%;
  }
`;

const TextContainer = styled.div`
  max-width: 30rem;
  margin: auto;
  margin-right: 0;
  padding: 5% 5% 0;
  box-sizing: content-box;

  @media (max-width: ${SIZES.BREAK_MD}) {
    padding: 0;
    padding-right: 3.125rem;
    margin: auto;
    max-width: 33.125rem;
    margin-top: 60px;
  }
  @media (max-width: ${SIZES.BREAK_SM}) {
    padding: 0;
    margin-top: 36px;
  }
`;

const AboutImageSection = () => {
  return (
    <ImagesContainer>
      {/* Row */}
      <ScrollableRow>
        <ImagesColumn width="57%">
          <ImageGroup
            caption="Group photo at retreat from my first semester in Scout!"
            src={scretreat}
          />
        </ImagesColumn>
        <FloatingColumn width="calc(43% - 33px)">
          <ImageGroup
            caption="My home is Northern Virginia, right by D.C."
            src={washingtonDC}
            alignRight={true}
            ratio={1.03}
          />
        </FloatingColumn>
      </ScrollableRow>

      <TextRow>
        <TextContainer>
          <H3>Strengths and other interests</H3>
          <Smaller>
            One of my greatest strengths is a continual drive to seek out
            knowledge to develop my existing skills. Whether it be in my
            personal or professional life, I always try to learn as much as I
            can from every experience.
          </Smaller>
          <Smaller>
            In my spare time I enjoy photography{' '}
            <span aria-hidden="true" role="presentation">
              📸
            </span>
            , video games{' '}
            <span aria-hidden="true" role="presentation">
              🎮
            </span>{' '}
            <i>(Smash Bros. Ultimate, anyone?)</i>, and finding new horror
            movies to watch{' '}
            <span aria-hidden="true" role="presentation">
              👻
            </span>
            .
          </Smaller>
        </TextContainer>
      </TextRow>
    </ImagesContainer>
  );
};

export default AboutImageSection;
