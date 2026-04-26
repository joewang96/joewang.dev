import styled from 'styled-components';

import { COLORS, FONTS, FONT_SIZE } from '../tokens';

const P = styled.p`
  font-family: ${FONTS.SANS};
  font-size: ${FONT_SIZE.BODY};
  font-optical-sizing: auto;
  font-style: normal;
  line-height: 140%;
  color: ${COLORS.TEXT_SUBTLE};

  & + & {
    margin-top: 16px;
  }
`;

export default P;
