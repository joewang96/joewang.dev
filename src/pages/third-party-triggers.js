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
import CaseStudyTopNav from '../components/case-study/CaseStudyTopNav';
import { PATHS } from '../tokens';

import * as heroImg from '../images/triggers/TriggerHero.png';

import * as triggerAppCatalog from '../images/triggers/trigger-app-catalog.png';
import * as triggerPreAuth from '../images/triggers/trigger-oauth-config.png';
import * as triggerOauth from '../images/triggers/trigger-oauth-modal.png';

import * as sheetSelect from '../images/triggers/googlesheet-spreadsheet-select.png';
import * as sheetModal from '../images/triggers/googlesheet-spreadsheet-modal.png';
import * as triggerConfigured from '../images/triggers/googlesheets-configured.png';

import * as sheetManage1 from '../images/triggers/googlesheets-managedata-1.png';
import * as sheetManage2 from '../images/triggers/googlesheets-managedata-2.png';
import * as sheetManage3 from '../images/triggers/googlesheets-managedata-3.png';
import * as sheetManage4 from '../images/triggers/googlesheets-managedata-4.png';

const SectionWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 80px;
`;

const ThirdPartyTriggerPage = ({ location }) => (
  <Layout location={location}>
    <SEO title="Joseph Wang" hideTitle={true} />
    <CaseStudyTopNav nextPath={`..${PATHS.WORKFLOW_PLAN}`} />
    <SectionWrapper>
      <CaseStudyHeroHero
        title="Third party triggers for HubSpot workflows"
        company="HubSpot"
        role="Senior Product Designer"
        timeframe="Q2 2026"
        image={heroImg}
        bannerSlot={
          <TldrBanner>
            <P>
              I led design for how the Automation Product Group at HubSpot could
              support third-party triggers, considering different auth flows and
              how users would be able to use their data within the workflow.
            </P>
            <P>
              This led to over 120 third-party apps supporting workflow triggers
              and 10% of workflows in our new builder for Agent Hub using
              third-party triggers..
            </P>
          </TldrBanner>
        }
      />

      <CaseStudySection>
        <H2>Background</H2>
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
          around a central HubSpot object type.
        </P>
        <P>
          However, the team and I know many of our customers have data that
          lives in various third-party apps and tools, and this reliance on CRM
          object data often forces customers to use other automation tools to
          fill the gaps in what we could automate.
        </P>
        <P>
          The problem I aimed to solve was building out a system for third-party
          or external triggers that could hook into our automation system,
          without needing to be tied to HubSpot’s data model.
        </P>
        <P>
          As part of this broader reimagining of the Workflows product I also
          set out to modernize the authentication experience for these
          third-party apps, by both streamlining the experience to remove
          friction for the user and to support easier switching of which account
          to use for said trigger.
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
          have already installed it or not. That way they could naturally
          discover new functionality without having to search it out in a
          different part of the product.
        </P>
        <P>
          The solution I went with gave Apps its own tab in the trigger panel,
          breaking down integrations into two sections: Connected apps where we
          could elevate integrations they have already installed for quick
          access and a full list of all available apps that included workflow
          triggers.
        </P>

        <CaseStudyImage src={triggerAppCatalog} />

        <P>
          This made it very convenient for users to find the integration they
          wanted since this contextual app library made it possible for us to
          include apps that the user hasn’t installed yet in their trigger
          search results, rather than only showing them what they have installed
          and force them to go to a different part of the product to do that
          browsing.
        </P>
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

        <CaseStudyImage src={triggerPreAuth} />

        <P>
          The customer would be able to complete the authentication step (OAuth
          in most of our integrations) while remaining in context of the
          workflow, keeping them on track rather than introducing friction by
          having them go somewhere else to manage the account connection.
        </P>

        <CaseStudyImage src={triggerOauth} />
      </CaseStudySection>

      <CaseStudySection>
        <H2>Designing for dynamic data structures</H2>
        <P>
          “Sheet-like apps”, such as Google Sheets or Airtable, posed an
          interesting problem where there is no predefined data schema, such as
          in most of our other workflow triggers and actions.
        </P>
        <P>
          Instead, the selection the user makes during trigger setup will impact
          what data outputs would be available later on in the workflow, which
          could even change if the sheet is edited later on.{' '}
        </P>

        <CaseStudyImage src={sheetSelect} />

        <P>
          My approach to this was to use the dedicated asset picker from the
          integration to choose the main asset being selected, in this case the
          spreadsheet. This allowed us to mirror the organization the user had
          in their account to aid in findability.
        </P>

        <CaseStudyImage src={sheetModal} />

        <P>
          Once that was selected, we used progressive disclosure to have the
          user make the remaining follow-up selections as needed. In the case of
          Google Sheets this means choosing the specific Sheet to use as well as
          a way to select which row was dedicated for column headers.
        </P>

        <CaseStudyImage src={triggerConfigured} />
      </CaseStudySection>

      <CaseStudySection>
        <H2>Managing spreadsheet data over time</H2>

        <P>
          Once we had these designs in place and built out, we began testing
          with customers as part of an alpha experience, before a broader public
          beta update (which included updated designs to the editor shell).
        </P>

        <P>
          One thing I didn’t catch initially that started to emerge was how to
          best handle change management of the spreadsheet as columns are added
          to the spreadsheet. At that point, column additions to the sheet would
          immediately update the schema, and cause trigger events to fire.
        </P>

        <P>
          While this kept things up to date, it meant that the user silently
          opted in to listen to data changes from columns that the user wasn’t
          aware of when first setting up the trigger.
        </P>

        <CaseStudyImage src={sheetManage1} />

        <P>
          Due to the dynamic nature of the sheet’s data and how that affects
          derived outputs for the trigger, I designed an experience for those
          types of apps to allow the user to better manage which range of cells
          to include in their trigger data.
        </P>

        <CaseStudyImage src={sheetManage2} />

        <P>
          In this experience they’d be able to decide when they want to refresh
          and pull in new column data, as actually using that data downstream in
          the workflow would already require the user to come back and make
          edits to the workflow.
        </P>

        <CaseStudyImage src={sheetManage3} />

        <P>
          As the user made updates to their data selection, the preview would
          live update and ensure they had an accurate representation of the data
          they’d be able to use in the workflow.
        </P>

        <CaseStudyImage src={sheetManage4} />
      </CaseStudySection>

      <CaseStudySection>
        <H2>Impact</H2>
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
        <P>
          While my time at HubSpot concluded before I could pull more
          quantitative metrics, I would have compared the median time to
          complete the task between these new third party triggers and the rest
          of our triggers to identify any steps that proved difficult for our
          users and focus on improvements to that part of the flow.
        </P>
      </CaseStudySection>
    </SectionWrapper>
  </Layout>
);

export default ThirdPartyTriggerPage;
