import 'react';
import styled from 'styled-components';

import { COLORS, SIZES, FONTS } from '../tokens';

const P = styled.p`
  font-family: ${FONTS.SANS};
  font-size: 1.25rem;
  line-height: 1.8;
  color: ${COLORS.OFF_BLACK};
  @media (max-width: ${SIZES.BREAK_SM}) {
    font-size: 1.125rem;
  }

  & + & {
    margin-top: 1.25rem;

    @media (max-width: ${SIZES.BREAK_SM}) {
      font-size: 1.125rem;
    }
  }
`;

export default P;
