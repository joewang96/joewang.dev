import styled from 'styled-components';

import Prose from './case_study/Prose';
import { COLORS, FONTS } from '../tokens';

const ButtonLink = styled.a`
  display: inline-block;
  text-decoration: none;
  color: ${COLORS.WHITE};
  background: ${COLORS.BLACK};
  // Biryani has inconsistent bottom spacing
  padding: 1rem 2rem 0.65rem;
  font-size: 1rem;
  font-weight: 500;
  font-family: ${FONTS.BIRYANI};
  border-radius: 2px;
  transition: background 350ms ease-in-out;

  &:hover {
    background: ${COLORS.BLUE};
  }
  &:active {
    background: ${COLORS.BLUE_DARK};
  }

  ${Prose} + & {
    margin-top: 2.5rem;
  }
`;

export default ButtonLink;
