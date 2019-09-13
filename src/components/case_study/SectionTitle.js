import styled from 'styled-components';

import { SIZES } from '../../tokens';
import P from '../../elements/P';
import Prose from './Prose';

const SectionTitle = styled(P)`
  font-weight: 600;
  font-size: 1.5rem;

  width: 100%;
  max-width: ${SIZES.PROSE_WIDTH};
  margin-bottom: 1.5rem;

  ${Prose} + & {
    margin-top: 60px;
  }

  @media (max-width: ${SIZES.BREAK_SM}) {
    font-size: 1.3rem;
    margin-bottom: 1.125rem;
  }
`;

export default SectionTitle;
