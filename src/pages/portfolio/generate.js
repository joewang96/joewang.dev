import React from 'react';
import styled from 'styled-components';

import Layout from '../../components/Layout';
import SEO from '../../components/Seo';

import CaseStudyWrapper from '../../components/case_study/CaseStudyWrapper';
import SectionTitle from '../../components/case_study/SectionTitle';
import Prose from '../../components/case_study/Prose';
import Quote from '../../components/case_study/Quote';
import GridRow from '../../components/case_study/GridRow';
import GridItem from '../../components/case_study/GridItem';
import { COLORS } from '../../tokens';
import ButtonLink from '../../components/ButtonLink';
import A from '../../elements/A';

import * as generateMockup from '../../images/generate/generate-mock.png';
import * as generateWireDigital from '../../images/generate/generate-wireframe-digital.png';
// import * as generateUIStyles from '../../images/generate/generate-ui-styles.png';
// import * as generateDirection from '../../images/generate/generate-directions.png';
import * as generateFinal from '../../images/generate/generate-final-hifi.png';

const StyledImage = styled.img`
  width: 100%;
`;

const GenerateRedesign = ({ location }) => (
  <Layout location={location}>
    <SEO title="Generate Website Redesign" />
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
          <Quote borderColor={COLORS.YELLOW}>
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
            The original site and brand focused primarily on the blue color
            featured in the organization’s logo. When creating the site I found
            that color difficult to work with, both in terms of accessibility
            and pairing it with dynamic content such as images.
          </Prose>
          <Prose>
            To overcome this dilemma, I opted for a palette swap of the brand’s
            colors — focusing more on the yellow as the primary accent color
            with a lot of white space to create a more open feeling. Overall I
            had positive feedback regarding this decision, even with initial
            hesitation of the directors of cutting back on Generate’s primary
            color.
          </Prose>
        </GridItem>
        <GridItem gridArea="b">
          <StyledImage src={generateFinal} />
        </GridItem>
        <GridItem gridArea="c" marginTop={true}>
          <SectionTitle>Taking it live - from design to code</SectionTitle>
          <Prose>
            Northeastern organizations must use Wordpress to host on their
            domain, which was a limitation I was aware of when starting this
            project. I decided to use{' '}
            <A
              href="https://www.upstatement.com/timber/"
              target="_blank"
              rel="noreferrer"
            >
              Timber
            </A>{' '}
            coupled with{' '}
            <A
              href="https://www.advancedcustomfields.com/"
              target="_blank"
              rel="noreferrer"
            >
              ACF
            </A>{' '}
            to build out a custom theme, due to the fact that it is arguably
            easier for future devs to make updates since it uses templating
            markup that is more familiar than traditional PHP files.
          </Prose>
          <Prose>
            A key part of the development overhaul was to allow for future
            Generate members to be able to update the site’s information,
            without the need of a developer. After handoff I was so pleased to
            see the Generate team making use of the new design and creating new
            posts that needed a developer in the past. This wasn’t just a visual
            refresh — it was an entire process upgrade for the Generate team.
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
