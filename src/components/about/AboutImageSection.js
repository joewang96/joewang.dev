import React from 'react';
import styled from 'styled-components';

import ImagesContainer from './ImagesContainer';
import ImagesRow from './ImagesRow';
import ImagesColumn from './ImagesColumn';
import ImageGroup from './ImageGroup';
import TitleSubtitle from '../../components/TitleSubtitle';

import P from '../../elements/P';
import { SIZES } from '../../tokens';

import * as washingtonDC from '../../images/about/dc-street.jpg';
import * as scretreat from '../../images/about/sc-treat.jpg';
import * as dot_pattern from '../../images/dot.svg';

const ScrollableRow = styled(ImagesRow)`
  position: relative;
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

  &:before {
    content: ' ';
    z-index: -1;
    width: 40%;
    height: 90%;
    position: absolute;
    bottom: 20%;
    right: 20%;

    background-image: url(${dot_pattern});
    background-size: 32px;

    @media (max-width: ${SIZES.BREAK_MD}) {
      content: none;
    }
  }
`;

const FloatingColumn = styled(ImagesColumn)`
  position: absolute;
  top: -65%;
  right: 0;

  @media (max-width: ${SIZES.BREAK_MD}) {
    position: static;
  }
`;

const TextRow = styled(ImagesRow)`
  max-width: 52%;
  margin-bottom: 5%;
  @media (max-width: ${SIZES.BREAK_MD}) {
    max-width: 100%;
  }
`;

const TextContainer = styled.div`
  margin: auto;
  margin-left: 0;
  box-sizing: content-box;
  width: 100%;
  max-width: 33rem;

  @media (max-width: ${SIZES.BREAK_MD}) {
    padding: 0;

    margin: auto;
    max-width: 100%;
    margin-bottom: 60px;
  }
  @media (max-width: ${SIZES.BREAK_SM}) {
    padding: 0;
    margin-bottom: 36px;
  }
`;

const AboutImageSection = () => {
  return (
    <ImagesContainer>
      {/* Row */}
      <TextRow>
        <TextContainer>
          <TitleSubtitle
            title="Some of my interests and the fun stuff."
            subtitle="What makes me a person"
          />
          <P>
            One of my greatest strengths is a continual drive to seek out
            knowledge to develop my existing skills. Whether it be in my
            personal or professional life, I always try to learn as much as I
            can from every experience.
          </P>
          <P>
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
          </P>
        </TextContainer>
      </TextRow>
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
    </ImagesContainer>
  );
};

export default AboutImageSection;
