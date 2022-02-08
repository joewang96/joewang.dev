import styled from 'styled-components';

import { COLORS, FONTS } from '../tokens';

const ItalicSubtitle = styled.p`
  font-family: ${FONTS.SERIF};
  font-size: 1.125rem;
  font-weight: 400;
  font-style: italic;
  line-height: 2;
  color: ${COLORS.OFF_BLACK};
`;

export default ItalicSubtitle;
