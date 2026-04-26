import React from 'react';

import styled from 'styled-components';
import P from '../elements/P';
import { FONTS, FONT_SIZE } from '../tokens';

const StyledFooter = styled.footer`
  position: relative;
  margin-top: 120px;
  margin-bottom: 60px;
`;

const CopyrightText = styled(P)`
  && {
    font-size: ${FONT_SIZE.XS};
  }
  font-family: ${FONTS.MONO};
`;

const Footer = () => (
  <StyledFooter>
    <CopyrightText>
      &copy; {new Date().getFullYear()} Joseph Wang. Made in Fairfax, VA
    </CopyrightText>
  </StyledFooter>
);

export default Footer;
