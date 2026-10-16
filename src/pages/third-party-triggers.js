import React from 'react';
import styled from 'styled-components';

import Layout from '../components/Layout';
import SEO from '../components/Seo';

import CaseStudyHeroHero from '../components/case-study/CaseStudyHero';
import H2 from '../elements/H2';
import P from '../elements/P';
import CaseStudySection from '../components/case-study/CaseStudySection';
import CaseStudyImage from '../components/case-study/CaseStudyImage';
import TldrBanner from '../components/case-study/TldrBanner';

const SectionWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 80px;
`;

const ThirdPartyTriggerPage = ({ location }) => (
  <Layout location={location}>
    <SEO title="Joseph Wang" hideTitle={true} />
    <SectionWrapper>
      <CaseStudyHeroHero
        title="Third party triggers for HubSpot workflows"
        company="HubSpot"
        role="Senior Product Designer"
        timeframe="Q2 2025"
        bannerSlot={
          <TldrBanner>
            <P>...</P>
            <P>...</P>
          </TldrBanner>
        }
      />

      <CaseStudySection>
        <H2>Overview</H2>
        <P>
          In 2026 the Automation Product Group at HubSpot was reimagining what
          automation could look like inside of HubSpot. We were building a brand
          new agentic workflow builder, aimed at allowing HubSpot customers to
          automate any of their business processes, regardless of if their data
          lived in HubSpot or outside of it.
        </P>
        <P>
          This shift to “data-driven” automation relied on expanding our catalog
          of available triggers to support third-party sources. I worked as part
          of the Automation team to design how these third-party triggers would
          fit into our platform and how we could make the connection process for
          these integrations fast and simple.
        </P>
      </CaseStudySection>

      <CaseStudySection>
        <H2>Problem</H2>
        <P>
          Up until this point, the Workflows tool was built around automating
          the data that lives inside of HubSpot. It did a good job at letting
          customers build out automations for triggers like added to a segment,
          form submissions, or CRM property updates — all things that revolved
          around a central HubSpot object type. However, the team and I know
          many of our customers have data that lives in various third-party apps
          and tools.
        </P>
        <P>
          The problem I aimed to solve was building out a system for third-party
          or external triggers that could hook into our automation system,
          without needing to be tied to HubSpot’s data model. As part of this
          broader reimagining of the Workflows product I also set out to
          modernize the authentication experience for these third-party apps, by
          both streamlining the experience to remove friction for the user and
          to support easier switching of which account to use for said trigger.
        </P>
      </CaseStudySection>

      <CaseStudySection>
        <H2>In-context discovery</H2>
        <P>
          HubSpot has a large App Marketplace where various integrations are
          displayed to the customer that they can install in their portal. While
          that gives a central spot to view everything offered, it includes all
          available integrations, regardless of if they support specific
          workflow functionality. 
        </P>
        <P>
          For this experience I wanted to have a contextual library of available
          integration triggers that the user can easily choose from when
          deciding how to trigger their automation, regardless of whether they
          have already installed it or not.
        </P>
        <P>
          The solution I went with gave Apps it’s own tab in the trigger panel,
          breaking down integrations into two sections: Connected apps where we
          could elevate integrations they have already installed for quick
          access and a full list of all available apps that included workflow
          triggers. 
        </P>
        <CaseStudyImage imageSrc="" />
        <P>
          This made it very convenient for users to find the integration they
          wanted since this contextual app library made it possible for us to
          include apps that the user hasn’t installed yet in their trigger
          search results, rather than only showing them what they have installed
          and force them to go to a different part of the product to do that
          browsing.
        </P>
        <CaseStudyImage imageSrc="" />
      </CaseStudySection>

      <CaseStudySection>
        <H2>Quick and easy authentication</H2>
        <P>
          Once the user finds the trigger they want to use, the next step will
          be connecting their account. Connected apps in HubSpot are managed in
          their own part of the product, but for this to work how we’d ideally
          want in Workflows we’d need to be able to keep our user focused on
          their task and not bounce them around to different pages. 
        </P>
        <P>
          Before this project, it was also typical for customers to need to
          install the integration into their HubSpot portal before they can make
          use of the feature within the workflow. This had the downside of
          making it hard for a customer to plan out their workflow if they
          didn’t have full admin privileges to install new integrations for
          their entire portal — something that I saw was fairly common.
        </P>
        <P>
          The solution I went for treated the authentication account as just
          another field in the trigger setup, something that the user would be
          able to have fully visibility into which account is in use while also
          giving them flexibility to swap which account to use across their
          different workflows. 
        </P>
        <CaseStudyImage imageSrc="" />
      </CaseStudySection>

      <CaseStudySection>
        <H2>Designing the Google Sheets trigger</H2>
        <P>
          “Sheet-like apps”, such as Google Sheets or Airtable, posed an
          interesting problem where there is no predefined data schema, such as
          in most of our other workflow triggers and actions. Instead, the
          selection the user makes during trigger setup will impact what data
          outputs would be available later on in the workflow, which could even
          change if the sheet is edited later on.{' '}
        </P>
        <P>
          Due to this dynamic nature of the sheet and the derived outputs, I
          designed an experience for those types of apps to allow the user to
          better manage which range of cells to include in their trigger data,
          and be able to decide when they want to refresh and pull in new column
          data, as actually using that data downstream in the workflow would
          already require the user to come back and make edits to the workflow.{' '}
        </P>
        <CaseStudyImage imageSrc="" />
      </CaseStudySection>
      <CaseStudySection>
        <H2>Impact</H2>
        <P>
          The result of my work on the Run custom agent action resulted in
          steady growth in customers using custom agents and laid the groundwork
          for future adoption of agentic automation features. 
        </P>
        <P>
          Once we hit public beta in July 2026 we saw{' '}
          <strong>
            ~10% of all workflows created in the new builder using third-party
            triggers
          </strong>
          . We also were able to greatly increase the amount of use cases
          customers could automate by supporting{' '}
          <strong>120+ apps with third party triggers</strong>, ensuring
          customers can remain within our ecosystem rather than turn to external
          tools to solve for missing functionality
        </P>
      </CaseStudySection>
    </SectionWrapper>
  </Layout>
);

export default ThirdPartyTriggerPage;
