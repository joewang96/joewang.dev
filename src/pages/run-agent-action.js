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

const RunAgentPage = ({ location }) => (
  <Layout location={location}>
    <SEO title="Joseph Wang" hideTitle={true} />
    <SectionWrapper>
      <CaseStudyHeroHero
        title="Run agent workflow action"
        company="HubSpot"
        role="Product Designer"
        timeframe="Q4 2025"
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
          Custom agents launched into public beta after September 2025, but
          usage of these agents was still low. Customers were able to run their
          agents manually and based on some simple triggers, but lacked
          flexibility with how these agents are run automatically and how agents
          can be orchestrated together.
        </P>
        <P>
          My team’s plan to address this was to build into HubSpot’s Workflows
          product as the way to automate and orchestrate agents. However, since
          workflows relied on expected outputs for their actions to properly
          pass data between each other we needed a way to convert an agent’s
          non-deterministic response into something that’d be usable by standard
          non-deterministic workflow actions. 
        </P>
      </CaseStudySection>

      <CaseStudySection>
        <H2>Initial approach and user research</H2>
        <P>
          Since agents were a new technology to the HubSpot product at the time,
          I decided to conduct user interviews with our customers who’ve built
          custom agents. The team and I quickly prototyped an initial proof of
          concept (POC) version of the action to get rapid feedback from
          customers in the custom agents beta. 
        </P>
        <P>
          For this first version I had to balance technical level of effort with
          UX best practices, knowing the feedback we uncover during said
          research will help get buy-in from the rest of the team for aspects
          that might require a more involved change to how the code was
          currently architected.  
        </P>

        <CaseStudyImage imageSrc="" />

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
          I was able to recruit 7 customers for my research, with a good mix of
          prior experience to agents and AI tooling in other apps. The
          interviews consisted of two parts: a semi-structured interview and
          unboxing experience to get initial reactions and feedback using the
          action. Because the purpose of this research was to help bring in
          customer perspective early to shape the direction we go with this
          feature, I didn’t think a full on usability test was the best fit for
          my team’s needs.
        </P>
      </CaseStudySection>

      <CaseStudySection>
        <H2>Research takeaways</H2>
        <P>After interviewing the 7 customers two main takeaways emerged:</P>

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
          Looking at outputs, our first POC version of the action oversimplified
          the link between what instructions are passed to the agent and how
          that affects what data it returns to the workflow. Rather than keep
          this behavior hidden to the customer, I decided we should bake in
          steps to the action’s setup that would help gradually inform the user
          how data is flowing between the agent and the workflow.
        </P>
      </CaseStudySection>

      <CaseStudySection>
        <H2>Final solution</H2>
        <P>
          Using the results of the research, I made updates to the design of the
          Run agent action with a heavy focus on the output configuration step.
          Something we uncovered during the research was two main buckets of
          agent jobs: content generation and data manipulation. 
        </P>
        <P>
          To solve for this, I designed a method for the user to choose what
          format they’d want their outputs in: either a full rich text response,
          aimed at the content generation use case, or a structured format aimed
          at the data manipulation use case where the customer would want to use
          those different data outputs in the proceeding workflow actions.
        </P>

        <CaseStudyImage imageSrc="" />

        <P>
          Full rich text response would require no additional setup for the
          user, being able to use whatever text response the agent gives back by
          default. The structured data outputs required one more step to work
          — additional instructions passed to the agent at runtime to have it
          map the data it generates in its run into the correct final format. 
        </P>

        <P>
          This piece was important because it gave the customer flexibility in
          how their agent was used in a workflow without degrading the
          experience for manual runs, in which the rich text response was a
          better experience since the user was present to review. 
        </P>

        <P>
          Rather than put the burden on the user to write these instructions, I
          wanted to use the context we already had at this point based on the
          agent that is being run and the rest of the steps in the workflow to
          generate a first pass at outputs for the user. This approach had two
          main benefits: it reduced manual work that the user would have to do
          and also served as a way to avoid a cold start problem by giving
          customers a starting point, with a path to refine as needed.
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
