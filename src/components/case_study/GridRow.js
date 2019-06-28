import styled from 'styled-components';
import { SIZES } from '../../tokens';

const GridRow = styled.div`
  display: grid;
  position: relative;
  grid-gap: ${({ gap = '0 5.8125rem' }) => gap};
  grid-template-columns: ${({ gridTemplateCol }) => gridTemplateCol};
  grid-template-areas: ${({ gridTemplateAreas }) => gridTemplateAreas};

  @media (max-width: ${SIZES.BREAK_MD}) {
    display: block;
  }

  & + & {
    margin-top: 120px;
    @media (max-width: ${SIZES.BREAK_MD}) {
      margin-top: ${SIZES.CASE_STUDY_SECTION_SPACING};
    }
  }
`;

export default GridRow;
