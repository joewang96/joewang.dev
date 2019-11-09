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
            body="Worked on a product team that owned the company's design system and reusable components, used by designers and front-end developers. Led an effort to standardize, improve, and codify the use of animation across the org and helped update their interactive design system documentation."
            tag="January 2019 - June 2019"
          />

          <ListItem
            title={
              <>
                Technology Director <LightWeight>at Scout Studio</LightWeight>
              </>
            }
            body="Led a team of over 25 designers and developers working on various client projects throughout the semester. Set up each team's tech stack, led weekly code reviews, and helped push accessibility as a new focus for the organization. Also assisted the Design Director in UX and IA critiques for each teams' deliverable."
            tag="June 2018 - December 2018"
          />

          <ListItem
            title={
              <>
                Front-End Software Engineer Co-op{' '}
                <LightWeight>at HubSpot</LightWeight>
              </>
            }
            body="Improved the text-editing experience on multiple apps inside HubSpot as part of the Inline Editing team. Worked closely with product designers to build out new components that would be incorporated into the larger design system. Also led the development efforts on an initiative to improve the experience of video use in the product."
            tag="January 2018 - August 2018"
          />

          <ListItem
            title={
              <>
                Full Stack Web Developer{' '}
                <LightWeight>at SparkCo, Inc.</LightWeight>
              </>
            }
            body="Designed and launched multiple web applications from the ground up for both
            clients and internal sales agents, utilizing data analytics and natural language
            processing tools in the back-end. Worked as the primary developer for the product for part of my time at the company."
            tag="January 2017 - November 2017"
          />
        </>
      }
    />
  </Layout>
);

export default IndexPage;
