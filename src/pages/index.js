import React from 'react';
import styled from 'styled-components';

import Layout from '../components/Layout';
import SEO from '../components/Seo';

import Hero from '../components/home/Hero';
import PortfolioSection from '../components/home/PortfolioSection';
import AboutMe from '../components/home/AboutMe';

// From about
import ListComponent from '../components/ListComponent';
import ListItem from '../components/ListItem';
import AboutImageSection from '../components/about/AboutImageSection';

import { COLORS, SIZES } from '../tokens';

const LightWeight = styled.span`
  font-weight: 400;
`;

const WorkListings = styled(ListComponent)`
  margin-left: auto;
`;

const IndexPage = ({ location }) => (
  <Layout location={location}>
    <SEO title="Joseph Wang" hideTitle={true} />

    <Hero />
    <PortfolioSection />
    <AboutMe />
    <AboutImageSection />

    <WorkListings
      content={
        <>
          <ListItem
            title={
              <>
                Front-End Software Engineer Co-op{' '}
                <LightWeight>at HubSpot</LightWeight>
              </>
            }
            body="Worked on the team that owned the design system and reusable components used by designers and front-end devs. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
            tag="January 2019 - June 2019"
          />

          <ListItem
            title={
              <>
                Technology Director <LightWeight>at Scout Studio</LightWeight>
              </>
            }
            body="Led a team of over 25 designers and developers working on various client projects throughout the semester. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
            tag="June 2018 - December 2018"
          />

          <ListItem
            title={
              <>
                Front-End Software Engineer Co-op{' '}
                <LightWeight>at HubSpot</LightWeight>
              </>
            }
            body="Improved the text-editing experience on multiple apps inside HubSpot as part of the Inline Editing team. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
            tag="January 2018 - August 2018"
          />

          <ListItem
            title={
              <>
                Full Stack Web Developer{' '}
                <LightWeight>at SparkCo, Inc.</LightWeight>
              </>
            }
            body="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
            tag="January 2017 - November 2017"
          />
        </>
      }
    />
  </Layout>
);

export default IndexPage;
