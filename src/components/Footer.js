import React from 'react';

import styled from 'styled-components';
import P from '../elements/P';
import { FONTS, FONT_SIZE, SIZES } from '../tokens';

const Breakline = styled.span`
  display: inline-block;
`;

const StyledFooter = styled.footer`
  position: relative;
  margin-top: 120px;
  margin-bottom: 60px;

  @media (max-width: ${SIZES.BREAK_SM}) {
    margin-top: 100px;
  }
  @media (max-width: ${SIZES.BREAK_SM}) {
    margin-top: 80px;
    margin-bottom: 40px;
  }

  @media (max-width: ${SIZES.BREAK_XS}) {
    text-align: center;
  }
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
      &copy; {new Date().getFullYear()} Joseph Wang. Made in{' '}
      <Breakline>Fairfax, VA</Breakline>
    </CopyrightText>
  </StyledFooter>
);

export default Footer;
