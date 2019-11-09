import React from 'react';
import styled from 'styled-components';
import Em from '../../elements/Em';
import { SIZES } from '../../tokens';

const Caption = styled(Em)`
  margin-top: 1rem;
  text-align: ${({ alignRight }) => (alignRight ? 'right' : 'left')};

  @media (max-width: ${SIZES.BREAK_MD}) {
    margin: 0;
    text-align: left;
  }
  @media (max-width: ${SIZES.BREAK_SM}) {
    font-size: 0.875rem;
    padding: 0 0.5rem;
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

  @media (max-width: ${SIZES.BREAK_MD}) {
    margin-bottom: 0.75rem;

    flex-shrink: 0;
    width: 80vw;
    padding-bottom: 62.5%;
  }
`;

const ImageGroup = ({ alignRight, caption, src, ratio = 0.66 }) => {
  return (
    <>
      <Image imageSrc={src} aria-label={caption} ratio={ratio} role="img" />
      <Caption alignRight={alignRight} aria-hidden="true">
        {caption}
      </Caption>
    </>
  );
};

export default ImageGroup;
