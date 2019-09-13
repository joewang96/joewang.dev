import { Link } from 'gatsby';
import React, { useState } from 'react';
import styled, { css } from 'styled-components';
import { COLORS, SIZES } from '../tokens';
import Menu from './menu/Menu';
import * as dot_pattern from '../images/dot.svg';

const MOBILE_TIMING = '100ms';
const NAV_PADDING = parseInt(SIZES.PADDING_DESKTOP, 10) / 2;

const Navigation = styled.nav`
  padding: 0 ${`${NAV_PADDING}px`} 0 ${NAV_PADDING}px;
  margin-top: 40px;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: ${SIZES.BREAK_LG}) {
    padding: 0 ${`${parseInt(SIZES.PADDING_TABLET, 10) / 2}px`} 0
      ${SIZES.PADDING_TABLET};
  }

  @media (max-width: ${SIZES.BREAK_SM}) {
    padding: 0 ${SIZES.PADDING_MOBILE};
  }

  &:before {
    content: ' ';
    z-index: -1;
    width: 40%;
    max-width: 22rem;
    height: 207px;
    position: absolute;
    top: 0;
    left: 0;

    background-image: url(${dot_pattern});
    background-size: 32px;

    @media (max-width: ${SIZES.BREAK_SM}) {
      width: 60%;
      height: 120px;
    }
  }
`;

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
`;
const IconLink = styled(Link)`
  text-decoration: none;
  z-index: 1000;
`;

const Icon = styled.i`
  font-size: 1.375rem;
  color: ${({ menuActive }) => (menuActive ? COLORS.WHITE : COLORS.BLACK)};
`;

const MobileNavLine = styled.span`
  width: 100%;
  height: 2px;
  background: ${({ active }) => (active ? COLORS.WHITE : COLORS.BLACK)};
  position: absolute;
  transition: ${MOBILE_TIMING} ease-out transform;
  transition-delay: ${MOBILE_TIMING};

  &:nth-child(1) {
    top: 10px;
    background: transparent;
    &::before {
      content: ' ';
      width: 100%;
      height: 100%;
      background: ${({ active }) => (active ? COLORS.WHITE : COLORS.BLACK)};
      position: absolute;
      top: 0px;
      transition: ${MOBILE_TIMING} ease-out transform;
    }
  }
  &:nth-child(2) {
    bottom: 10px;
  }

  ${({ active }) =>
    active === true &&
    css`
      transition-delay: 0ms;
      &:nth-child(1) {
        transform: translateY(5px);
        &::before {
          transform: rotate(-90deg);
          transition-delay: ${MOBILE_TIMING};
        }
      }
      &:nth-child(2) {
        transform: translateY(-5px);
      }
    `};
`;

const MobileNav = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 32px;
  height: 32px;
  z-index: 10000;
  position: relative;
  cursor: pointer;
  transition: ${MOBILE_TIMING} ease-out transform;

  ${({ active }) =>
    active === true &&
    css`
      transition-delay: ${MOBILE_TIMING};
      transform: rotate(45deg);
    `};
`;

const Header = props => {
  const [active, setActive] = useState(false);
  const { onMenuActive, pathname } = props;

  const toggleActive = evt => {
    evt.preventDefault();
    setActive(!active);
    onMenuActive(!active);
  };

  const closeMenu = evt => {
    setActive(false);
    onMenuActive(false);
    evt.target.blur();
  };

  return (
    <Navigation>
      <Wrapper>
        <IconLink
          to="/"
          aria-label="My personal logo. Click to return to the homepage."
        >
          <Icon menuActive={active} className="icon icon-logo" />
        </IconLink>

        <MobileNav
          active={active}
          tabIndex="0"
          role="button"
          aria-pressed={active}
          aria-label={active ? 'Press to close menu' : 'Press to open menu'}
          onClick={toggleActive}
          // prevent blur on mouse click - still works for keyboard
          onMouseDown={evt => evt.preventDefault()}
          onKeyDown={evt =>
            evt.key === 'Enter' || evt.key === ' ' ? toggleActive(evt) : null
          }
        >
          <MobileNavLine active={active} />
          <MobileNavLine active={active} />
        </MobileNav>
      </Wrapper>
      <Menu closeMenu={closeMenu} pathname={pathname} active={active} />
    </Navigation>
  );
};

export default Header;
