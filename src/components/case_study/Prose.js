import styled from 'styled-components';

import { SIZES } from '../../tokens';
import P from '../../elements/P';

const Prose = styled(P)`
  max-width: ${SIZES.PROSE_WIDTH};

  & + & {
    margin-top: 33px;
  }
`;

export default Prose;
