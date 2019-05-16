import styled from 'styled-components';
import { SIZES } from '../../tokens';

const ImagesContainer = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;

  padding: 0 ${SIZES.PADDING_DESKTOP};
  margin-bottom: 136px;

  @media (max-width: ${SIZES.BREAK_LG}) {
    padding: 0 ${SIZES.PADDING_TABLET};
    margin-bottom: 100px;
  }

  @media (max-width: ${SIZES.BREAK_SM}) {
    padding: 0 ${SIZES.PADDING_MOBILE};
    margin-bottom: 60px;
  }
`;
export default ImagesContainer;
