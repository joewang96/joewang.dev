import styled from 'styled-components';

import { COLORS, SIZES, FONTS } from '../tokens';

const H1 = styled.h1`
  font-family: ${FONTS.SERIF};
  font-size: 3rem;
  font-weight: normal;
  line-height: 1.4166;
  color: ${COLORS.BLUE};

  @media (max-width: ${SIZES.BREAK_LG}) {
    font-size: 2.75rem;
  }
  @media (max-width: ${SIZES.BREAK_MD}) {
    font-size: 2.35rem;
  }
  @media (max-width: ${SIZES.BREAK_SM}) {
    font-size: 2.25rem;
  }
`;

export default H1;
