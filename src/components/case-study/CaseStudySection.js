import styled from 'styled-components';

const CaseStudySection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 32px;

  && * {
    margin: 0px;
  }

  & > p + p {
    margin: 0px;
  }
`;

export default CaseStudySection;
