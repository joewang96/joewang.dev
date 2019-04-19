import React from 'react';

import Layout from '../../components/Layout';
import SEO from '../../components/Seo';

import CaseStudyWrapper from '../../components/case_study/CaseStudyWrapper';

const HubSpotCanvas = () => (
  <Layout>
    <SEO title="Generate Redesign" hideTitle={true} />
    <CaseStudyWrapper
      title="HubSpot Canvas — maintaining a first-class design system that scales."
      subtitle="Why creating accessible products starts with educating the future creators and how you can help."
    />
  </Layout>
);

export default HubSpotCanvas;
