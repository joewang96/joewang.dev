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

import * as heroImg from '../images/action-builder/CABHero.png';
import * as CAB_AddInputs from '../images/action-builder/CAB_AddInputs.png';
import * as CAB_GetStarted_Before from '../images/action-builder/CAB_GetStarted_Before.png';
import * as CAB_DevGuide from '../images/action-builder/CAB_DevGuide.png';
import * as CAB_ReviewPanel from '../images/action-builder/CAB_ReviewPanel.png';
import * as CAB_System from '../images/action-builder/CAB_System.png';
import * as CustomAction_Schema from '../images/action-builder/CustomAction_Schema.png';
import * as CAB_ClientApp_1 from '../images/action-builder/CAB_ClientApp_1.png';
import * as CAB_ClientApp_2 from '../images/action-builder/CAB_ClientApp_2.png';
import * as CAB_Skill_Review from '../images/action-builder/CAB_Skill_Review.png';
import * as CAB_LLM_Module from '../images/action-builder/CAB_LLM_Module.png';
import * as CAB_Header_Spec from '../images/action-builder/CAB_Header_Spec.png';
import * as CAB_Table from '../images/action-builder/CAB_Table.png';

const SectionWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 80px;
`;

const ActionBuilderPage = ({ location }) => (
  <Layout location={location}>
    <SEO title="Developer tooling for an automation platform" />
    <CaseStudyTopNav nextPath={`..${PATHS.WORKFLOW_PLAN}`} />
    <SectionWrapper>
      <CaseStudyHeroHero
        title="Developer tooling for an automation platform"
        company="HubSpot"
        role="Product Designer"
        timeframe="2024 - 2025"
        image={heroImg}
        bannerSlot={
          <TldrBanner>
            <P>
              I led work on HubSpot’s internal developer tool for building and
              managing custom workflow actions, serving as the sole designer
              responsible for that system.
            </P>
            <P>
              My work enabled the extension of our platform, leading to
              consistent YoY growth of action usage and allowing us to deliver
              agent skills for INBOUND 2025, ensuring the launch of Agent Studio
              included over 55 high quality skills with usage topping out at 3M
              executions within the first month of release.
            </P>
          </TldrBanner>
        }
      />

      <CaseStudySection>
        <H2>Background</H2>
        <P>
          While working on the Automation Extension team, I was the sole
          designer responsible for the “Custom Action Builder” (CAB), an
          internal tool that allowed HubSpotters to easily and quickly build and
          manage custom actions for our automation platform. These actions would
          appear in our Workflows product, and would be what HubSpot users can
          use to build their different workflows to automate their business
          processes.
        </P>
      </CaseStudySection>

      <CaseStudySection>
        <H2>How it works</H2>
        <P>
          Custom actions are defined as a JSON object, controlling fields like
          name, what inputs to render, and what outputs to expect. Backend
          engineers would set up an API service endpoint that would power the
          execution of the action and that’ll get set on the action definition.
        </P>
        <P>
          This allows for much faster development of new actions, as it doesn’t
          require engineers writing FE code for our codebase that they aren’t
          familiar with and allows us to build reusable functionality into the
          action platform. I also designed it so you could preview your action
          for a given portal from within the tool, shortening the dev and test
          cycle for creating the action UI.
        </P>
        <CaseStudyImage src={CAB_AddInputs} />
      </CaseStudySection>

      <CaseStudySection>
        <H2>Designing a review and publish lifecycle</H2>
        <P>
          When I first became owner of the CAB in 2024, the initial overview
          page looked a little like the image shown below. It outlined the
          general steps to take to be able to publish your action, but was very
          sparse on actual details that would both help the user understand what
          they need to do and what the process even looks like.
        </P>

        <CaseStudyImage src={CAB_GetStarted_Before} />

        <P>
          To make this tool easier to use, with the hope of increasing usage to
          get more product teams developing custom actions for Workflows, I
          redesigned this page and the general process of going from a brand new
          action to one that’s live in the product.
        </P>

        <P>
          I expanded the overview page to a full-fledged development guide,
          keeping track of what steps the user has left to build out their
          action, and surfacing relevant documentation alongside it to help
          users answer questions on their own without needing to ask my team
          over Slack.
        </P>

        <CaseStudyImage src={CAB_DevGuide} />

        <P>
          In addition to making the tool easier to use, I had another goal I
          wanted to design for: help users create higher quality actions. To do
          this, I wanted to introduce different levels to our validation system.
          In addition to true errors, I designed a way to surface warnings and
          suggestions to the user to help them consider improvements to their
          action.
        </P>

        <P>
          We wanted to keep our platform customizable, which is why we weren’t
          able to be more strict with our validation rules. This served as a
          good middle ground between ensuring any team can easily build a custom
          action without going off platform, while striving to improve action
          quality.
        </P>

        <CaseStudyImage src={CAB_ReviewPanel} />
      </CaseStudySection>

      <CaseStudySection>
        <H2>Supporting a new platform use case</H2>

        <P>
          During 2025 the needs of the automation platform shifted; HubSpot was
          planning to launch Agent Studio in a few months as part of their big
          INBOUND release and the Agents team needed a way to quickly develop a
          suite of skills for the custom agents in Agent Studio.
        </P>

        <P>
          Workflow actions were very similar to an agent skill, just missing
          some additional fields like metadata that gives agents an
          understanding of how and when to use them. In order to accelerate
          timelines, the group leads for Automation and Agents decided we’d use
          the automation platform to power these skills.
        </P>

        <P>
          For my team, this served as a constraint to work within; if agent
          skills were to become part of our platform, I needed to ensure that
          our system and the Custom Action Builder were able to handle the
          creation and management of skills as well as ensuring it remains clear
          how they relate to custom actions.
        </P>
      </CaseStudySection>

      <CaseStudySection>
        <H2>Designing for platform extensibility</H2>

        <P>
          Starting off, I began thinking of how we could better design our
          platform to be more extensible without needing to have all data live
          on our action definition. Agent skills had some preliminary work
          already done, and to accommodate the timelines we didn’t want to have
          to rebuild all of that onto our platform if we didn’t need to.
        </P>

        <P>
          I created a system diagram of the different fields and decisions that
          go into our current platform, what are core settings versus what are
          tied to source and client app settings, and how we could have a
          tighter connection to other internal systems to create a more powerful
          system at scale.
        </P>

        <CaseStudyImage src={CAB_System} />

        <P>
          Using this diagram, I began pitching this idea to my development team
          of how we could make our system more flexible while also making it
          easier to maintain, as an unwieldy system would be both hard to design
          for and to build onto.
        </P>

        <P>
          The result of this was a plan of action for how we’d be able to fold
          agent skills into our automation platform and the CAB tool. Rather
          than introducing a brand new concept, we wanted skills to be just a
          type of action you can create. This would make it simpler to
          understand for existing users, as well as give a way to reuse existing
          actions as skills or eventually have skills be used as workflow
          actions.
        </P>
      </CaseStudySection>

      <CaseStudySection>
        <H2>Expanding the custom action definition</H2>

        <P>
          After having a high level framework for what we’d need the platform to
          handle, I shifted focus to the details of what we’d need our current
          custom action definition to include in order to support agent tools.
        </P>

        <P>
          The current custom action definition was already fairly robust, having
          fields to define team ownership of actions, control user access, and
          define the input/output data schema. However, it also included fields
          that were very much tied to the assumption that these would be used in
          the Workflows product, such as category, card content, and workflow
          object type support.
        </P>

        <P>
          To account for the difference in fields needed based on these multiple
          use cases, the team and I decided to introduce a “client app” setting,
          denoting which systems the action/tool would be available for, and
          restructured the custom action definition to make those dependent on
          the respective client app, rather than be baseline required for all
          custom actions.
        </P>

        <CaseStudyImage src={CustomAction_Schema} />

        <P>
          This led me to rework various views across the Custom Action Builder
          UI to better align to that new schema. Given the various client app
          dependent fields spanned many different purposes, from user facing
          content to functional metadata, I introduced a new view to house this
          setting, giving a home base to manage all dependent fields.
        </P>

        <CaseStudyImage src={CAB_ClientApp_1} />

        <P>
          In addition to better organization of related fields, this also had
          the benefit of making it easier to expand an action to multiple client
          apps after initial creation. Meaning if an action started out as just
          being usable in Workflows, a user would be able to easily see what
          else they’d need to set up to enable it for use as a tool in Agent
          Studio without needing to navigate across various views.
        </P>

        <CaseStudyImage src={CAB_ClientApp_2} />
      </CaseStudySection>

      <CaseStudySection>
        <H2>Finishing touches</H2>

        <P>
          With the main complexity of unifying the action definition handled by
          client apps, I worked on final touches to polish up the experience of
          skill creation and clean up some UX debt in the tool.
        </P>

        <P>
          Skills have additional metadata that gives more context to the agent
          that uses them what they do and when to use them, but existing fields
          such as the name and user-facing description were things that were
          also passed as additional context as well.
        </P>

        <P>
          To ensure skills were built in a way to optimize for how agents would
          use them, I added additional rules into our validation system to check
          those settings and suggest improvements where it detected possible
          issues for an agent. This change already began to show the benefit of
          our extensible platform as there was very little work needed to get
          this set up since we had already designed and built the system for
          custom actions previously.
        </P>

        <CaseStudyImage src={CAB_Skill_Review} />

        <P>
          Some of the skills that were created would call an LLM module to power
          the execution. This was managed in another developer tool and was
          complex enough to make sense remaining separate from our builder. To
          ensure we’d be able to provide our teammates with the most context for
          what their skill was doing, I pulled in some of the most pertinent
          information from that system to display as a preview in CAB.
        </P>

        <CaseStudyImage src={CAB_LLM_Module} />

        <P>
          With the introduction of new metadata on the action definition we had
          to update how the action was displayed. I introduced a new way of
          showing those fields in the header section to ensure they were given
          prominence and remained easy to read.
        </P>

        <CaseStudyImage src={CAB_Header_Spec} />

        <P>
          Lastly I brought those changes into the primary listing table of all
          actions and skills built in the Custom Action Builder.
        </P>

        <CaseStudyImage src={CAB_Table} />
      </CaseStudySection>

      <CaseStudySection>
        <H2>Impact</H2>

        <P>
          The work done to incorporate agent skills into our automation platform
          led to us being able to deliver a wide suite of agent skills at
          HubSpot’s INBOUND launch. We ended up with{' '}
          <strong>55 high quality skills being available</strong>, and driving
          high usage of agents with the{' '}
          <strong>
            top skill being executed over 3 million times within the first month
            of launch
          </strong>
          .
        </P>

        <P>
          The work I led for improving our Custom Action Builder resulted in
          consistent growth in the amount of custom actions offered and in turn
          increased usage of workflow features. From 2024 to the start of 2026
          we saw{' '}
          <strong>
            64% YoY growth in action executions across 154k+ active portals
            utilizing those actions
          </strong>
          .
        </P>
      </CaseStudySection>
    </SectionWrapper>
  </Layout>
);

export default ActionBuilderPage;
