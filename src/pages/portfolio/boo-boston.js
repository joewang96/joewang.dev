import React from 'react';

import Layout from '../../components/Layout';
import SEO from '../../components/Seo';

import CaseStudyWrapper from '../../components/case_study/CaseStudyWrapper';

const BooBoston = () => (
  <Layout>
    <SEO title="Generate Redesign" hideTitle={true} />
    <CaseStudyWrapper
      title="Boo! Boston — designing an AR app using service design concepts."
      subtitle="Why creating accessible products starts with educating the future creators and how you can help."
    />
  </Layout>
);

export default BooBoston;
