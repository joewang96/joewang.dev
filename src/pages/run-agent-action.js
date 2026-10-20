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

import * as heroImg from '../images/run-agent/RunAgentHero.png';
import * as pocImg1 from '../images/run-agent/runagent_poc_1.png';
import * as pocImg2 from '../images/run-agent/runagent_poc_2.png';
import * as pocImg3 from '../images/run-agent/runagent_poc_3.png';
import * as runAgentSelect from '../images/run-agent/RunAgent_AgentSelect.png';
import * as runAgentConfig from '../images/run-agent/RunAgent_BlankConfig.png';
import * as runAgentTwoOutputs from '../images/run-agent/RunAgent_Initial_TwoOutputs.png';
import * as runAgentFinal1 from '../images/run-agent/RunAgent_OutputTypes.png';
import * as runAgentFinal2 from '../images/run-agent/RunAgent_BlankConfig.png';
import * as runAgentFinal3 from '../images/run-agent/RunAgent_GeneratingOutputs.png';
import * as runAgentFinal4 from '../images/run-agent/RunAgent_OutputsGenerated.png';
import * as runAgentFullResponse from '../images/run-agent/RunAgent_FullResponse_Tooltip.png';
import * as runAgentOutputsConfig from '../images/run-agent/RunAgent_EditOutputs_Popover.png';

const SectionWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 80px;
`;

const RunAgentPage = ({ location }) => (
  <Layout location={location}>
    <SEO title="Joseph Wang" hideTitle={true} />
    <CaseStudyTopNav nextPath={`..${PATHS.THIRD_PARTY_TRIGGER}`} />
    <SectionWrapper>
      <CaseStudyHeroHero
        title="Run agent workflow action"
        company="HubSpot"
        role="Product Designer"
        timeframe="Q4 2025"
        image={heroImg}
        bannerSlot={
          <TldrBanner>
            <P>
              I led design for agent orchestration within HubSpot workflows,
              utilizing rapid customer feedback to quickly iterate on an initial
              MVP alongside my engineering team and shape how data would pass
              between agents and the workflow.
            </P>
            <P>
              My changes resonated with customers, leading to steady growth in
              agent usage in the months following the update and paving the way
              for 10% of new workflows using agents during the launch of our new
              agentic automation builder.
            </P>
          </TldrBanner>
        }
      />

      <CaseStudySection>
        <H2>Background</H2>
        <P>
          In September 2025, HubSpot launched Agent Studio into public beta
          during their annual INBOUND conference. This release would allow
          customers to create their own custom agents within HubSpot, utilizing
          context from the CRM to do work for them.
        </P>
      </CaseStudySection>

      <CaseStudySection>
        <H2>Problem</H2>
        <P>
          Adoption and usage of custom agents was fairly low after the public
          beta release. Customers were able to run their agents manually and
          based on some simple triggers, but lacked flexibility with how these
          agents are run automatically and how agents can be orchestrated
          together.
        </P>
        <P>
          My team’s plan to address this was to build into HubSpot’s Workflows
          product as the way to automate and orchestrate agents. However, there
          was tension with how workflows and agents function: workflows relied
          on strict, predictable data schemas where each step is set by the user
          while agents are non-deterministic and can provide different data
          across each run.
        </P>
        <P>
          Since workflows relied on known outputs for their actions to properly
          pass data between each step, we needed a way to convert an agent’s
          non-deterministic response into something that’d be usable by standard
          non-deterministic workflow actions.
        </P>
      </CaseStudySection>

      <CaseStudySection>
        <H2>Initial proof of concept</H2>
        <P>
          Before joining this project, the engineering team had spun up an
          initial proof of concept (POC) version of the action to start working
          through some of the technical pieces to integrate our custom agents
          and workflows platforms.
        </P>

        <CaseStudyImage src={pocImg1} />

        <P>
          Since agents were a new technology to the HubSpot product at the time,
          I decided to conduct user interviews with our customers to learn more
          about their mental models and expectations for agentic features within
          HubSpot.
        </P>

        <P>
          Knowing the feedback we uncover during said research will help get
          buy-in from the rest of the team for aspects that might require a more
          involved change to how the code was currently architected, I decided
          to start a user testing plan with this engineering POC, and quickly
          iterate as we gain insights.
        </P>

        <CaseStudyImage src={pocImg2} />

        <CaseStudyImage src={pocImg3} />
      </CaseStudySection>

      <CaseStudySection>
        <H2>Research approach</H2>

        <P>
          Going into the user research sessions, I had three main objectives I
          wanted to focus on:
        </P>

        <P>
          <ol>
            <li>
              Gather initial feedback on our POC solution to identify top areas
              of confusion, since agents aren’t something most customers would
              have a lot of familiarity with
            </li>
            <li>
              Understand how customers would ideally like to use agents to
              ensure we are meeting real customer needs
            </li>
            <li>
              Learn how customers view the relationship between traditional
              workflows and custom agents to ensure customers can easily
              navigate between and use both products effectively
            </li>
          </ol>
        </P>

        <P>
          I was able to recruit 7 customers for my research, consisting of 5
          customers and 2 HubSpot partners. All participants had created at
          least 1 custom agent, but had different usage ranges of workflows. I
          also recruited for different levels of familiarity with AI agents,
          ranging from HubSpot being their introduction to agents to having
          built out agents in separate products like Claude and ChatGPT.
        </P>

        <P>
          The interviews consisted of two parts: a semi-structured interview and
          unboxing experience to get initial reactions and feedback using the
          action. Because the purpose of this research was to help bring in
          customer perspective early to shape the direction we go with this
          feature, I didn’t think a full on usability test was the best fit for
          my team’s needs.
        </P>
      </CaseStudySection>

      <CaseStudySection>
        <H2>Research takeaways</H2>
        <P>
          After the first round of interviewing customers two main takeaways
          emerged:
        </P>

        <P>
          <ol>
            <li>
              We validated our hypothesis that Workflows should be where
              customers go to orchestrate their agents. 
            </li>
            <li>
              Understanding how an agent’s instructions relate to the data
              that’s outputted and accessible by the Run agent action was the
              most difficult part to grasp.
            </li>
          </ol>
        </P>

        <P>
          Customers told us the workflow canvas would give them flexibility to
          reuse agents in different scenarios, such as being run off of
          different triggers, and gave them power to pass data between agents,
          like you would any other action. Being able to make use of customer’s
          familiarity with the Workflows tool for agent orchestration would
          ultimately give this feature a wider reach and make use of Workflows
          high adoption.
        </P>

        <P>
          We also uncovered two main buckets of agent jobs: content generation
          and data manipulation. These agent archetypes were a common link
          between what our customers were trying to set up in their own portal,
          and gave me a way to simplify the action.
        </P>
      </CaseStudySection>

      <CaseStudySection>
        <H2>First iteration and validation</H2>

        <P>
          Based on the research I went ahead and made a round of revisions to
          the Run agent action. I cleaned up the UI of the action heavily,
          standardizing agent presentation and simplifying content.
        </P>

        <CaseStudyImage src={runAgentSelect} />

        <P>
          Looking at outputs, our first POC version of the action oversimplified
          the link between what instructions are passed to the agent and how
          that affects what data it returns to the workflow.
        </P>

        <P>
          Rather than keep this behavior hidden to the customer, I decided we
          should bake in steps to the action’s setup that would help gradually
          inform the user how data is flowing between the agent and the
          workflow. I broke up the outputs into two separate sections, to better
          clarify the difference between default and custom outputs.
        </P>

        <CaseStudyImage src={runAgentTwoOutputs} />

        <P>
          While this tested better than the initial version, the Outputs section
          still proved overwhelming for our customers. Giving customers both the
          default full agent response and a way to define a custom output schema
          proved confusing, ultimately complicating the agent setup process too
          much.
        </P>
      </CaseStudySection>

      <CaseStudySection>
        <H2>Final solution</H2>
        <P>
          To address that final issue I redesigned the outputs section, having
          the user choose what they’d expect in the agent’s response: either a
          full rich text response, aimed at the content generation use case, or
          a structured format aimed at the data manipulation use case where the
          customer would want to use those different data outputs in the
          proceeding workflow actions.
        </P>

        <CaseStudyImage src={runAgentFinal1} />

        <P>
          Breaking out those two output formats allowed the user to focus on
          only what was needed for their use case. While this didn’t give as
          full flexibility, it better matched the jobs customers used custom
          agents for and made output setup a lot more focused and clear.
        </P>

        <CaseStudyImage src={runAgentFullResponse} />

        <P>
          Full rich text response would require no additional setup for the
          user, being able to use whatever text response the agent gives back by
          default. The structured data outputs required one more step to work —
          additional instructions passed to the agent at runtime to have it map
          the data it generates in its run into the correct final format.
        </P>

        <CaseStudyImage src={runAgentFinal2} />

        <P>
          This piece was important because it gave the customer flexibility in
          how their agent was used in a workflow without degrading the
          experience for manual runs, in which the rich text response was a
          better experience since the user was present to review what the agent
          did.
        </P>

        <CaseStudyImage src={runAgentFinal3} />

        <P>
          Rather than put the burden on the user to write these instructions, I
          wanted to use the context we already had at this point based on the
          agent that is being run and the rest of the steps in the workflow to
          generate a first pass at outputs for the user.
        </P>

        <CaseStudyImage src={runAgentFinal4} />

        <P>
          Finally, when editing the outputs we gave the user a way to provide
          additional instructions for what kind of data the output represents.
          This helped users have a better grasp of how the agent would know how
          to fill in the outputs correctly, and gave an opportunity for users to
          ensure higher accuracy with agent outputs.
        </P>

        <P>
          As part of generating the agent outputs, this was done for the user
          rather than having them write it out from scratch.
        </P>

        <CaseStudyImage src={runAgentOutputsConfig} />
      </CaseStudySection>

      <CaseStudySection>
        <H2>Impact</H2>
        <P>
          The result of my work on the Run custom agent action resulted in
          steady growth in customers using custom agents and laid the groundwork
          for future adoption of agentic automation features. 
        </P>
        <P>
          We saw <strong>~31,000 action executions</strong> within the first
          full month of the action entering public beta. By August 2026 we saw{' '}
          <strong>10% of active workflows</strong> were using the Run custom
          agent action.
        </P>
      </CaseStudySection>
    </SectionWrapper>
  </Layout>
);

export default RunAgentPage;
