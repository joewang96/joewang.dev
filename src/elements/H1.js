import styled from 'styled-components';

import { COLORS, SIZES, FONTS, FONT_SIZE } from '../tokens';

const H1 = styled.h1`
  font-family: ${FONTS.SERIF};
  font-size: ${FONT_SIZE.TITLE};
  font-weight: 400;
  color: ${COLORS.TEXT};

  @media (max-width: ${SIZES.BREAK_SM}) {
    font-size: 48px;
  }
`;

export default H1;
