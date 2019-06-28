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
import CenteredText from '../../components/case_study/CenteredText';
import { COLORS } from '../../tokens';
import ButtonLink from '../../components/ButtonLink';
import A from '../../elements/A';

import * as generateMockup from '../../images/generate/generate-mock.png';
import * as generateWireDigital from '../../images/generate/generate-wireframe-digital.png';
import * as generateDirection from '../../images/generate/generate-directions.png';
import * as brandColors from '../../images/generate/brand_colors.png';
import * as brandType from '../../images/generate/brand_type.png';
import * as generateFinal from '../../images/generate/generate-final-hifi.png';
import StickyWrapper from '../../components/case_study/StickyWrapper';

const StyledImage = styled.img`
  width: 100%;
`;

const FullImage = styled(StyledImage)`
  max-width: 56rem;
  margin-top: 3.75rem;
`;

const GenerateRedesign = ({ location }) => (
  <Layout location={location}>
    <SEO title="Generate Website Redesign" />
    <CaseStudyWrapper
      title="Generate Website Redesign — complete visual, UX, and website overhaul."
      img={{
        src: generateMockup,
        alt:
          'Screens of the Generate redesign on mockups of a phone and laptop.',
      }}
    >
      <GridRow gridTemplateCol="repeat(2, 1fr)">
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

      <GridRow gridTemplateCol="repeat(2, 1fr)" gridTemplateAreas="'a b'">
        <GridItem gridArea="b">
          <StickyWrapper>
            <SectionTitle>Information architecure revamp</SectionTitle>
            <Prose>
              The first part of the process was determining what information was
              pertinent to Generate and what was the best way to organize it. I
              started by interviewing directors of the organization to get a
              sense of what they wanted on the new site and translated those
              findings into some requirements.
            </Prose>
            <Prose>
              From those interviews, I was able to begin creating a new IA
              schema which led into initial wireframes. After a few rounds of
              designs and revisions, I moved to creating digital sketches with
              more of the fine details of spacing and layout incorporated.
              Increasing fidelity at each step of the process allowed for larger
              UX details to be straightened out before getting caught up in the
              more visual aspects.
            </Prose>
          </StickyWrapper>
        </GridItem>
        <GridItem gridArea="a">
          <StyledImage
            src={generateWireDigital}
            alt="Wireframe mockups of the various screens on the Generate website."
          />
        </GridItem>
      </GridRow>

      <GridRow gap="0">
        <CenteredText>
          <SectionTitle>Determining a brand direction</SectionTitle>
          <Prose>
            While creating the wireframes I also created a few mockups to help
            determine what Generate's web brand would be. I took a modified
            approach from style-tiles, with an emphasis on showcasing the same
            section of the page to not introduce additional factors for
            participant feedback. Below are three options I created, with the
            center being the one that was chosen.
          </Prose>
        </CenteredText>
        <FullImage
          src={generateDirection}
          alt="Three choices for the new brand direction for Generate, shown through mockups of the hero section of the homepage."
        />
      </GridRow>

      <GridRow gap="0">
        <CenteredText>
          <SectionTitle>Refreshing a brand for the web</SectionTitle>
          <Prose>
            The original site and brand focused primarily on the blue color
            featured in the organization’s logo. I found that color difficult to
            work with, both in terms of accessibility and pairing it with
            dynamic content such as images.
          </Prose>
          <Prose>
            To overcome this dilemma, I opted for a palette swap of the brand’s
            colors — focusing more on the yellow as the primary accent color
            with a lot of white space to create a more open feeling. Below are
            the finalized brand colors and typography options.
          </Prose>
        </CenteredText>
        <FullImage
          src={brandColors}
          alt="The finalized colors I picked for the new brand, with the usage ratio beneath them."
        />
        <FullImage
          src={brandType}
          alt="Various text styles I used for updating Generate's brand. Uses IBM Plex Sans and Lato as the two font faces"
        />
      </GridRow>

      <GridRow
        gridTemplateCol="repeat(2, 1fr)"
        gridTemplateAreas="'a b' 'c b' '. b'"
      >
        <GridItem gridArea="a">
          <SectionTitle>Finalizing hi-fidelity mocks</SectionTitle>
          <Prose>
            Overall I had positive feedback regarding the updated branding of
            Generate, even with initial hesitation of the directors of cutting
            back on Generate’s primary color.
          </Prose>
          <Prose>
            With the branding of the website solidified, I began putting time
            into finishing the design of the rest of the pages, including the
            templates for the dynamic position listings.
          </Prose>
        </GridItem>
        <GridItem gridArea="b">
          <StyledImage
            src={generateFinal}
            alt="Finalized mockups of the Generate website, complete with color, complete UI, and more realistic copy."
          />
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
