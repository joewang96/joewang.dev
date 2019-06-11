import React from 'react';
import styled, { css } from 'styled-components';

import H1 from '../../elements/H1';
import P from '../../elements/P';
import A from '../../elements/A';

import { SIZES, MISC } from '../../tokens';
import * as headshot from '../../images/headshot.jpg';
import * as headshotBg from '../../images/headshot_pattern.svg';

const HeroContainer = styled.section`
  padding-left: ${SIZES.PADDING_DESKTOP};
  box-sizing: content-box;
  display: flex;
  justify-content: space-between;
  align-items: center;

  margin-bottom: 68px;

  @media (max-width: ${SIZES.BREAK_LG}) {
    padding-left: ${SIZES.PADDING_TABLET};
    margin-bottom: 136px;
  }

  @media (max-width: ${SIZES.BREAK_MD}) {
    flex-direction: column;
    align-items: flex-start;
    padding: 0;

    margin-bottom: 100px;
  }
  @media (max-width: ${SIZES.BREAK_SM}) {
    margin-bottom: 80px;
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

  ${H1} {
    margin-bottom: 48px;
    @media (max-width: ${SIZES.BREAK_MD}) {
      margin-bottom: 32px;
    }
  }

  ${P} {
    max-width: 29rem;
  }

  ${H1}, ${P} {
    @media (max-width: ${SIZES.BREAK_MD}) {
      padding: 0 ${SIZES.PADDING_TABLET};
    }

    @media (max-width: ${SIZES.BREAK_SM}) {
      padding: 0 ${SIZES.PADDING_MOBILE};
    }
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
  max-width: 41vw;
  position: relative;
  background: radial-gradient(circle, #fafaff 0%, #eff0ff 100%);

  @media (max-width: ${SIZES.BREAK_MD}) {
    max-width: 100%;
  }

  &::before {
    content: " ";
    width: 116%;
    height: 130%;
    position: absolute;
    z-index: -1;
    background: url('${headshotBg}');
    background-position: center;
    background-size: contain;
    background-repeat: no-repeat;
    right: 0;
    top: 0;
    
    @media (max-width: ${SIZES.BREAK_MD}) {
      background-position: bottom;
      background-size: cover;
      width: 100%;
      height: 120%;
    }
  }

  ${({ mobileOnly }) =>
    mobileOnly
      ? css`
          margin-bottom: 36px;
          ${HeroImage} {
            padding-bottom: 55%;
            @media (max-width: ${SIZES.BREAK_SM}) {
              padding-bottom: 65%;
            }
            &:after,
            &:before {
              background-position: center -7vw;
              @media (max-width: ${SIZES.BREAK_SM}) {
                background-position: center -6vw;
              }
            }
          }
          @media (min-width: ${parseInt(SIZES.BREAK_MD, 10) + 1}px) {
            display: none;
          }
        `
      : css`
          @media (max-width: ${SIZES.BREAK_MD}) {
            display: none;
          }
        `}
`;

const HeroImage = styled(props => {
  return <div {...props} />;
})`
  width: 100%;
  padding-bottom: 100%;
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  background-image: url('${headshot}');
  border-top-left-radius: ${SIZES.BORDER_RADIUS};
  border-bottom-left-radius: ${SIZES.BORDER_RADIUS};
  box-shadow: ${MISC.BOX_SHADOW};

  @media (max-width: ${SIZES.BREAK_MD}) {
    background-position: center 20%;
    border-radius: 0;
  }
`;

const HomeHero = () => (
  <HeroContainer>
    <TextContent>
      <H1 style={{ maxWidth: '38.5rem' }}>
        Technology and design make a great pairing.
      </H1>
      <ImageContainer mobileOnly={true}>
        <HeroImage />
      </ImageContainer>
      <P>
        Luckily, I have a background in both. Currently a Software Engineer at{' '}
        <A href="https://hubspot.com" target="_blank" rel="noreferrer noopener">
          HubSpot
        </A>{' '}
        working on{' '}
        <A
          href="https://canvas.hubspot.com"
          target="_blank"
          rel="noreferrer noopener"
        >
          Canvas
        </A>{' '}
        — their in-house design system.
      </P>
    </TextContent>
    <ImageContainer>
      <HeroImage />
    </ImageContainer>
  </HeroContainer>
);

export default HomeHero;
