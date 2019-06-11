import styled from 'styled-components';

import { SIZES } from '../../tokens';
import P from '../../elements/P';
import Prose from './Prose';

const SectionTitle = styled(P)`
  font-family: 'Biryani', Cabin, Helvetica Neue, Helvetica, sans-serif;
  font-weight: bold;
  font-size: 1.375rem;

  width: 100%;
  max-width: ${SIZES.PROSE_WIDTH};

  margin-bottom: 24px;

  ${Prose} + & {
    margin-top: 60px;
  }
`;

export default SectionTitle;
