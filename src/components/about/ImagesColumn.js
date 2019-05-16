import styled from 'styled-components';
import { SIZES } from '../../tokens';

const ImagesColumn = styled.div`
  display: flex;
  flex-direction: ${props => (props.reverse ? 'column-reverse' : 'column')};
  width: ${({ width }) => width};

  &:first-of-type {
    margin-right: 33px;
  }

  @media (max-width: ${SIZES.BREAK_MD}) {
    width: 100%;
    flex-direction: column-reverse;
    margin-bottom: 60px;

    &:first-of-type {
      margin-right: 0;
    }
  }
  @media (max-width: ${SIZES.BREAK_SM}) {
    margin-bottom: 52px;
  }
`;

export default ImagesColumn;
