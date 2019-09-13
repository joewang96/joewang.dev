import React from 'react';
import styled from 'styled-components';

import H2 from '../elements/H2';
import ItalicSubtitle from '../elements/ItalicSubtitle';
import { SIZES } from '../tokens';

const StyledSubtitle = styled(ItalicSubtitle)`
  margin-bottom: 0.6875rem;
  @media (max-width: ${SIZES.BREAK_SM}) {
    margin-bottom: 0.5rem;
  }
`;

const StyledTitle = styled(H2)`
  margin-bottom: 2rem;
  @media (max-width: ${SIZES.BREAK_MD}) {
    margin-bottom: 1.75rem;
  }
  @media (max-width: ${SIZES.BREAK_SM}) {
    margin-bottom: 1.5rem;
  }
`;

const TitleSubtitle = ({
  title,
  subtitle,
  Title = StyledTitle,
  Subtitle = StyledSubtitle,
}) => (
  <>
    <Subtitle>{subtitle}</Subtitle>
    <Title>{title}</Title>
  </>
);

export default TitleSubtitle;
