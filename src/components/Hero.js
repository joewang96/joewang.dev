import React from 'react';
import styled from 'styled-components';

import ButtonLink from './ButtonLink';
import H1 from '../elements/H1';
import P from '../elements/P';
import ItalicSubtitle from '../elements/ItalicSubtitle';
import EmailButton from './EmailButton';

import { SIZES } from '../tokens';

const Body = styled.div`
  text-align: left;
  margin: auto;

  ${P} + ${P} {
    margin-top: 16px;
  }
`;

const TitleContainer = styled.div``;

const ActionContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex: 1;
  gap: 8px;
`;

const Wrapper = styled.div`
  position: relative;
  margin-top: 120px;

  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 32px;

  ${H1} {
    margin-bottom: 4px;
  }

  @media (max-width: ${SIZES.BREAK_SM}) {
    margin-top: 80px;
  }
`;

const Hero = () => (
  <Wrapper>
    <TitleContainer>
      <H1>Joe Wang</H1>
      <ItalicSubtitle>
        Senior Product Designer, formerly @ HubSpot
      </ItalicSubtitle>
    </TitleContainer>
    <Body>
      <P>
        Welcome! I’m a product designer with a technical background as a
        front-end software engineer. Some product areas I've worked on include
        design systems, workflow triggers, developer tooling, and agentic
        automation.
      </P>
      <P>
        Outside of work I like to play video games, read (currently reading the
        Mistborn trilogy), and hang out with my dog, Kody.
      </P>
    </Body>
    <ActionContainer>
      <ButtonLink
        href="https://www.linkedin.com/in/joseph-wang-7b0751129/"
        target="_blank"
      >
        LinkedIn
      </ButtonLink>
      <EmailButton>Email</EmailButton>
    </ActionContainer>
  </Wrapper>
);

export default Hero;
