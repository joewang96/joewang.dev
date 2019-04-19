import React from 'react';
import styled from 'styled-components';

import { COLORS, SIZES } from '../../tokens';
import H2 from '../../elements/H2';
import P from '../../elements/P';

const Wrapper = styled.div`
  padding: 60px ${SIZES.PADDING_DESKTOP};

  @media (max-width: ${SIZES.BREAK_LG}) {
    padding: 30px ${SIZES.PADDING_TABLET};
  }

  @media (max-width: ${SIZES.BREAK_SM}) {
    padding: 15px ${SIZES.PADDING_MOBILE};
  }
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-width: 895px;
  margin: auto;
`;

const Title = styled(H2)`
  text-align: center;
  margin-bottom: 60px;
  @media (max-width: ${SIZES.BREAK_SM}) {
    text-align: left;
  }
`;

const Subtitle = styled(P)`
  font-style: italic;
  font-size: 24px;
  margin-bottom: 60px;
  max-width: 589px;
  color: ${COLORS.GREY};
`;

const CaseStudyWrapper = ({ children, title, subtitle, ...rest }) => (
  <Wrapper>
    <Content {...rest}>
      <Title>{title}</Title>
      <Subtitle>{subtitle}</Subtitle>
      {children}
    </Content>
  </Wrapper>
);

export default CaseStudyWrapper;
