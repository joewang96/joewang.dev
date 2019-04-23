import React from 'react';

import Layout from '../../components/Layout';
import SEO from '../../components/Seo';
import A from '../../elements/A';

import CaseStudyWrapper from '../../components/case_study/CaseStudyWrapper';
import SectionTitle from '../../components/case_study/SectionTitle';
import Prose from '../../components/case_study/Prose';

import * as mentalligenceMockup from '../../images/dr-kris/mentalligence-mock.png';

const MentalligencePage = () => (
  <Layout>
    <SEO title="Generate Redesign" hideTitle={true} />
    <CaseStudyWrapper
      title="Mentalligence — brand identity and website development for an author and professor."
      subtitle="How might we establish Dr. Kris as an intelligent voice for change, build an accessible platform for reputable resources curated by her, and utilize a unified brand to promote Mentalligence?"
      img={{ src: mentalligenceMockup, alt: '' }}
    >
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
        {','} a student-run design studio at Northeastern University, was for
        Dr. Kristen "Kris" Lee, the department head of Behavioral Sciences at
        Northeastern. She is the author of RESET and has spoken at many events,
        giving tips to deal with stress, highlight the importance mental health,
        and promote mindfulness.
      </Prose>
      <Prose>
        Dr. Kris came to Scout as a client wanting to find help with developing
        her personal branding and to create a new website for her to house her
        content. Dr. Kris was also gearing up to speak at an upcoming TEDx
        event, and also wanted design work for her slides and other forms of
        collateral.
      </Prose>

      <SectionTitle>Starting with requirements gathering</SectionTitle>
      <Prose>
        Our team consisted of four members: a project lead, two other designers,
        and myself acting as the sole developer and helping with UX design.
        Before our team began work on any designs or wireframes we first
        conducted a few brainstorming exercises, consisting of brand analysis,
        requirements gathering for the website, and persona development for her
        target audience. This was my first time doing these activities in a
        real-world scenario and the experience was invaluable in terms of
        planning down the road for what we had to accomplish.
      </Prose>
    </CaseStudyWrapper>
  </Layout>
);

export default MentalligencePage;
