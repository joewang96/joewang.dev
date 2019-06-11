import React from 'react';
import styled from 'styled-components';
import Em from '../../elements/Em';
import { SIZES, MISC } from '../../tokens';

const Caption = styled(Em)`
  ${({ flip }) => (flip ? 'margin-top' : 'margin-bottom')}: 16px;
  text-align: ${({ alignRight }) => (alignRight ? 'right' : 'left')};

  @media (max-width: ${SIZES.BREAK_MD}) {
    margin: 0;
    text-align: left;
  }
`;

const Image = styled.div`
  width: 100%;
  height: 0;
  padding-bottom: ${({ ratio }) => `${ratio * 100}%` || '66%'};
  background: radial-gradient(circle, #fafaff 0%, #eff0ff 100%);
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  border-radius: ${SIZES.BORDER_RADIUS};
  background-image: url('${({ imageSrc }) => imageSrc}');
  box-shadow: ${MISC.BOX_SHADOW};

  @media (max-width: ${SIZES.BREAK_MD}) {
    margin-bottom: 16px;

    flex-shrink: 0;
    width: 80vw;
    padding-bottom: 62.5%;
  }
`;

const ImageGroup = ({ alignRight, flip, caption, src, ratio = 0.66 }) => {
  return (
    <>
      <Caption alignRight={alignRight} flip={flip}>
        {caption}
      </Caption>
      <Image imageSrc={src} aria-label={caption} ratio={ratio} role="img" />
    </>
  );
};

export default ImageGroup;
