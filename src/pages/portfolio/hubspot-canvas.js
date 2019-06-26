import React from 'react';

import Layout from '../../components/Layout';
import SEO from '../../components/Seo';

import CaseStudyWrapper from '../../components/case_study/CaseStudyWrapper';

const HubSpotCanvas = ({ location }) => (
  <Layout location={location}>
    <SEO title="HubSpot Canvas UI Team" />
    <CaseStudyWrapper
      title="HubSpot Canvas — maintaining a first-class design system that scales."
      subtitle="Why creating accessible products starts with educating the future creators and how you can help."
    />
  </Layout>
);

export default HubSpotCanvas;
