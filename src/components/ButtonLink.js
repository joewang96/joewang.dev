import styled from 'styled-components';

import Prose from './case_study/Prose';
import { COLORS } from '../tokens';

const ButtonLink = styled.a`
  display: inline-block;
  text-decoration: none;
  color: ${COLORS.WHITE};
  background: ${COLORS.BLACK};
  padding: 0.75rem 1.5rem;
  font-size: 1rem;
  font-weight: 500;
  font-family: 'Noto Sans', Cabin, Helvetica Neue, Helvetica, sans-serif;
  border-radius: 2px;
  transition: background 250ms ease-in-out;

  &:hover {
    background: ${COLORS.OFF_BLACK};
  }
  &:active {
    background: ${COLORS.BLACK};
  }

  ${Prose} + & {
    margin-top: 2.5rem;
  }
`;

export default ButtonLink;
