import React from 'react';
import styled from 'styled-components';
import H2 from '../elements/H2';
import P from '../elements/P';
import { COLORS, FONTS, FONT_SIZE } from '../tokens';

const Wrapper = styled.div``;

const JobWrapper = styled.div`
  display: flex;
  flex-direction: row;
  gap: 20px;
  padding: 12px 16px;

  border-radius: 8px;
  position: relative;

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

const JobTitle = styled(P)`
  margin: 0;
  margin-bottom: 2px;

  font-weight: 500;
  color: ${COLORS.TEXT};
`;

const Company = styled(P)`
  margin: 0;
`;

const PositionContainer = styled.div`
  flex: 1;
`;

const Year = styled.span`
  display: inline-block;
  font-family: ${FONTS.MONO};
  font-size: ${FONT_SIZE.XS};
  color: ${COLORS.TEXT_SUBTLE};
  line-height: 140%;
  flex-shrink: 0;
  margin-top: 4px;
`;

const JobList = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 24px;
`;

class JobItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      mounted: false,
    };
  }

  render() {
    const { title, company, start, end } = this.props;

    return (
      <JobWrapper>
        <PositionContainer>
          <JobTitle>{title}</JobTitle>
          <Company>{company}</Company>
        </PositionContainer>
        <Year>
          {start} - {end}
        </Year>
      </JobWrapper>
    );
  }
}

const WorkSection = () => (
  <Wrapper>
    <H2>Work experience</H2>

    <JobList>
      <JobItem
        title="Senior Product Designer"
        company="HubSpot"
        start="2026"
        end="Present"
      />
      <JobItem
        title="Product Designer"
        company="HubSpot"
        start="2024"
        end="2026"
      />
      <JobItem
        title="Associate Product Designer"
        company="HubSpot"
        start="2023"
        end="2024"
      />
      <JobItem
        title="Senior Software Engineer"
        company="HubSpot"
        start="2022"
        end="2023"
      />
      <JobItem
        title="Software Engineer"
        company="HubSpot"
        start="2020"
        end="2022"
      />
    </JobList>
  </Wrapper>
);

export default WorkSection;
