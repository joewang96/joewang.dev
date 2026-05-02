import styled from 'styled-components';

import { COLORS, FONTS, FONT_SIZE, SIZES } from '../tokens';

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

  @media (max-width: ${SIZES.BREAK_SM}) {
    font-size: 16px;
  }
`;

export default P;
