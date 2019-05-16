import styled from 'styled-components';
import { SIZES } from '../../tokens';

const ImagesRow = styled.div`
  display: flex;
  flex-direction: ${({ reverse }) => (reverse ? 'row-reverse' : 'row')};
  align-items: ${({ alignStart }) => (alignStart ? 'flex-start' : 'flex-end')};
  justify-content: flex-end;

  &:first-of-type {
    margin-bottom: 33px;
  }

  @media (max-width: ${SIZES.BREAK_MD}) {
    flex-direction: column;
    &:first-of-type {
      margin: 0;
    }
  }
`;

export default ImagesRow;
