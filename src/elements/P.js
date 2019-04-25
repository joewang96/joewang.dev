import 'react';
import styled from 'styled-components';

import { COLORS, SIZES } from '../tokens';

const P = styled.p`
  font-family: 'Noto Sans', Cabin, Helvetica Neue, Helvetica, sans-serif;
  font-size: 1.25rem;
  line-height: 1.8;
  color: ${COLORS.OFF_BLACK};
  @media (max-width: ${SIZES.BREAK_SM}) {
    font-size: 1.125rem;
  }
`;

export default P;
