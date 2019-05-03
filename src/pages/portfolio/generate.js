import React from 'react';
import styled from 'styled-components';

import Layout from '../../components/Layout';
import SEO from '../../components/Seo';

import CaseStudyWrapper from '../../components/case_study/CaseStudyWrapper';
import SectionTitle from '../../components/case_study/SectionTitle';
import Prose from '../../components/case_study/Prose';

import * as generateMockup from '../../images/generate/generate-mock.png';
import * as generateReqs from '../../images/generate/generate-reqs.jpg';
import * as generateWireDigital from '../../images/generate/generate-wireframe-digital.png';
import * as generateUIStyles from '../../images/generate/generate-ui-styles.png';
import * as generateDirection from '../../images/generate/generate-directions.png';

const StyledImage = styled.img`
  width: 100%;
  max-width: 48.4rem;
  margin: 60px 0;
`;

const GenerateRedesign = () => (
  <Layout>
    <SEO title="Generate Redesign" hideTitle={true} />
    <CaseStudyWrapper
      title="Generate Website Redesign — complete visual, UX, and website overhaul."
      subtitle="How might we create an engaging online brand that showcases our story and draws attention from prospective students?"
      img={{ src: generateMockup, alt: '' }}
    >
      <SectionTitle>Starting from almost zero - what is Generate?</SectionTitle>
      <Prose>
        Generate is a product development studio at Northeastern that aims to
        unite tech minded individuals on campus, while also taking on semesterly
        clients to build out hardware products as part of their Build Studio.
      </Prose>
      <Prose>
        Their issue was that they had a very poor website that didn't really
        showcase what Generate was all about. I came on as their Web Designer
        and Developer to overhaul their site - which included their established
        brand. Their site was built on Wordpress theme they bought, and featured
        a very clunky data structure that made it hard to use.
      </Prose>

      <SectionTitle>Beginning research phase</SectionTitle>

      <Prose>
        The first part of the process was determining what information was
        pertinent to Generate and what was the best way to organize it. I
        started by interviewing directors of the organization to get a sense of
        what they wanted on the new site and translated those findings into some
        requirements.
      </Prose>
      <Prose>
        After handling the requirements gathering, I began a few card-sorting
        exercises to parse through the existing IA of the site and clean it up.
      </Prose>

      <StyledImage src={generateReqs} />

      <SectionTitle>Creating wireframes</SectionTitle>

      <Prose>
        After receiving feedback and approval of my IA decisions, I was able to
        begin creating initial wireframes for how the content would be presented
        on each page.
      </Prose>
      <Prose>
        After a few rounds of designs and revisions, I moved to creating digital
        sketches with more of the fine details of spacing and layout
        incorporated. Increasing fidelity at each step of the process allowed
        for larger UX details to be straightened out before getting caught up in
        the more visual aspects.
      </Prose>

      <StyledImage src={generateWireDigital} />

      <SectionTitle>Translating brand to the web</SectionTitle>

      <Prose>
        While creating the wireframes I also created a few mockups to help
        determine what Generate's web brand would be. I took a modified approach
        from style-tiles, with an emphasis on showcasing the same section of the
        page to not introduce additional factors for participant feedback.
      </Prose>
      <Prose>
        Branding has been a part of the design process that I've had the least
        experience in—with my expertise being in interaction and UX design. This
        was a great learning opportunity to take an existing, primarily print
        brand, and translate it into a digital context.
      </Prose>

      <StyledImage src={generateDirection} />

      <StyledImage style={{ marginTop: 0 }} src={generateUIStyles} />

      <SectionTitle>Moving into hi-fidelity</SectionTitle>

      <Prose>
        With a brand and UI directions chosen, I began moving into hi-fi mocks.
        The original site and brand focused primarily on the blue color featured
        in the organization's logo which I found difficult to work with, both in
        terms of accessibility and pairing it with dynamic content such as
        images.
      </Prose>

      <Prose>
        To overcome this dilemma I took the initiative to try a palette swap of
        the brand's colors—focusing more on the yellow as the primary accent
        color with a lot of white space to create a more open feeling. Overall I
        had positive feedback regarding this decision, even with initial
        hesitation of the directors of cutting back on Generate's primary color.
      </Prose>
    </CaseStudyWrapper>
  </Layout>
);

export default GenerateRedesign;
