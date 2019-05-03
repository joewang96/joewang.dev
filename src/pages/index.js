import React from 'react';

import Layout from '../components/Layout';
import SEO from '../components/Seo';

import HomeHero from '../components/home/HomeHero';
import PortfolioSection from '../components/home/PortfolioSection';

const IndexPage = () => (
  <Layout>
    <SEO title="Joseph Wang" hideTitle={true} />
    {/* Hero Container */}
    <HomeHero />
    {/* Portfolio Section */}
    <PortfolioSection />
  </Layout>
);

export default IndexPage;
