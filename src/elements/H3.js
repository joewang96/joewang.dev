import 'react';
import styled from 'styled-components';

import { COLORS, SIZES } from '../tokens';

const H3 = styled.h3`
  font-family: 'Biryani', 'Cabin', 'Helvetica Neue', Helvetica, sans-serif;
  font-size: 1.5rem;
  font-weight: bold;
  line-height: 1.833;
  color: ${COLORS.BLACK};

  @media (max-width: ${SIZES.BREAK_LG}) {
    font-size: 1.25rem;
  }
  @media (max-width: ${SIZES.BREAK_SM}) {
    font-size: 1.125rem;
  }
`;

export default H3;
