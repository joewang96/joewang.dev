import styled from 'styled-components';

import { SIZES } from '../../tokens';
import P from '../../elements/P';

const Prose = styled(P)`
  // max-width: ${SIZES.PROSE_WIDTH};
  font-size: 1.125rem;

  & + & {
    margin-top: 24px;
  }
`;

export default Prose;
