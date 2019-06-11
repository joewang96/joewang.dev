import React from 'react';
import styled from 'styled-components';

import Layout from '../../components/Layout';
import SEO from '../../components/Seo';
import A from '../../elements/A';

import CaseStudyWrapper from '../../components/case_study/CaseStudyWrapper';
import SectionTitle from '../../components/case_study/SectionTitle';
import Prose from '../../components/case_study/Prose';
import Quote from '../../components/case_study/Quote';
import GridRow from '../../components/case_study/GridRow';
import GridItem from '../../components/case_study/GridItem';

import { COLORS } from '../../tokens';
import ButtonLink from '../../components/ButtonLink';

import * as mentalligenceMockup from '../../images/dr-kris/mentalligence-mock.png';

import * as generateWireDigital from '../../images/generate/generate-wireframe-digital.png';
import * as generateFinal from '../../images/generate/generate-final-hifi.png';

const StyledImage = styled.img`
  width: 100%;
`;

const MentalligencePage = ({ location }) => (
  <Layout location={location}>
    <SEO title="Generate Redesign" hideTitle={true} />
    <CaseStudyWrapper
      title="Mentalligence — brand identity and website development for an author and professor."
      img={{ src: mentalligenceMockup, alt: '' }}
    >
      <GridRow gap="5.8125rem" gridTemplateCol="repeat(2, 1fr)">
        <GridItem>
          <SectionTitle>Introducing my first studio project</SectionTitle>
          <Prose>
            My first client project at{' '}
            <A
              href="https://web.northeastern.edu/scout"
              target="_blank"
              rel="noreferrer noopener"
            >
              Scout Studio
            </A>
            {','} was for Dr. Kristen "Kris" Lee, the department head of
            Behavioral Sciences at Northeastern and author of RESET. She has
            spoken at many events, giving tips to deal with stress, highlighting
            the importance mental health, and promoting mindfulness.
          </Prose>
          <Prose>
            Through a few scoping and prioritization exercises our team took on
            the task of creating an entire brand, fully custom website, and
            collateral for Dr. Kris to use on social media and at her upcoming
            TEDx talk.
          </Prose>
        </GridItem>
        <GridItem style={{ display: 'flex' }}>
          <Quote borderColor={COLORS.GREEN}>
            How might we build an accessible platform of reputable resources
            curated by Dr. Kris and utilize a unified brand to promote
            Mentalligence?
          </Quote>
        </GridItem>
      </GridRow>

      <GridRow
        gap="5.8125rem"
        gridTemplateCol="repeat(2, 1fr)"
        gridTemplateAreas="'a b'"
      >
        <GridItem gridArea="b">
          <SectionTitle>Information architecure revamp</SectionTitle>
          <Prose>
            The first part of the process was determining what information was
            pertinent to Generate and what was the best way to organize it. I
            started by interviewing directors of the organization to get a sense
            of what they wanted on the new site and translated those findings
            into some requirements.
          </Prose>
          <Prose>
            From those interviews, I was able to begin creating a new IA schema
            which led into initial wireframes. After a few rounds of designs and
            revisions, I moved to creating digital sketches with more of the
            fine details of spacing and layout incorporated. Increasing fidelity
            at each step of the process allowed for larger UX details to be
            straightened out before getting caught up in the more visual
            aspects.
          </Prose>
        </GridItem>
        <GridItem gridArea="a">
          <StyledImage src={generateWireDigital} />
        </GridItem>
      </GridRow>

      <GridRow
        gap="0 5.8125rem"
        gridTemplateCol="repeat(2, 1fr)"
        gridTemplateAreas="'a b' 'c b' '. b'"
      >
        <GridItem gridArea="a">
          <SectionTitle>Finalizing hi-fidelity mocks</SectionTitle>
          <Prose>
            Generate is a product development studio at Northeastern that aims
            to unite tech minded individuals on campus, while also taking on
            semesterly clients to build out hardware products as part of their
            Build Studio.
          </Prose>
          <Prose>
            Their issue was that they had a very poor website that didn't really
            showcase what Generate was all about. I came on as their Web
            Designer and Developer to overhaul their site - which included their
            established brand. Their site was built on Wordpress theme they
            bought, and featured a very clunky data structure that made it hard
            to use.
          </Prose>
        </GridItem>
        <GridItem gridArea="b">
          <StyledImage src={generateFinal} />
        </GridItem>
        <GridItem gridArea="c" marginTop={true}>
          <SectionTitle>Taking it live - from design to code</SectionTitle>
          <Prose>
            Generate is a product development studio at Northeastern that aims
            to unite tech minded individuals on campus, while also taking on
            semesterly clients to build out hardware products as part of their
            Build Studio.
          </Prose>
          <Prose>
            Their issue was that they had a very poor website that didn't really
            showcase what Generate was all about. I came on as their Web
            Designer and Developer to overhaul their site - which included their
            established brand. Their site was built on Wordpress theme they
            bought, and featured a very clunky data structure that made it hard
            to use.
          </Prose>

          <ButtonLink
            href="http://www.kristenlee.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            View live site
          </ButtonLink>
        </GridItem>
      </GridRow>
    </CaseStudyWrapper>
  </Layout>
);

export default MentalligencePage;
