import React from 'react';
// import { Link } from "gatsby"
import styled from 'styled-components';

import Layout from '../components/Layout';
import SEO from '../components/Seo';

import ListComponent from '../components/ListComponent';
import ListItem from '../components/ListItem';

import H1 from '../elements/H1';
import H2 from '../elements/H2';
import H3 from '../elements/H3';
import P from '../elements/P';
import A from '../elements/A';
import Em from '../elements/Em';

import { COLORS, SIZES } from '../tokens';
import * as resume from '../misc/Joseph_Wang_Resume.pdf';

import * as washingtonDC from '../images/about/dc-street.jpg';
import * as scretreat from '../images/about/sc-treat.jpg';
import * as techDesignDuo from '../images/about/tech-design-duo.jpg';

// ------

const PortfolioSection__Container = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;

  padding: 0 ${SIZES.PADDING_DESKTOP};
  margin-bottom: 136px;

  @media (max-width: ${SIZES.BREAK_MD}) {
    padding: 0 ${SIZES.PADDING_TABLET};
    margin-bottom: 100px;
  }

  @media (max-width: ${SIZES.BREAK_SM}) {
    padding: 0 ${SIZES.PADDING_MOBILE};
    margin-bottom: 60px;
  }
`;

const Portfolio_Row = styled.div`
  display: flex;
  flex-direction: row;
  align-items: ${props => (props.alignStart ? 'flex-start' : 'flex-end')};

  &:first-of-type {
    margin-bottom: 33px;
  }

  @media (max-width: ${SIZES.BREAK_MD}) {
    flex-direction: column;
    &:first-of-type {
      margin: 0;
    }
  }
`;

const Portfolio_Col = styled.div`
  display: flex;
  flex-direction: ${props => (props.reverse ? 'column-reverse' : 'column')};
  width: ${({ width }) => width};

  &:first-of-type {
    margin-right: 33px;
  }

  @media (max-width: ${SIZES.BREAK_MD}) {
    width: 100%;
    flex-direction: column-reverse;
    margin-bottom: 60px;

    &:first-of-type {
      margin-right: 0;
    }
  }
  @media (max-width: ${SIZES.BREAK_SM}) {
    margin-bottom: 52px;
  }
`;

const Portfolio_Image = styled.div`
  width: 100%;
  height: 0;
  padding-bottom: ${props => `${props.ratio * 100}%` || '66%'};
  background: radial-gradient(circle, #fafaff 0%, #eff0ff 100%);
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  border-radius: 3px;

  @media (max-width: ${SIZES.BREAK_MD}) {
    margin-bottom: 16px;
  }
`;

// ------

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  padding: 0 ${SIZES.PADDING_DESKTOP};
  margin-bottom: 136px;

  @media (max-width: ${SIZES.BREAK_MD}) {
    padding: 0 ${SIZES.PADDING_TABLET};
    margin-bottom: 100px;
  }

  @media (max-width: ${SIZES.BREAK_SM}) {
    padding: 0 ${SIZES.PADDING_MOBILE};
    margin-bottom: 60px;
  }

  padding-top: 60px;
`;

const Container = styled.div``;

const Title = styled(H1)`
  margin-bottom: 48px;
  @media (max-width: ${SIZES.BREAK_MD}) {
    margin-bottom: 32px;
  }
`;

const Body = styled(P)`
  max-width: 33.125rem;
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
  margin-left: auto;
  ${H2} {
    max-width: 17.5rem;
  }
`;

const List_Cta = styled(A)`
  font-family: 'Noto Sans', Cabin, Helvetica Neue, Helvetica, sans-serif;
  font-style: italic;
  font-size: 1rem;
  text-decoration: none;
  font-weight: 400;
  line-height: 1.8;
  color: ${COLORS.OFF_BLACK};
  display: inline-block;
  margin-top: 36px;
  @media (max-width: ${SIZES.BREAK_SM}) {
    font-size: 0.875rem;
    margin-top: 0px;
    margin-bottom: 18px;
  }
`;

const Smaller = styled(P)`
  font-size: 1.125rem;

  ${H3} + & {
    margin-top: 12px;
  }

  & + & {
    margin-top: 30px;
  }
`;

const Caption = styled(Em)`
  ${({ reverse }) => (reverse ? 'margin-top' : 'margin-bottom')}: 16px;
`;

const AboutPage = ({ location }) => (
  <Layout location={location}>
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

    {/* Portfolio Container */}
    <PortfolioSection__Container>
      {/* Row */}
      <Portfolio_Row>
        <Portfolio_Col width="58%">
          <Caption>
            Group photo at retreat from my first semester in Scout!
          </Caption>
          <Portfolio_Image
            ratio={0.66}
            style={{ backgroundImage: `url(${scretreat})` }}
          />
        </Portfolio_Col>
        <Portfolio_Col width="42%">
          <Caption>
            Scout’s Tech and Design Director power duo{' '}
            <span style={{ fontStyle: 'normal' }}>🙌</span>
          </Caption>
          <Portfolio_Image
            ratio={0.66}
            style={{ backgroundImage: `url(${techDesignDuo})` }}
          />
        </Portfolio_Col>
      </Portfolio_Row>

      {/* Row */}
      <Portfolio_Row alignStart>
        <Portfolio_Col
          width="44%"
          style={{ padding: '36px 5% 0', boxSizing: 'border-box' }}
        >
          <H3>Above all else, always grow</H3>
          <Smaller>
            I believe that one of my greatest traits is a continual hunger to
            seek knowledge and continue to develop my existing skills.
          </Smaller>
          <Smaller>
            Whether it be in my personal or professional life I always seek out
            ways to challenge myself and learn as much as I can from every
            experience.
          </Smaller>
        </Portfolio_Col>
        <Portfolio_Col reverse width="48%" style={{ marginBottom: 0 }}>
          <Caption reverse style={{ textAlign: 'right' }}>
            My home is Northern Virginia, right by Washington D.C.
          </Caption>
          <Portfolio_Image
            ratio={0.66}
            style={{ backgroundImage: `url(${washingtonDC})` }}
          />
        </Portfolio_Col>
      </Portfolio_Row>
    </PortfolioSection__Container>

    <WorkListings
      title="Where have I worked?"
      compact={true}
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
