import React from 'react';
import { CraneTowerIcon } from '@phosphor-icons/react';
import styled from 'styled-components';
import H2 from '../elements/H2';
import P from '../elements/P';
import { COLORS, FONTS, FONT_SIZE } from '../tokens';

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
    font-size: ${FONT_SIZE.SM};
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

const ProjectsSection = () => (
  <Wrapper>
    <H2>Projects</H2>
    <PlaceholderBlock>
      <CraneIcon size={24} />
      <span>
        <P>Under construction.</P>
        <P>Check back later!</P>
      </span>
    </PlaceholderBlock>
  </Wrapper>
);

export default ProjectsSection;
