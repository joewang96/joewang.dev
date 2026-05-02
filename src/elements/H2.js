import styled from 'styled-components';

import { COLORS, FONTS, FONT_SIZE, SIZES } from '../tokens';

const H2 = styled.h2`
  font-family: ${FONTS.SERIF};
  font-size: ${FONT_SIZE.SECTION_HEAD};
  font-weight: normal;
  color: ${COLORS.TEXT};
  margin-bottom: 32px;

  @media (max-width: ${SIZES.BREAK_SM}) {
    margin-bottom: 28px;
  }
`;

export default H2;
