import styled from 'styled-components';

import { COLORS } from '../tokens';

const A = styled.a`
  color: inherit;
  text-decoration: underline;
  font-weight: 600;
  transition: color 250ms ease-in-out;

  &:hover,
  &:focus {
    color: ${COLORS.BLUE};
  }
`;

export default A;
