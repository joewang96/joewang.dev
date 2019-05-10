import styled from 'styled-components';

import { SIZES } from '../../tokens';
import P from '../../elements/P';

const Prose = styled(P)`
  font-size: 1.125rem;
  font-family: 'Noto Serif', Georigia, serif;
  line-height: 2;

  & + & {
    margin-top: 24px;
  }
`;

export default Prose;
