import React from 'react';
// import { Link } from "gatsby"
import styled from 'styled-components';

import Layout from '../components/Layout';
import SEO from '../components/Seo';

import ListComponent from '../components/ListComponent';
import ListItem from '../components/ListItem';

import H1 from '../elements/H1';
import H2 from '../elements/H2';
import P from '../elements/P';
import A from '../elements/A';

import { COLORS, SIZES } from '../tokens';
import * as resume from '../misc/Joseph_Wang_Resume.pdf';

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  padding: 0 ${SIZES.PADDING_DESKTOP};
  margin-bottom: 120px;

  @media (max-width: ${SIZES.BREAK_MD}) {
    padding: 0 ${SIZES.PADDING_TABLET};
    margin-bottom: 100px;
  }

  @media (max-width: ${SIZES.BREAK_SM}) {
    padding: 0 ${SIZES.PADDING_MOBILE};
    margin-bottom: 60px;
  }

  padding-top: 60px;
  padding-bottom: 60px;
`;

const Container = styled.div``;

const Title = styled(H1)`
  margin-bottom: 48px;
  @media (max-width: ${SIZES.BREAK_MD}) {
    margin-bottom: 32px;
  }
`;

const Body = styled(P)`
  max-width: 530px;
  &:not(:last-child) {
    margin-bottom: 36px;
    @media (max-width: ${SIZES.BREAK_SM}) {
      margin-bottom: 24px;
    }
  }
`;

const LightWeight = styled.span`
  font-weight: 400;
`;

const WorkListings = styled(ListComponent)`
  max-width: 1089px;
  margin-left: auto;
  ${H2} {
    max-width: 280px;
  }
`;

const List_Cta = styled(A)`
  font-family: 'Noto Sans', Cabin, Helvetica Neue, Helvetica, sans-serif;
  font-style: italic;
  font-size: 16px;
  text-decoration: none;
  font-weight: 400;
  line-height: 1.8;
  color: ${COLORS.OFF_BLACK};
  display: inline-block;
  margin-top: 36px;
  @media (max-width: ${SIZES.BREAK_SM}) {
    font-size: 14px;
    margin-top: 0px;
    margin-bottom: 18px;
  }
`;

const AboutPage = () => (
  <Layout>
    <SEO title="About" />
    <Wrapper>
      <Container>
        <Title>Designer. Developer. Creative.</Title>
        <Body>
          Starting out as a developer, I quickly found a passion and love for
          design and building amazing experiences. I’ve since grown these two
          skillsets and activley seek opportunities to work at the intersection
          of these disciplines.
        </Body>
        <Body>
          Originally from Northern Virginia, I moved up to Boston for college —
          attending Northeastern University. I’ll be graduating May 2020, and
          joining{' '}
          <A
            href="https://hubspot.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            HubSpot
          </A>{' '}
          afterward.
        </Body>
      </Container>
    </Wrapper>

    <WorkListings
      title="Where have I worked?"
      content={
        <>
          <ListItem
            title={
              <>
                Front-End Software Engineer Co-op{' '}
                <LightWeight>at HubSpot</LightWeight>
              </>
            }
            body="Worked on the team that owned the design system and reusable components used by designers and front-end devs."
            tag="January 2019 - Present"
          />

          <ListItem
            title={
              <>
                Technology Director <LightWeight>at Scout Studio</LightWeight>
              </>
            }
            body="Led a team of over 25 designers and developers working on various client projects throughout the semester."
            tag="June 2018 - December 2018"
          />

          <ListItem
            title={
              <>
                Front-End Software Engineer Co-op{' '}
                <LightWeight>at HubSpot</LightWeight>
              </>
            }
            body="Improved the text-editing experience on multipe apps inside HubSpot as part of the Inline Editing team."
            tag="Jan 2018 - August 2018"
          />

          <List_Cta href={resume} target="_blank">
            View full resume →
          </List_Cta>
        </>
      }
    />
  </Layout>
);

export default AboutPage;
