import styled from 'styled-components';

import { COLORS, SIZES, FONTS, FONT_SIZE } from '../tokens';

const H1 = styled.h1`
  font-family: ${FONTS.SERIF};
  font-size: ${FONT_SIZE.TITLE};
  font-weight: 400;
  color: ${COLORS.TEXT};

  /* TODO: update this */
  @media (max-width: ${SIZES.BREAK_LG}) {
    font-size: ${FONT_SIZE.TITLE};
  }
  @media (max-width: ${SIZES.BREAK_MD}) {
    font-size: ${FONT_SIZE.TITLE};
  }
  @media (max-width: ${SIZES.BREAK_SM}) {
    font-size: ${FONT_SIZE.TITLE};
  }
`;

export default H1;
