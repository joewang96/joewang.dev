import React from 'react';
import styled from 'styled-components';

import Layout from '../../components/Layout';
import SEO from '../../components/Seo';
import A from '../../elements/A';

import CaseStudyWrapper from '../../components/case_study/CaseStudyWrapper';
import SectionTitle from '../../components/case_study/SectionTitle';
import Prose from '../../components/case_study/Prose';
import Quote from '../../components/case_study/Quote';
import GridRow from '../../components/case_study/GridRow';
import GridItem from '../../components/case_study/GridItem';

import { COLORS } from '../../tokens';
import ButtonLink from '../../components/ButtonLink';

import * as mentalligenceMockup from '../../images/dr-kris/mentalligence-mock.png';

import * as howMightWe from '../../images/dr-kris/mentalligence_hmw.jpg';
// import * as resourcesWireframe from '../../images/dr-kris/resources_wireframe.png';
import * as finalResEvents from '../../images/dr-kris/final_resources_events.png';
import * as quizPages from '../../images/dr-kris/quiz_pages.png';
import * as mobileAnimation from '../../images/dr-kris/mobile-nav-animation.gif';
import * as finalPages from '../../images/dr-kris/all_final.png';

const StyledImage = styled.img`
  width: 100%;
`;

const MentalligencePage = ({ location }) => (
  <Layout location={location}>
    <SEO title="Generate Redesign" hideTitle={true} />
    <CaseStudyWrapper
      title="Mentalligence — brand identity and website development for an author and professor."
      img={{ src: mentalligenceMockup, alt: '' }}
    >
      <GridRow gap="5.8125rem" gridTemplateCol="repeat(2, 1fr)">
        <GridItem>
          <SectionTitle>Introducing my first studio project</SectionTitle>
          <Prose>
            My first client project at{' '}
            <A
              href="https://web.northeastern.edu/scout"
              target="_blank"
              rel="noreferrer noopener"
            >
              Scout Studio
            </A>
            {','} was for Dr. Kristen "Kris" Lee, the department head of
            Behavioral Sciences at Northeastern and author of RESET. She has
            spoken at many events, giving tips to deal with stress, highlighting
            the importance mental health, and promoting mindfulness.
          </Prose>
          <Prose>
            Through a few scoping and prioritization exercises our team took on
            the task of creating an entire brand, fully custom website, and
            collateral for Dr. Kris to use on social media and at her upcoming
            TEDx talk.
          </Prose>
        </GridItem>
        <GridItem style={{ display: 'flex' }}>
          <Quote borderColor={COLORS.GREEN}>
            How might we build an accessible platform of reputable resources
            curated by Dr. Kris and utilize a unified brand to promote
            Mentalligence?
          </Quote>
        </GridItem>
      </GridRow>

      <GridRow
        gap="5.8125rem"
        gridTemplateCol="repeat(2, 1fr)"
        gridTemplateAreas="'a b'"
      >
        <GridItem gridArea="b">
          <SectionTitle>Requirements gathering</SectionTitle>
          <Prose>
            Our team consisted of four members: a project lead, two other
            designers, and myself acting as the sole developer and helping with
            UX design. Before our team began work on any designs or wireframes
            we first conducted a few brainstorming exercises, consisting of
            brand analysis, requirements gathering for the website, and persona
            development for her target audience.
          </Prose>
          <Prose>
            This was my first time doing these activities in a real-world
            scenario and the experience was invaluable in terms of planning down
            the road for what we had to accomplish. The "How Might We" exercise
            (HMW) shown is something I have brought to various teams.
          </Prose>
        </GridItem>
        <GridItem gridArea="a">
          <StyledImage src={howMightWe} />
        </GridItem>
      </GridRow>

      <GridRow
        gap="0 5.8125rem"
        gridTemplateCol="repeat(2, 1fr)"
        gridTemplateAreas="'a b'"
      >
        <GridItem gridArea="a">
          <SectionTitle>Building to grow</SectionTitle>
          <Prose>
            A key piece of the website we were delivering was the ability to
            scale - for Dr. Kris to be able to control the content herself,
            without relying on a developer for every change. To accomplish this
            task we built the site on top of a CMS called "Craft", with my past
            experience in PHP helping me jump into it quickly.
          </Prose>
          <Prose>
            The majority of the screens I was responsible for designing were
            more data driven - the pages that would be subject to the most
            amount of dynamic content generated by the client. Even before I
            began building in Craft I had to think about how I wanted the data
            structures and fields to be setup. I had to balance both ease of use
            for the client to understand the structure we were going to be
            asking for the data in and performance for the CMS to be able to
            query for the content effectively.
          </Prose>
        </GridItem>
        <GridItem gridArea="b">
          <StyledImage src={finalResEvents} />
        </GridItem>
      </GridRow>

      <GridRow
        gap="0 5.8125rem"
        gridTemplateCol="repeat(2, 1fr)"
        gridTemplateAreas="'a b'"
      >
        <GridItem gridArea="b">
          <SectionTitle>Designing an interactive quiz</SectionTitle>
          <Prose>
            In addition to building the informational portions of the website, I
            was put in charge of creating an interactive quiz dealing with
            topics from Dr. Kris’ new book. When deciding how to approach this
            problem I first began by choosing a framework to help with
            rendering. I immediately went to Vue.js — a Javascript framework
            similar to React that helps create adaptable front-ends.
          </Prose>
          <Prose>
            My reasoning for choosing Vue was because I was both familiar with
            the framework and that it has less overhead than similar libraries
            such as React or Angular. Vue would allow me to link the user’s data
            as they progress through the quiz with the front-end of the app —
            binding state with view.
          </Prose>
          <Prose>
            The final consideration for creating the quiz was how to model the
            questions given to me by the client. After reviewing the types of
            questions given, my team and I chose how the different types of
            inputs would be mapped to each question. I then created reusable
            components for each type to keep the code DRY and to allow future
            developers to manage it more easily.
          </Prose>
        </GridItem>
        <GridItem gridArea="a">
          <StyledImage src={quizPages} />
        </GridItem>
      </GridRow>

      <GridRow
        gap="0 5.8125rem"
        gridTemplateCol="repeat(2, 1fr)"
        gridTemplateAreas="'a b'"
      >
        <GridItem gridArea="a">
          <SectionTitle>A few final touches</SectionTitle>
          <Prose>
            The final touches I made to the site included a loading transition
            for the homepage and a menu animation on mobile. After working with
            the back-end CMS for the last few weeks of the cycle, it was nice to
            have a change of pace and deal with elements that would enhance the
            overall user experience.
          </Prose>
          <Prose>
            For the mobile menu transition I wanted to create a motion that
            seemed sleek and fluid, but wasn't overly exaggerated since
            performance would be a main concern for phones. I had the menu icon
            transition state to show clear controls and opted for a
            semi-transparent, blurred overlay rather than a solid color to keep
            the subdued theme of the site.
          </Prose>
        </GridItem>
        <GridItem gridArea="b" style={{ textAlign: 'center' }}>
          <StyledImage src={mobileAnimation} style={{ maxWidth: 400 }} />
        </GridItem>
      </GridRow>

      <GridRow
        gap="0 5.8125rem"
        gridTemplateCol="repeat(2, 1fr)"
        gridTemplateAreas="'a b'"
      >
        <GridItem gridArea="a">
          <StyledImage src={finalPages} />
        </GridItem>

        <GridItem gridArea="b">
          <SectionTitle>The takeaway from my first Studio team</SectionTitle>
          <Prose>
            This was my first client project as a member of Scout Studio and I
            can honestly say that I had a blast. Being able to design and brand
            for an actual person rather than a company or product was a unique
            experience that allowed me to grow as a designer.
          </Prose>
          <Prose>
            The small team dynamic allowed me to take on more responsibility,
            thus making the most out of my experience. While I was the only
            developer, I enjoyed being able to take charge of the task as well
            as learn to communicate better with designers as well as advocate
            for myself.
          </Prose>

          <ButtonLink
            href="http://www.kristenlee.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            View completed site
          </ButtonLink>
        </GridItem>
      </GridRow>
    </CaseStudyWrapper>
  </Layout>
);

export default MentalligencePage;
