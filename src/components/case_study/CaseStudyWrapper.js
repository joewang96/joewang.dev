import React from 'react';
import styled from 'styled-components';

import { SIZES } from '../../tokens';
import H2 from '../../elements/H2';

const Wrapper = styled.div`
  padding: 100px ${SIZES.PADDING_DESKTOP} 7.5rem;

  @media (max-width: ${SIZES.BREAK_LG}) {
    padding: 80px ${SIZES.PADDING_TABLET} 6.25rem;
  }

  @media (max-width: ${SIZES.BREAK_MD}) {
    padding: 60px ${SIZES.PADDING_TABLET} 6.25rem;
  }

  @media (max-width: ${SIZES.BREAK_SM}) {
    padding: 60px ${SIZES.PADDING_MOBILE} 6.25rem;
  }
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

const Title = styled(H2)`
  text-align: center;
  margin-bottom: 5rem;
  @media (max-width: ${SIZES.BREAK_SM}) {
    text-align: left;
    margin-bottom: ${SIZES.CASE_STUDY_SECTION_SPACING};
  }
`;

const Heading = styled.div`
  max-width: 56rem;
  margin: auto;
  margin-bottom: 7.5rem;
  @media (max-width: ${SIZES.BREAK_MD}) {
    margin-bottom: ${SIZES.CASE_STUDY_SECTION_SPACING};
  }
`;

const ImagePreview = styled.img`
  width: 100%;
  margin-bottom: 0;
`;

const CaseStudyWrapper = ({ children, title, subtitle, img, ...rest }) => (
  <Wrapper>
    <Content {...rest}>
      <Heading>
        <Title>{title}</Title>
        {img && <ImagePreview alt={img.alt} src={img.src} />}
      </Heading>
      {children}
    </Content>
  </Wrapper>
);

export default CaseStudyWrapper;
