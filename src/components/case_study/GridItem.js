import styled from 'styled-components';
import { SIZES } from '../../tokens';

const GridItem = styled.div`
  grid-area: ${({ gridArea }) => gridArea};

  @media (min-width: ${parseInt(SIZES.BREAK_MD, 10) + 1}px) {
    margin-top: ${({ marginTop }) => (marginTop ? '5rem' : null)};
  }

  @media (max-width: ${SIZES.BREAK_MD}) {
    & + & {
      margin-top: ${SIZES.CASE_STUDY_SECTION_SPACING};
    }
  }
`;

export default GridItem;
