import 'react';
import styled from 'styled-components';

import { COLORS, SIZES, FONTS } from '../tokens';

const H1 = styled.h1`
  font-family: ${FONTS.NOTO_SERIF};
  font-size: 3.25rem;
  font-weight: normal;
  line-height: 1.75;
  color: ${COLORS.BLACK};

  @media (max-width: ${SIZES.BREAK_LG}) {
    font-size: 2.75rem;
  }
  @media (max-width: ${SIZES.BREAK_SM}) {
    font-size: 2.25rem;
  }
`;

export default H1;
