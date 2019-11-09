import React from 'react';
import styled from 'styled-components';

import TitleSubtitle from '../../components/TitleSubtitle';
import P from '../../elements/P';

import { SIZES } from '../../tokens';
import * as headshot from '../../images/headshot.jpg';
import * as dot_pattern from '../../images/dot.svg';

const MainContainer = styled.section`
  margin-bottom: 100px;
  padding: 0 ${SIZES.PADDING_DESKTOP};
  box-sizing: content-box;
  display: flex;
  justify-content: space-between;
  position: relative;

  @media (max-width: ${SIZES.BREAK_LG}) {
    padding: 0 ${SIZES.PADDING_TABLET};
    margin-bottom: 136px;
  }

  @media (max-width: ${SIZES.BREAK_MD}) {
    flex-direction: column-reverse;
    align-items: flex-start;
    margin-bottom: 80px;
  }
  @media (max-width: ${SIZES.BREAK_SM}) {
    padding: 0 ${SIZES.PADDING_MOBILE};
  }

  &:before,
  &:after {
    content: ' ';
    z-index: -1;
    position: absolute;
    background-image: url(${dot_pattern});
    background-size: 32px;
  }
  &:before {
    width: 36%;
    max-width: 24rem;
    height: 32%;
    top: -1rem;
    left: 0;
  }
  &:after {
    width: 20%;
    max-width: 16rem;
    height: 54%;
    top: 36%;
    right: 0;
    @media (max-width: ${SIZES.BREAK_SM}) {
      content: none;
    }
  }
`;

const TextContent = styled.div`
  width: 100%;
  max-width: 38.5rem;
  margin-right: 33px;

  @media (max-width: ${SIZES.BREAK_MD}) {
    margin-bottom: 0;
    margin-right: 0;
    max-width: 100%;
  }
`;

const ImageContainer = styled(props => {
  const { mobileOnly: __mobileOnly, ...rest } = props;
  return (
    <div
      {...rest}
      aria-label="A headshot of myself where I am smiling and looking at the camera, with a purple gradient background behind me. I am a man, wearing a blue denim shirt over a grey t-shirt."
      role="img"
    />
  );
})`
  width: 100%;
  max-width: 41%;
  position: relative;
  margin-right: 5.75rem;
  margin-top: 3.125rem;

  @media (max-width: ${SIZES.BREAK_MD}) {
    max-width: 500px;
    margin: auto;
    margin-top: 2rem;
  }
`;

const HeroImage = styled(props => {
  return (
    <img
      {...props}
      src={headshot}
      alt="A headshot of myself smiling at the camera."
    />
  );
})`
  width: 100%;
  border-radius: ${SIZES.BORDER_RADIUS};
`;

const AboutMe = () => (
  <MainContainer>
    <ImageContainer>
      <HeroImage />
    </ImageContainer>

    <TextContent>
      <TitleSubtitle
        title="Designer. Developer. Creative."
        subtitle="A little about myself"
      />

      <P>
        Starting out as a developer, I quickly found a passion and love for
        design and building amazing experiences. I’ve since grown these two
        skillsets and activley seek opportunities to work at the intersection of
        these disciplines.
      </P>

      <P>
        I’m originally from Northern Virginia, and moved to Boston to attend
        Northeastern University. I’ll be graduating in May 2020, and joining
        HubSpot as a Software Engineer afterward.
      </P>
    </TextContent>
  </MainContainer>
);

export default AboutMe;
