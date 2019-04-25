import React from 'react';
import styled from 'styled-components';

import Layout from '../../components/Layout';
import SEO from '../../components/Seo';

import CaseStudyWrapper from '../../components/case_study/CaseStudyWrapper';
import SectionTitle from '../../components/case_study/SectionTitle';
import Prose from '../../components/case_study/Prose';

import * as generateMockup from '../../images/generate/generate-mock.png';
import * as generateReqs from '../../images/generate/generate-reqs.jpg';
import * as generateWireDrawn from '../../images/generate/generate-wireframe-drawn.jpg';
import * as generateWireDigital from '../../images/generate/generate-wireframe-digital.png';

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
        The first part of the process in redesigning the Generate website was
        determining what information was pertinent to the organization and how I
        was going to lay it out. I started by interviewing directors of the
        organization to get a sense of what they wanted on the new site.
      </Prose>
      <Prose>
        Once that was complete, I conducted an information architecture
        exercise--listing out all of their current pages and what information
        was displayed on each page. Afterward, I added the requested additions I
        found during my interviews as bullets floating on the page.
      </Prose>
      <Prose>
        With the information set, I began reorganizing the structure to better
        group content that was related to each other. This also allowed my to
        clean up any pages that were unnecessary under this structure of
        information.
      </Prose>

      <StyledImage src={generateReqs} />

      <SectionTitle>Creating wireframes</SectionTitle>

      <Prose>
        After testing my IA decisions with key stakeholders of Generate
        (Executive, Ops, and Branding Director) and receiving approval, I was
        able to begin wireframes for how the content would be presented on the
        page.
      </Prose>
      <Prose>
        I began this process by sketching out rough drafts, not spending too
        much time on the details - just enough to convey the necessary
        information. I showed these to the Design Director, collected feedback
        and reworked my designs to best incorporate the feedback she provided.
      </Prose>
      <Prose>
        After designs have been reviewed and edited, I moved to creating digital
        sketches with more of the fine details of spacing and layout
        incorporated. Increasing fidelity at each step of the process allowed
        for larger UX details to be straightened out before getting caught up in
        the more visual aspects.
      </Prose>

      <StyledImage src={generateWireDrawn} />

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
        experience in--with my expertise coming in through interaction and UX
        design. This was a great learning opportunity to take an existing,
        primarily print brand, and translate it into a digital medium.
      </Prose>
    </CaseStudyWrapper>
  </Layout>
);

export default GenerateRedesign;
