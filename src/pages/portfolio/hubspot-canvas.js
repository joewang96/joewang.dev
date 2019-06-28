import React from 'react';
import styled from 'styled-components';

import Layout from '../../components/Layout';
import SEO from '../../components/Seo';

import CaseStudyWrapper from '../../components/case_study/CaseStudyWrapper';
import SectionTitle from '../../components/case_study/SectionTitle';
import Prose from '../../components/case_study/Prose';
import GridRow from '../../components/case_study/GridRow';
import GridItem from '../../components/case_study/GridItem';
import CenteredText from '../../components/case_study/CenteredText';
import ButtonLink from '../../components/ButtonLink';

import * as canvasMockup from '../../images/canvas/canvas_preview.png';
import * as canvasNew from '../../images/canvas/canvas_new.png';
import * as canvasEvergreen from '../../images/canvas/canvas_evergreen.png';
import * as libraryRedesign from '../../images/canvas/uilibrary_redesign.gif';

const StyledImage = styled.img`
  width: 100%;
`;

const FullImage = styled(StyledImage)`
  max-width: 56rem;
  margin-top: 3.75rem;
  margin-bottom: 3.75rem;
`;

const HubSpotCanvas = ({ location }) => (
  <Layout location={location}>
    <SEO title="HubSpot Canvas UI Team" />
    <CaseStudyWrapper
      title="HubSpot Canvas — maintaining a first-class design system that scales."
      img={{
        src: canvasMockup,
        alt:
          "Mobile, wide-screen desktop, and laptop views of different pages of the Canvas Design System's public website.",
      }}
    >
      <GridRow>
        <CenteredText>
          <SectionTitle>My time with FaaS UI working on Canvas</SectionTitle>
          <Prose>
            Coming back to HubSpot on my third and final co-op, I was placed on
            the "Front-End as a Service" (FaaS) UI team. The teams mission was
            to create and maintain a design system of reusable components,
            Canvas, to empower teams to build products more quickly, and in a
            maintainable way.
          </Prose>
          <Prose>
            I joined the team at the start of January 2019, and stayed on until
            June. During that time I was able to take on responsibilities such
            as creating new components, updating existing components for product
            teams, and thinking of ways to improve the existing Canvas design
            system.
          </Prose>
        </CenteredText>
      </GridRow>

      <GridRow gridTemplateCol="repeat(2, 1fr)" gridTemplateAreas="'a b'">
        <GridItem gridArea="a">
          <SectionTitle>Building out new components</SectionTitle>
          <Prose>
            One of my favorite aspects of my position was working with designers
            and developers to build out new components for the design system.
          </Prose>

          <Prose>
            New functionality was exciting to introduce, but some of the most
            rewarding parts of building the new components was ensuring
            accessibility and ease of use for developers across the various
            components that the new one could be used with.{' '}
          </Prose>
        </GridItem>
        <GridItem gridArea="b">
          <StyledImage
            src={canvasNew}
            alt="A mockup of a nested dropdown next to an onboarding popover component, both of which I developed."
          />
        </GridItem>
      </GridRow>

      <GridRow gridTemplateCol="repeat(2, 1fr)" gridTemplateAreas="'a b'">
        <GridItem gridArea="b">
          <SectionTitle>Maintaining an evergreen design system</SectionTitle>
          <Prose>
            A design system is bound to fail if it cannot grow with the product.
            A core responsibility of the FaaS UI Team is to respond to Product
            team feedback to ensure the components can be used as intended.
          </Prose>
          <Prose>
            Refactoring old components was where most of my time was spent while
            a part of the team. This doesn’t just mean bugfixes, however —
            components are redesigned as seen fit based on the current needs of
            designers, developers, and PMs. A design system is a living,
            breathing thing that cannot stay static to when a feature was first
            introduced.
          </Prose>
        </GridItem>
        <GridItem gridArea="a">
          <StyledImage
            src={canvasEvergreen}
            alt="An assortment of UI components that I had a hand in updating or refactoring. These include progress bars, text inputs, buttons, popovers, and cards."
          />
        </GridItem>
      </GridRow>

      <GridRow gap="0">
        <CenteredText>
          <SectionTitle>Redesigning the UI Library's "spec page"</SectionTitle>
          <Prose>
            My final project on FaaS UI was kicking off the initiative to give
            the UI Library a needed refresh. Designers have found it difficult
            to use and there hasn't been much UX thought put into it after it's
            initial creation in 2016.
          </Prose>
          <Prose>
            Before I left I was able to tackle some of the most used pages in
            the Library: the component "spec" pages — which serve as the
            documentation for our reusable React-based components.
          </Prose>
        </CenteredText>
        <FullImage
          src={libraryRedesign}
          alt="The redesigned UI Library, featuring a tabbed layout that makes it easier to navigate and find content for each specific component."
        />
        <CenteredText>
          <Prose>
            One of the key changes I made was to sepereate the content into
            different tabs to make it easier for designers and developers to
            know where to go to find the information they are looking for.
          </Prose>
          <Prose>
            Additionally, my changes gave "design guidelines" a more prominent
            home in HubSpot's documentation, allowing for more design and UX
            guidance to be added in the future.
          </Prose>
        </CenteredText>
      </GridRow>

      <GridRow>
        <CenteredText>
          <SectionTitle>A retrospective on my time with FaaS UI</SectionTitle>
          <Prose>
            My time on FaaS UI was a very unique and exciting experience. While
            I was hired as a Software Engineer, the team structure and
            responsibilities allowed me to also dive into the design process at
            HubSpot and what it was like to maintain a design system. I was even
            given the opportunity to lead the redesign of the UI Library: an
            internal tool used by every designer and front-end engineer on
            Product.
          </Prose>
          <ButtonLink
            href="https://canvas.hubspot.com"
            target="_blank"
            rel="noreferrer"
          >
            Learn more about Canvas
          </ButtonLink>
        </CenteredText>
      </GridRow>
    </CaseStudyWrapper>
  </Layout>
);

export default HubSpotCanvas;
