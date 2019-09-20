import styled from 'styled-components';
import P from '../../elements/P';
import { FONTS } from '../../tokens';

const Prose = styled(P)`
  font-size: 1.125rem;
  font-family: ${FONTS.SERIF};
  line-height: 1.9;

  & + & {
    margin-top: 24px;
  }
`;

export default Prose;
