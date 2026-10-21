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

import * as heroImg from '../images/plan-mode/PlanModeHero.png';
import * as planCardImg from '../images/plan-mode/planmode-3.png';
import * as agentHubOverview from '../images/plan-mode/planmode-1.png';
import * as planFocusMode from '../images/plan-mode/planmode-2.png';
import * as planCardFramework from '../images/plan-mode/plan-card-framework-stacked.png';
import * as exampelScenarios from '../images/plan-mode/PlanCard_ExampleScenarios.png';
import * as planFollowUp from '../images/plan-mode/planmode-followup.png';
import * as interactiveDrag from '../images/plan-mode/interactivemode-drag.png';
import * as interactiveContext from '../images/plan-mode/interactivemode-selection-context.png';
import * as interactiveLoaderNode from '../images/plan-mode/interactivemode-loader-node.png';
import * as interactiveCreated from '../images/plan-mode/interactivemode-create.png';

const SectionWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 80px;
`;

const WorkflowPlanModePage = ({ location }) => (
  <Layout location={location}>
    <SEO title="Joseph Wang" hideTitle={true} />
    <CaseStudyTopNav nextPath={`..${PATHS.RUN_AGENT}`} />
    <SectionWrapper>
      <CaseStudyHeroHero
        title="Conversational building of agentic automation"
        company="HubSpot"
        role="Senior Product Designer"
        timeframe="Q3 2026"
        image={heroImg}
        bannerSlot={
          <TldrBanner>
            <P>
              I led design for a conversational building experience to help
              users create and manage their automations with AI, aimed at making
              it easier for users to build automations in general, while
              maintaining trust in this new technology.
            </P>
            <P>
              This led to an increase of AI adoption, going from 45% of active
              portals using AI to build their workflow to 75% after this change,
              leading to 70% of all new automations being created with AI. This
              was all done while maintaining an average CSAT of 73%.
            </P>
          </TldrBanner>
        }
      />

      <CaseStudySection>
        <H2>Background</H2>
        <P>
          In 2026 the Automation Product Group at HubSpot was reimagining what
          automation could look like inside of HubSpot. With the rise of AI and
          agents we had an opportunity to expand what automation meant within
          the product, encompassing both deterministic workflows and
          non-deterministic agents.
        </P>
        <P>
          To support this, the team worked on Agent Hub, a brand new product
          surface for customers to manage their fleet of automation within the
          product as well as a new agentic automation builder to better
          integrate some of the new capabilities.
        </P>
      </CaseStudySection>

      <CaseStudySection>
        <H2>Problem</H2>
        <P>
          One thing the team learned from our history with building the
          Workflows tool was that automation takes some time for customers to
          wrap their head around. While it led to great retention with our
          customers, that initial activation was a crucial step that we’ve
          worked to make easier. 
        </P>
        <P>
          In designing our new agentic workflow builder for the Agent Hub
          release, I had two main problems I wanted to solve for:  
        </P>
        <P>
          <ol>
            <li>
              How could we reduce the time it takes for customers to build out
              and publish their automation, thus increasing activation?
            </li>
            <li>
              With Agent Hub bridging traditional workflows and AI agents, users
              faced a new dilemma: should this process be an automated rule, or
              an autonomous agent? We needed a way to ensure we don’t add more
              complexity and get the user to the right thing.
            </li>
          </ol>
        </P>
      </CaseStudySection>

      <CaseStudySection>
        <H2>Planning the automation</H2>
        <P>
          To solve those problems, I started with a vision of customers being
          able to get started from natural language, stating in plain language
          what they wanted to build and end up with a fully functional
          automation tailor made for their business.
        </P>

        <P>
          Whether the process they want to automate is best suited for an agent
          or a standard workflow, we’d make sure HubSpot does the heavy lifting
          to identify what makes the most sense to build.
        </P>

        <CaseStudyImage src={agentHubOverview} />

        <P>
          The solution I went with was to have contextual entry points where
          users could interact with HubSpot’s AI Assistant, Breeze, from the
          Agent Hub workspace.
        </P>

        <P>
          The user would be able to describe what they wanted to automate,
          without any prior knowledge of what makes a workflow different from an
          agent, and we’d launch a focused conversation to gather any additional
          information necessary before going forward with the building step.
        </P>

        <CaseStudyImage src={planFocusMode} />

        <P>
          This initial conversation to gather info could easily get out of hand,
          and I wanted to make sure we’d be able to balance completeness in
          understanding the process the user wants to automate and speed to
          deliver something of value to the user.
        </P>

        <P>
          I ended up writing the skill to codify these instructions to Breeze,
          ensuring it would ask tailored follow-up questions based on the
          information the user has provided, and handing off to the various
          automation generation tools once we had reached a certain threshold of
          confidence of what should be built for the user.
        </P>
      </CaseStudySection>

      <CaseStudySection>
        <H2>Designing for trust</H2>
        <P>
          One thing I had strong conviction for is that we didn’t want Breeze to
          just go off and build whatever the user said at face value. Past
          customer feedback has shown that a wide segment of users don’t feel
          completely confident in their understanding of automation and are
          looking for a thought partner to work with to help iron out their
          ideas, rather than a one-shot automation generator.
        </P>
        <P>
          My idea was to implement a planning phase for Breeze, where the user
          can state the end goal for what they want to achieve and Breeze would
          be able to dynamically follow-up to collect any missing information or
          dig deeper into things that the user didn’t provide enough clarity on.
        </P>
        <P>
          Once Breeze was confident it had enough information, I wanted to give
          the user a moment to review the plan before anything was created.
          Looking at emerging patterns in this space, I designed a preview card
          to highlight the core pieces to the automation.
        </P>
        <P>The goal of the preview card was to accomplish the following:</P>

        <P>
          <ol>
            <li>
              Ensure Breeze didn’t hallucinate anything, as that is a risk with
              LLMs.
            </li>
            <li>
              Allow the user to make refinements before anything is built. There
              is much lower risk of the user abandoning the flow if they have a
              chance to make updates here rather than have to start completely
              over once something is built.
            </li>
            <li>
              Build trust with the user by clearly stating what Breeze would and
              wouldn’t do.
            </li>
          </ol>
        </P>

        <CaseStudyImage src={planCardImg} />

        <P>
          To ensure we conveyed the right information in the plan card, I
          created a framework for what information to present and how it should
          be organized, making note to clearly highlight what the AI was doing
          for the user and what they’d still have control over.
        </P>

        <CaseStudyImage src={planCardFramework} />

        <P>
          I gave this framework as well as example scenarios, consisting of a
          chat conversation that led to a specific plan card, to my engineering
          team to use to build the skill Breeze would use to generate this plan
          card UI.
        </P>

        <P>
          The example scenarios were very useful in helping establish the limits
          of what we want to show on the plan card, for both ends of the
          extremes for how complex an automation could be.
        </P>

        <CaseStudyImage src={exampelScenarios} />

        <P>
          This trust building step was something I felt was very important to
          the success of this solution. While a large number of customers in our
          beta were very experienced with agents and similar AI generation
          tools, this is still a new technology that our greater customer base
          is still adopting. Being able to trust this process would make it more
          likely for the user to use this feature again and adopt more of our AI
          products within HubSpot.
        </P>
      </CaseStudySection>

      <CaseStudySection>
        <H2>Bringing the customer along the building process</H2>
        <P>
          I felt it was important we didn’t abandon the user once we built that
          first version of the automation for them. I knew testing is an
          important piece both to users trusting what Breeze built as well as
          ensuring they accounted for all possible scenarios they’d expect, so I
          wanted to design an experience that allows for that continual
          refinement.
        </P>
        <P>
          To account for this, I brought the user directly into the editor
          canvas with the conversation thread still active while their
          automation was being built in front of them. This was to help the user
          orient themselves in the new builder, being able to identify where
          their conversation left off and to expect to be able to continue
          working with Breeze in this new space.
        </P>

        <CaseStudyImage src={interactiveDrag} />

        <P>
          Once Breeze was done and the automation was built out for them, we
          suggested additional actions the user could take. We offered a nudge
          for the user to test their automation, giving them a chance to check
          our work and build trust with Breeze, as well as an option to publish
          their automation if everything looked (for the more simple
          automations).
        </P>

        <CaseStudyImage src={planFollowUp} />

        <P>
          The user would be able to still do all of these things while in the
          canvas on their own, but by surfacing these quick actions within the
          Breeze conversation UI we helped guide the user to their desired end
          result of an active automation as well as helped them discover they
          could continue to use Breeze to refine their automation, rather than
          it just being an up front planning experience.  
        </P>
      </CaseStudySection>

      <CaseStudySection>
        <H2>Canvas interactions</H2>
        <P>
          As a final step to polish this experience, I designed some new
          interactions within the workflow canvas to aid in the utilization of
          Breeze and conversational building.
        </P>
        <P>
          Specificity is something that can be challenging in conversational UIs
          — users usually struggle with spatial reference ("Move that action
          after the other one"), especially when a workflow features multiple
          instances of the same action. Users often need to type a lot more to
          ensure the AI has enough information to know what you are referring
          to.
        </P>
        <P>
          To simplify this I wanted the drag selection on the canvas to be
          passed to Breeze as additional context with the message, providing
          more accuracy with what the user wants to modify with less work on
          their part.
        </P>

        <CaseStudyImage src={interactiveDrag} />

        <P>
          When a user would make a selection, we’d signify in the Breeze sidebar
          that their selection was being passed alongside their message, denoted
          through the top reference block added to the text box.
        </P>
        <P>
          This would free up how much text the user would have to write in order
          to accurately describe what they wanted to do with the selection.
        </P>

        <CaseStudyImage src={interactiveContext} />

        <P>
          When the user sent their message over to have Breeze work on it, I had
          the canvas nodes update to an animated loading state, to help signal
          to the user that their task was being worked on.
        </P>

        <CaseStudyImage src={interactiveLoaderNode} />

        <P>
          Finally, once updates were made on the canvas, we’d have Breeze
          reiterate what it did, to help provide some clarity in case a large
          amount of the workflow was edited, or if the user missed the loading
          state.
        </P>

        <P>
          To reinforce this conversational building pattern, I designed for
          Breeze to close its message by letting the user know it could assist
          with any other updates or revisions they’d want to make.
        </P>

        <CaseStudyImage src={interactiveCreated} />
      </CaseStudySection>

      <CaseStudySection>
        <H2>Impact</H2>
        <P>
          The end result was a notable shift in how customers were building
          their new automations. Prior to this work we saw around 45% of active
          portals using Breeze to build their automations. After, this increased
          to{' '}
          <strong>
            75% of active portals using Breeze to build their automation
          </strong>
          , with around{' '}
          <strong>70% of all new automations being built with Breeze</strong>.
        </P>
        <P>
          Qualitatively, I heard customers say how easier this made it to build
          workflows and how much time it saved them. Our CSAT data backed up
          these responses we saw, with our workflow generation tools in Breeze
          maintaining a <strong>73% CSAT on average</strong>, being some of the
          highest rated Breeze tools across the product.
        </P>
      </CaseStudySection>
    </SectionWrapper>
  </Layout>
);

export default WorkflowPlanModePage;
