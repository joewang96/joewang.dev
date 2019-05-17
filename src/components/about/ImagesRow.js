import styled from 'styled-components';
import { SIZES } from '../../tokens';

const ImagesRow = styled.div`
  position: relative;
  display: flex;
  flex-direction: ${({ reverse }) => (reverse ? 'row-reverse' : 'row')};
  align-items: ${({ alignStart }) => (alignStart ? 'flex-start' : 'flex-end')};

  &:first-of-type {
    margin-bottom: 33px;
  }

  @media (max-width: ${SIZES.BREAK_MD}) {
    flex-direction: column;
    padding: 0 ${SIZES.PADDING_TABLET};
    &:first-of-type {
      margin: 0;
    }
  }

  @media (max-width: ${SIZES.BREAK_SM}) {
    padding: 0 ${SIZES.PADDING_MOBILE};
  }
`;

export default ImagesRow;
