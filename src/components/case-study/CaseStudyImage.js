import styled from 'styled-components';

import { COLORS, FONTS, FONT_SIZE, SIZES } from '../../tokens';

const CaseStudyImage = styled.div`
  width: 100%;
  height: 280px;

  background-color: #848484;

  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-image: url("${props => props.imageSrc}");

  border-radius: ${SIZES.BORDER_RADIUS};
`;

export default CaseStudyImage;
