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

const WorkflowPlanModePage = ({ location }) => (
  <Layout location={location}>
    <SEO title="Joseph Wang" hideTitle={true} />
    <SectionWrapper>
      <CaseStudyHeroHero
        title="Conversational building of agentic automation"
        company="HubSpot"
        role="Senior Product Designer"
        timeframe="Q3 2026"
        bannerSlot={
          <TldrBanner>
            <P>
              I designed a conversational building experience to help users
              create and manage their automations with AI, aimed at making it
              easier for users to build automations in general, while
              maintaining trust in this new technology.
            </P>
            <P>
              This led to 70% of all new automations being created with AI
              (increased from ~45% previously), while maintaining an average
              CSAT of 73%.
            </P>
          </TldrBanner>
        }
      />

      <CaseStudySection>
        <H2>Overview</H2>
        <P>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur.
        </P>
      </CaseStudySection>

      <CaseStudySection>
        <H2>Problem</H2>
        <P>
          HubSpot workflows are a very powerful tool and drive a lot of usage of
          the product, however it was known that new users take a while to fully
          learn the tool and that workflow building can take some time to go
          from idea to a published state, even for customers familiar with the
          tool. 
        </P>
        <P>
          In designing our new agentic workflow builder for the Agent Hub
          release, my team wanted to help customers get started more easily and
          increase time to activation for the business. 
        </P>
        <P>
          Additionally, from customer research with those in our beta we learned
          that they have a hard time knowing when it’s best to use a traditional
          workflow, an agent, or some combination of them. In positioning Agent
          Hub as your central spot to manage all your HubSpot automations, both
          deterministic and agentic, we knew we had to help customers end up
          with the right automation, regardless of their prior knowledge.
        </P>
      </CaseStudySection>

      <CaseStudySection>
        <H2>Solution (Plan mode entry)</H2>
        <P>
          The goal of this work was to allow customers to get started building
          their automation from natural language, starting with a simple prompt
          in plain language and ending up with a fully functional automation
          that best suits their needs. Whether the process they want to automate
          is best suited for an agent or a standard workflow, we’d make sure
          HubSpot does the heavy lifting to identify what makes the most sense
          to build.
        </P>
        <P>
          Getting started, I knew I didn’t want Breeze to just go off and build
          whatever the user said at face value. I knew customers don’t know what
          they don’t know about automation, and are looking for a thought
          partner to work with them in crafting their automation rather than a
          one-shot automation generator.  
        </P>
        <P>
          The solution I went with was to have contextual entry points where
          users could interact with Breeze from the Agent Hub workspace, without
          even needing to make the choice to build a workflow or an agent. The
          user would be able to describe what they wanted to automate, and we’d
          launch a focused conversation view to either follow-up with additional
          questions to 
        </P>

        <CaseStudyImage imageSrc="" />

        <P>
          This initial conversation to gather info could easily get out of hand,
          and I wanted to make sure we’d be able to balance completeness in
          understanding the process the user wants to automate and speed to
          deliver something of value to the user. I ended up writing the skill
          to codify these instructions to Breeze, ensuring it would ask tailored
          follow-up questions based on the information the user has provided,
          and handing off to the various automation generation tools once we had
          reached a certain threshold of confidence of what should be built for
          the user.
        </P>
      </CaseStudySection>

      <CaseStudySection>
        <H2>Solution (Plan mode card)</H2>
        <P>
          Once the user provided the necessary information and Breeze knew what
          should be built, I wanted to give the user a moment to review what
          would be built. This would accomplish two things: allowing the user to
          make refinements before anything is built to minimize the risk that
          they need to start over if they end up with something that isn’t quite
          right, and to build trust with the user of what the AI would and
          wouldn’t do.
        </P>
        <P>
          I created a framework for how the final plan of what Breeze would
          build should be shown to the end user, making note to clearly
          highlight what the AI was doing for the user and what they’d still
          have control over. I gave this framework and example scenarios to my
          engineering team to use to build the skill Breeze would use to
          generate this plan card UI.
        </P>

        <CaseStudyImage imageSrc="" />

        <P>
          This trust building step was something I felt was very important to
          the success of this solution. While a large amount of customers in our
          beta were very experienced with agents and similar AI generation
          tools, this is still a new technology that our greater customer base
          is still adopting. Being able to trust this process would make it more
          likely for the user to use this feature again and adopt more of our AI
          products within HubSpot.
        </P>
      </CaseStudySection>

      <CaseStudySection>
        <H2>Solution (Interactive Mode)</H2>
        <P>
          The final piece to this work was ensuring we don’t abandon the user
          once we build that first version of the automation for them. I knew
          testing is an important piece both to users trusting what Breeze built
          as well as ensuring they accounted for all possible scenarios they’d
          expect, so I wanted to design an experience that allows for that
          continual refinement.
        </P>
        <P>
          To solve for this, we brought the user directly into the editor canvas
          with the conversation thread still active while their automation was
          being built in front of them. This was to help the user orient
          themselves in the new builder, being able to identify where their
          conversation left off and to expect to be able to continue working
          with Breeze in this new space.
        </P>

        <CaseStudyImage imageSrc="" />

        <P>
          Once Breeze was done and the automation was built out for them, we
          suggested additional actions the user could take. We offered a nudge
          for the user to test their automation, giving them a chance to check
          our work and build trust with Breeze, as well as an option to publish
          their automation if everything looked (for the more simple
          automations). 
        </P>

        <P>
          The user would be able to still do all of these things while in the
          canvas on their own, but by surfacing these quick actions within the
          Breeze conversation UI we helped guide the user to their desired end
          result of an active automation as well as helped them discover they
          could continue to use Breeze to refine their automation, rather than
          it just being an up front planning experience. 
        </P>

        <CaseStudyImage imageSrc="" />
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
