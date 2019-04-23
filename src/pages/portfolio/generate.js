import React from 'react';

import Layout from '../../components/Layout';
import SEO from '../../components/Seo';

import CaseStudyWrapper from '../../components/case_study/CaseStudyWrapper';
import SectionTitle from '../../components/case_study/SectionTitle';
import Prose from '../../components/case_study/Prose';

import * as generateMockup from '../../images/generate/generate-mock.png';

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
    </CaseStudyWrapper>
  </Layout>
);

export default GenerateRedesign;
