import React from 'react';

import Layout from '../components/Layout';
import SEO from '../components/Seo';

import HomeHero from '../components/home/HomeHero';
import PortfolioSection from '../components/home/PortfolioSection';

import ListComponent from '../components/ListComponent';
import ListItem from '../components/ListItem';

const IndexPage = () => (
  <Layout>
    <SEO title="Joseph Wang" hideTitle={true} />

    {/* Hero Container */}
    <HomeHero />

    {/* Portfolio Section */}
    <PortfolioSection />

    {/* Written or Job(?) Section */}
    <ListComponent
      title="Additional case studies & writing."
      content={
        <>
          <ListItem
            title="Managing a team of designers and developers — Scout Studio."
            body="How I co-led a team of 25 designers and developers working on
              various studio projects for start-up ventures."
            tag="Management / Leadership / Design studio"
          />

          <ListItem
            title="The importance of accessibility — how to equip young developers
          and designers."
            body="A project which gave me a first look into service design and
          deeper insight into balancing company and user needs in a product."
            tag="Accessibility / Mentorship"
          />
        </>
      }
    />
  </Layout>
);

export default IndexPage;
