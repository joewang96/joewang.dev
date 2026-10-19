import React from 'react';
import styled from 'styled-components';
import H2 from '../elements/H2';
import P from '../elements/P';
import { COLORS, SIZES, PATHS } from '../tokens';
import { Link } from 'gatsby';

import * as workflowPlanImg from '../images/plan-mode/PlanModeHero.png';
import * as runAgentImg from '../images/run-agent/RunAgent_BlankConfig.png';
import * as triggerImg from '../images/triggers/googlesheets-managedata-1.png';

const Wrapper = styled.div``;

const ProjectImage = styled.div`
  width: 160px;
  height: 120px;
  border-radius: 4px;

  background-size: ${({ imageSize }) => (!!imageSize ? imageSize : 'cover')};
  background-position: center;
  background-repeat: no-repeat;
  background-image: url('${({ imageSrc }) => imageSrc}');
  background-color: ${COLORS.IMG_BG};

  @media (max-width: ${SIZES.BREAK_XS}) {
    width: 100%;
    height: 200px;
  }
`;

const ProjectTitle = styled(P)`
  margin: 0;
  margin-bottom: 8px;

  font-weight: 500;
  color: ${COLORS.TEXT};
`;

const ProjectDescription = styled(P)`
  margin: 0;
  font-size: 16px;

  @media (max-width: ${SIZES.BREAK_SM}) {
    font-size: 14px;
  }
`;

const ProjectInfo = styled.div`
  flex: 1;
`;

const ProjectTile = styled(Link)`
  text-decoration: none;

  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 20px;

  padding: 12px 16px;
  border: 1px solid ${COLORS.CONTAINER_BORDER_SUBTLE};
  border-radius: 8px;
  transition: all 200ms ease-in-out;

  @media (max-width: ${SIZES.BREAK_XS}) {
    flex-direction: column-reverse;
    gap: 8px;

    align-items: initial;
  }

  &:hover {
    border-color: ${COLORS.BORDER_HOVER} !important;
    background-color: #212121;
  }
`;

const ProjectList = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 24px;

  @media (max-width: ${SIZES.BREAK_SM}) {
    gap: 18px;
  }
`;

class ProjectItem extends React.Component {
  render() {
    const {
      title,
      subtitle,
      imageSrc,
      imageSize,
      imageAlt,
      ...rest
    } = this.props;

    return (
      <ProjectTile {...rest}>
        <ProjectImage
          imageSrc={imageSrc}
          imageSize={imageSize}
          imageAlt={imageAlt}
        />
        <ProjectInfo>
          <ProjectTitle>{title}</ProjectTitle>
          <ProjectDescription>{subtitle}</ProjectDescription>
        </ProjectInfo>
      </ProjectTile>
    );
  }
}

const ProjectsSection = () => (
  <Wrapper>
    <H2>Selected work</H2>
    <ProjectList>
      <ProjectItem
        title="Building automations conversationally"
        subtitle="Describe a process you'd like to automate in plain language, and let AI work with you to build it."
        imageSrc={workflowPlanImg}
        imageAlt=""
        to={PATHS.WORKFLOW_PLAN}
      />
      <ProjectItem
        title="Run agent workflow action"
        subtitle="Invoke an agent from within a deterministic automation and pass data between the two systems."
        imageSrc={runAgentImg}
        imageAlt=""
        to={PATHS.RUN_AGENT}
      />
      <ProjectItem
        title="Third party triggers for HubSpot workflows"
        subtitle="Extending HubSpot Workflows to be able to automate a task off of data from anywhere."
        imageSrc={triggerImg}
        imageAlt=""
        to={PATHS.THIRD_PARTY_TRIGGER}
      />
    </ProjectList>
  </Wrapper>
);

export default ProjectsSection;
