import React from 'react';

import Layout from '../../components/Layout';
import SEO from '../../components/Seo';

import CaseStudyWrapper from '../../components/case_study/CaseStudyWrapper';

const MentalligencePage = () => (
  <Layout>
    <SEO title="Generate Redesign" hideTitle={true} />
    <CaseStudyWrapper
      title="Mentalligence — brand identity and website development for an author and professor."
      subtitle="Why creating accessible products starts with educating the future creators and how you can help."
    />
  </Layout>
);

export default MentalligencePage;
