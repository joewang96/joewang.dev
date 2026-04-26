import React from 'react';
import styled from 'styled-components';

import Layout from '../components/Layout';
import SEO from '../components/Seo';

import Hero from '../components/Hero';
import ProjectsSection from '../components/ProjectsSection';
import WorkSection from '../components/WorkSection';

const SectionWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 80px;
`;

const IndexPage = ({ location }) => (
  <Layout location={location}>
    <SEO title="Joseph Wang" hideTitle={true} />
    <SectionWrapper>
      <Hero />
      <ProjectsSection />
      <WorkSection />
    </SectionWrapper>
  </Layout>
);

export default IndexPage;
