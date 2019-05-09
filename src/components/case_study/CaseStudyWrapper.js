import React from 'react';
import styled from 'styled-components';

import { SIZES } from '../../tokens';
import H2 from '../../elements/H2';

const Wrapper = styled.div`
  padding: 60px ${SIZES.PADDING_DESKTOP} 120px;

  @media (max-width: ${SIZES.BREAK_LG}) {
    padding: 30px ${SIZES.PADDING_TABLET} 100px;
  }

  @media (max-width: ${SIZES.BREAK_SM}) {
    padding: 15px ${SIZES.PADDING_MOBILE} 80px;
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
  margin-bottom: 80px;
  @media (max-width: ${SIZES.BREAK_SM}) {
    text-align: left;
    margin-bottom: 60px;
  }
`;

const Heading = styled.div`
  max-width: 56rem;
  margin: auto;
  margin-bottom: 7.5rem;
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
