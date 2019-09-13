import React from 'react';
import styled from 'styled-components';

import H1 from '../../elements/H1';
import P from '../../elements/P';
import A from '../../elements/A';
import ItalicSubtitle from '../../elements/ItalicSubtitle';
import * as resume from '../../misc/Joseph_Wang_Resume.pdf';
import * as dot_pattern from '../../images/dot.svg';

import { SIZES } from '../../tokens';

const Body = styled.div`
  text-align: left;
  margin: auto;
  max-width: 34.866rem;
`;

const HeroContainer = styled.section`
  width: 100%;
  max-width: 56rem;
  margin: auto;
  text-align: center;

  @media (max-width: ${SIZES.BREAK_MD}) {
    max-width: 100%;
    margin-bottom: 80px;
  }
  @media (max-width: ${SIZES.BREAK_SM}) {
    margin-bottom: ${SIZES.MOBILE_SECTION_SPACING};
  }

  ${H1} {
    margin-top: 1.125rem;
    margin-bottom: 3.3125rem;
    @media (max-width: ${SIZES.BREAK_MD}) {
      margin-bottom: 2.75rem;
      margin-top: 1rem;
    }
    @media (max-width: ${SIZES.BREAK_SM}) {
      margin-bottom: 2rem;
      margin-top: 0.75rem;
    }
  }
  @media (max-width: ${SIZES.BREAK_SM}) {
    ${H1}, ${ItalicSubtitle} {
      text-align: left;
    }
  }
`;

const Wrapper = styled.div`
  position: relative;
  margin-top: 80px;
  padding-bottom: 100px;

  &:before {
    content: ' ';
    z-index: -1;
    width: 30%;
    max-width: 16rem;
    height: 70%;
    position: absolute;
    bottom: 10%;
    right: 0;

    background-image: url(${dot_pattern});
    background-size: 32px;
  }

  @media (max-width: ${SIZES.BREAK_MD}) {
    padding: 0 ${SIZES.PADDING_TABLET};
    margin-top: 60px;
  }
  @media (max-width: ${SIZES.BREAK_SM}) {
    padding: 0 ${SIZES.PADDING_MOBILE};
    &:before {
      content: none;
    }
  }
`;

const HomeHero = () => (
  <Wrapper>
    <HeroContainer>
      <ItalicSubtitle>Hi there, I’m Joe</ItalicSubtitle>
      <H1>
        A front-end engineer and interaction designer interested in
        accessibility.
      </H1>
      <Body>
        <P>
          Design and technology make a great pairing — luckily, I have a
          background in both. Currently a Software Engineer working at{' '}
          <A
            href="https://hubspot.com"
            target="_blank"
            rel="noreferrer noopener"
          >
            HubSpot
          </A>{' '}
          on{' '}
          <A
            href="https://canvas.hubspot.com"
            target="_blank"
            rel="noreferrer noopener"
          >
            Canvas
          </A>{' '}
          — their in-house design system.
        </P>
        <P>
          Below are some of my case studies. You can also learn more about me
          below or take a look at my{' '}
          <A href={resume} target="_blank">
            résumé
          </A>
          .
        </P>
      </Body>
    </HeroContainer>
  </Wrapper>
);

export default HomeHero;
