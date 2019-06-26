import styled from 'styled-components';
import { SIZES } from '../../tokens';

const StickyWrapper = styled.div`
  @media (min-width: ${parseInt(SIZES.BREAK_MD, 10) + 1}px) {
    position: sticky;
    top: 1rem;
  }
`;

export default StickyWrapper;
