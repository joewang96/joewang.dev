import React from 'react';
import styled from 'styled-components';

import Layout from '../../components/Layout';
import SEO from '../../components/Seo';
import CaseStudyWrapper from '../../components/case_study/CaseStudyWrapper';
import SectionTitle from '../../components/case_study/SectionTitle';
import Prose from '../../components/case_study/Prose';
import GridRow from '../../components/case_study/GridRow';
import CenteredText from '../../components/case_study/CenteredText';
import ButtonLink from '../../components/ButtonLink';

import * as booBostonHero from '../../images/boo-boston/hero_preview.svg';
import * as heroJourney from '../../images/boo-boston/hero_journey.jpg';
import * as serviceModel from '../../images/boo-boston/service_model.jpg';
import * as brandingElements from '../../images/boo-boston/branding.jpg';
import * as versatileBranding from '../../images/boo-boston/versatile_branding.jpg';
import * as finalScreens from '../../images/boo-boston/final_screens.jpg';

const StyledImage = styled.img`
  width: 100%;
  max-width: 56rem;
  margin-bottom: 3.75rem;
`;

const SplitImageRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  width: 100%;
  max-width: 56rem;

  & > ${StyledImage} {
    flex-basis: 50%;
    min-width: 0;

    &:not(:last-child) {
      margin-right: 3%;
    }
  }
`;

const BooBoston = ({ location }) => (
  <Layout location={location}>
    <SEO title="Boo! Boston App Concept" />
    <CaseStudyWrapper
      title="Boo! Boston — designing an AR app using service design concepts."
      img={{
        src: booBostonHero,
        alt: 'Four screen mockups of the Boo! Boston app on iPhones.',
      }}
    >
      <GridRow>
        <CenteredText>
          <SectionTitle>An AR mobile app with a service model</SectionTitle>
          <Prose>
            Boo! Boston was a semester-long project for my Interaction Design 2:
            Mobile course. For this project, we worked with a real client to
            design an augmented-reality mobile app with the goal of promoting
            tourism of families in Boston.
          </Prose>
          <Prose>
            Each team was given a different neighborhood to tailor their service
            toward. My team was given the Fenway neighborhood.{' '}
          </Prose>
        </CenteredText>
      </GridRow>

      <GridRow>
        <SplitImageRow>
          <StyledImage
            src={heroJourney}
            alt="A UX exercise where my team placed Post-It-Notes in a circle to highlight the user's heroic journey through our service."
          />
          <StyledImage
            src={serviceModel}
            alt="A brainstorming exercise that allowed our team to come up with the idea to use our service to improve foot traffic and help local businesses."
          />
        </SplitImageRow>
        <CenteredText>
          <SectionTitle>
            Discovery phase: journey maps & service models
          </SectionTitle>
          <Prose>
            Given how busy Fenway can become on game days, our team decided to
            utilize the ghost finding mechanic of the app to guide users away
            from crowded sections of the neighborhood, providing a more
            enjoyable experience to users and potentially more business to
            smaller, family owned businesses.
          </Prose>
        </CenteredText>
      </GridRow>

      <GridRow>
        <StyledImage
          src={brandingElements}
          alt="A collection of branding elements for the Boo! Boston app, including wordmark, colors, typography, and iconography."
        />

        <CenteredText>
          <SectionTitle>The branding elements of Boo! Boston.</SectionTitle>
          <Prose>
            The core demographic of the Boo! Boston app is families, so we
            wanted to ensure that the brand would be appealing to a wide range
            of ages.
          </Prose>

          <Prose>
            To do this, we opted for bold colors and clean, sans-serif typefaces
            to create a modern feeling brand. Even though this would be a
            government backed app, we wanted to create a more playful and fun
            energy.
          </Prose>
        </CenteredText>
      </GridRow>

      <GridRow>
        <StyledImage
          src={versatileBranding}
          alt="Multiple variations of the Boo! Boston wordmark and app icon to showcase how the brand could be applied to a variety of cities."
        />

        <CenteredText>
          <SectionTitle>Versatile branding</SectionTitle>
          <Prose>
            The brand of Boo! Boston was created with expandability in mind. If
            brought into new areas, each city could use its own variation of the
            brand for unique splash screens, app icons, and taglines.
          </Prose>
        </CenteredText>
      </GridRow>

      <GridRow>
        <StyledImage
          src={finalScreens}
          alt="Ten screens from our finalized UI mockups that show the on-boarding experience and core ghost finding and catching feature."
        />

        <CenteredText>
          <SectionTitle>The finalized UI and prototype</SectionTitle>
          <Prose>
            Taking our branding elements and original UI wireframes, our team
            built out the final screens for our prototype. The image above
            showcases screens from on-boarding and the “find and catch” ghost
            gameplay.
          </Prose>

          <ButtonLink
            href="https://projects.invisionapp.com/share/TZENGKL2J"
            target="_blank"
            rel="noreferrer"
          >
            View InVision prototype
          </ButtonLink>
        </CenteredText>
      </GridRow>
    </CaseStudyWrapper>
  </Layout>
);

export default BooBoston;
