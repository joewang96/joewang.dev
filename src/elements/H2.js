import styled from 'styled-components';

import { COLORS, FONTS, FONT_SIZE } from '../tokens';

const H2 = styled.h2`
  font-family: ${FONTS.SERIF};
  font-size: ${FONT_SIZE.SECTION_HEAD};
  font-weight: normal;
  color: ${COLORS.TEXT};
  margin-bottom: 32px;
`;

export default H2;
