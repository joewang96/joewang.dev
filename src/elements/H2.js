import styled from 'styled-components';

import { COLORS, SIZES, FONTS } from '../tokens';

const H1 = styled.h2`
  font-family: ${FONTS.SERIF};
  font-size: 2.75rem;
  font-weight: normal;
  line-height: 1.4166;
  color: ${COLORS.BLUE};

  @media (max-width: ${SIZES.BREAK_LG}) {
    font-size: 2.5rem;
  }
  @media (max-width: ${SIZES.BREAK_SM}) {
    font-size: 2rem;
  }
`;

export default H1;
