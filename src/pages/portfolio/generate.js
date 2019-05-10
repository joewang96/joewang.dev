import React from 'react';
import styled from 'styled-components';

import Layout from '../../components/Layout';
import SEO from '../../components/Seo';

import CaseStudyWrapper from '../../components/case_study/CaseStudyWrapper';
import SectionTitle from '../../components/case_study/SectionTitle';
import Prose from '../../components/case_study/Prose';
import P from '../../elements/P';
import { SIZES, COLORS } from '../../tokens';
import ButtonLink from '../../components/ButtonLink';

import * as generateMockup from '../../images/generate/generate-mock.png';
import * as generateReqs from '../../images/generate/generate-reqs.jpg';
import * as generateWireDigital from '../../images/generate/generate-wireframe-digital.png';
import * as generateUIStyles from '../../images/generate/generate-ui-styles.png';
import * as generateDirection from '../../images/generate/generate-directions.png';
import * as generateFinal from '../../images/generate/generate-final-hifi.png';

const StyledImage = styled.img`
  width: 100%;
`;

const GridRow = styled.div`
  display: grid;
  grid-gap: ${({ gap }) => gap};
  grid-template-columns: ${({ gridTemplateCol }) => gridTemplateCol};
  grid-template-areas: ${({ gridTemplateAreas }) => gridTemplateAreas};

  @media (max-width: ${SIZES.BREAK_MD}) {
    display: block;
  }

  & + & {
    margin-top: 120px;
    @media (max-width: ${SIZES.BREAK_MD}) {
      margin-top: ${SIZES.CASE_STUDY_SECTION_SPACING};
    }
  }
`;

const GridItem = styled.div`
  grid-area: ${({ gridArea }) => gridArea};

  @media (min-width: ${parseInt(SIZES.BREAK_MD, 10) + 1}px) {
    margin-top: ${({ marginTop }) => (marginTop ? '5rem' : null)};
  }

  @media (max-width: ${SIZES.BREAK_MD}) {
    & + & {
      margin-top: ${SIZES.CASE_STUDY_SECTION_SPACING};
    }
  }
`;

const Quote = styled(P)`
  font-style: italic;
  font-size: 1.75rem;
  line-height: 2;

  padding-left: 30px;

  color: ${COLORS.GREY};
  border-left: 3px solid ${COLORS.YELLOW};

  @media (min-width: ${parseInt(SIZES.BREAK_MD, 10) + 1}px) {
    max-width: 26.875rem;
    margin-left: auto;
    margin-top: auto;
    margin-bottom: auto;
  }
  @media (max-width: ${SIZES.BREAK_MD}) {
    font-size: 1.5rem;
    margin-bottom: 0;
  }
`;

const GenerateRedesign = ({ location }) => (
  <Layout location={location}>
    <SEO title="Generate Redesign" hideTitle={true} />
    <CaseStudyWrapper
      title="Generate Website Redesign — complete visual, UX, and website overhaul."
      img={{ src: generateMockup, alt: '' }}
    >
      <GridRow gap="5.8125rem" gridTemplateCol="repeat(2, 1fr)">
        <GridItem>
          <SectionTitle>Problem setting - what is Generate?</SectionTitle>
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
            established brand.
          </Prose>
        </GridItem>
        <GridItem style={{ display: 'flex' }}>
          <Quote>
            How might we create an engaging online brand that showcases our
            story and draws attention from prospective students?
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
            href="https://web.northeastern.edu/generate"
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

export default GenerateRedesign;
