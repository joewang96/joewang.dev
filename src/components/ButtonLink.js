import styled from 'styled-components';

import Prose from './case_study/Prose';
import { COLORS, FONTS, SIZES } from '../tokens';

const ButtonLink = styled.a`
  display: inline-block;
  text-decoration: none;
  color: ${COLORS.WHITE};
  background: ${COLORS.BLACK};
  padding: 1rem 2rem;
  font-size: 1.125rem;
  font-weight: 600;
  font-family: ${FONTS.SANS};
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

  @media (max-width: ${SIZES.BREAK_SM}) {
    font-size: 1rem;
    ${Prose} + & {
      margin-top: 2rem;
    }
  }
`;

export default ButtonLink;
