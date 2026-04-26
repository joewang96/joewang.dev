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

  position: relative;
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

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border-radius: 8px; /* Matches the container */
    pointer-events: none; /* Allows clicks to pass through to the content inside */

    /* SVG background definition */
    background-image: url("data:image/svg+xml,%3csvg width='100%25' height='100%25' xmlns='http://www.w3.org/2000/svg'%3e%3crect width='100%25' height='100%25' fill='none' rx='8' ry='8' stroke='%233E3E3E' stroke-width='1' stroke-dasharray='4%2c 4' stroke-dashoffset='0' stroke-linecap='square' vector-effect='non-scaling-stroke'/%3e%3c/svg%3e");
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
