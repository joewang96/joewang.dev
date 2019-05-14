import styled from 'styled-components';
import P from '../../elements/P';
import { COLORS, SIZES } from '../../tokens';

const Quote = styled(P)`
  font-style: italic;
  font-size: 1.75rem;
  line-height: 2;

  padding-left: 30px;

  color: ${COLORS.GREY};
  border-left: 3px solid ${({ borderColor }) => borderColor};

  @media (min-width: ${parseInt(SIZES.BREAK_MD, 10) + 1}px) {
    max-width: 26.875rem;
    margin-left: auto;
    margin-top: auto;
    margin-bottom: auto;
  }
  @media (max-width: ${SIZES.BREAK_MD}) {
    font-size: 1.5rem;
    margin-bottom: 0;
  }
`;
export default Quote;
