import styled from 'styled-components';

import { COLORS, FONTS, FONT_SIZE } from '../tokens';

const ItalicSubtitle = styled.p`
  font-family: ${FONTS.SERIF};
  font-size: ${FONT_SIZE.SUBTITLE};
  font-weight: 400;
  font-style: italic;
  color: ${COLORS.TEXT_SUBTLE};
`;

export default ItalicSubtitle;
