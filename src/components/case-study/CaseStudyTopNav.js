import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';

import { COLORS, FONTS, FONT_SIZE } from '../../tokens';

const NavLink = styled(Link)`
  font-size: ${FONT_SIZE.XS};
  font-weight: 400;
  font-family: ${FONTS.MONO};
  color: ${COLORS.TEXT_SUBTLE};
  transition: all 200ms ease-in-out;

  &:hover {
    color: ${COLORS.TEXT};
  }
`;

const Dot = styled.div`
  width: 4px;
  height: 4px;
  border-radius: 100px;
  background: ${COLORS.TEXT_SUBTLE};
`;

const NavWrapper = styled.div`
  width: 100%;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  gap: 20px;
  padding: 12px 0;
  background: ${COLORS.BACKGROUND};

  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;

  border-bottom: 1px solid ${COLORS.CONTAINER_BORDER_SUBTLE};
`;

class CaseStudyTopNav extends React.Component {
  render() {
    const { children, nextPath, ...rest } = this.props;

    return (
      <NavWrapper {...rest}>
        <NavLink to="/">Back home</NavLink>
        <Dot role="presentation" />
        <NavLink to={nextPath}>Next case study</NavLink>
      </NavWrapper>
    );
  }
}

export default CaseStudyTopNav;
