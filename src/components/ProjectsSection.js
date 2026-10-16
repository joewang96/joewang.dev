import React from 'react';
import { CraneTowerIcon } from '@phosphor-icons/react';
import styled from 'styled-components';
import H2 from '../elements/H2';
import P from '../elements/P';
import { COLORS, FONTS, FONT_SIZE, SIZES } from '../tokens';

import { Link } from 'gatsby';

const Wrapper = styled.div``;

const CraneIcon = styled(CraneTowerIcon)`
  display: inline-block;
  color: ${COLORS.TEXT_SUBTLE};
`;

const PlaceholderBlock = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 12px;
  padding: 28px 16px;

  border: 1px solid ${COLORS.CONTAINER_BORDER_SUBTLE};
  border-radius: 8px;

  ${P} {
    font-family: ${FONTS.MONO};
    font-size: ${FONT_SIZE.XS};
    color: ${COLORS.TEXT_SUBTLE};
    text-align: center;
    line-height: 140%;
    margin-bottom: 0px;
  }

  & ${P} {
    margin-bottom: 4px;
    margin-top: 0;
  }
`;

const ProjectImage = styled.div`
  width: 140px;
  height: 100px;

  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;

  background-color: #848484;

  border-radius: 4px;
`;

const ProjectTitle = styled(P)`
  margin: 0;
  margin-bottom: 8px;

  font-weight: 600;
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

  padding: 14px 20px;
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
  constructor(props) {
    super(props);
  }

  render() {
    const { title, subtitle, imageSrc, imageAlt, ...rest } = this.props;

    return (
      <ProjectTile {...rest}>
        <ProjectImage imageSrc={imageSrc} imageAlt={imageAlt} />
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
    <H2>Case studies</H2>
    <ProjectList>
      <ProjectItem
        title="Conversational building of agentic automation"
        subtitle="Describe a process you'd like to automate in plain language, and let AI work with you to build it."
        imageSrc="https://placehold.co/600x400"
        imageAlt=""
        to="/workflow-plan-mode"
      />
      <ProjectItem
        title="Run agent workflow action"
        subtitle="Invoke an agent from within a deterministic automation and pass data between the two systems."
        imageSrc="https://placehold.co/600x400"
        imageAlt=""
        to="/run-agent-action"
      />
      <ProjectItem
        title="Third party triggers for HubSpot workflows"
        subtitle="Extending HubSpot Workflows to be able to automate a task off of data from anywhere."
        imageSrc="https://placehold.co/600x400"
        imageAlt=""
        to="/third-party-triggers"
      />
    </ProjectList>
  </Wrapper>
);

export default ProjectsSection;
