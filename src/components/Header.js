import { Link } from 'gatsby';
import React, { useState } from 'react';
import styled, { css } from 'styled-components';
import A from '../elements/A';
import { COLORS, SIZES } from '../tokens';
import * as resume from '../misc/Joseph_Wang_Resume.pdf';

const MOBILE_TIMING = '100ms';

const Navigation = styled.nav`
  padding: 0 ${`${parseInt(SIZES.PADDING_DESKTOP, 10) / 2}px`} 0
    ${SIZES.PADDING_DESKTOP};
  height: 100px;
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
`;

const Navigation__Wrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
`;
const Icon_Link = styled(Link)`
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
    active == true &&
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
    active == true &&
    css`
      transition-delay: ${MOBILE_TIMING};
      transform: rotate(45deg);
    `};
`;

const Menu = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  background: ${COLORS.BLACK};
  left: 0;
  top: ${({ active }) => (active ? 0 : '-100vh')};
  z-index: 100;
  transition: 200ms top ease-in-out;
  justify-content: center;
  ${({ active }) =>
    active &&
    css`
      transition-duration: 300ms;
    `};
  overflow: hidden;

  box-sizing: border-box;
  display: flex;
  align-items: center;
  padding: 80px ${`${parseInt(SIZES.PADDING_DESKTOP, 10) / 2}px`} 0px
    ${SIZES.PADDING_DESKTOP};

  @media (max-width: ${SIZES.BREAK_LG}) {
    padding: 60px ${`${parseInt(SIZES.PADDING_TABLET, 10) / 2}px`} 0
      ${SIZES.PADDING_TABLET};
  }

  @media (max-width: ${SIZES.BREAK_SM}) {
    padding: 25vh ${SIZES.PADDING_MOBILE};
    align-items: flex-start;
  }
`;

const MenuWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  max-width: 1400px;
  width: 100%;
`;

const MenuItem = styled(props => {
  const { active: __active, ...rest } = props;
  return <div {...rest} />;
})`
  & + & {
    margin-top: 0.875rem;
  }
`;

const MenuLink = styled(props => {
  const { href, ...rest } = props;
  const LinkComponent = href ? A : Link;
  return <LinkComponent {...rest} href={href} />;
})`
  color: ${({ to, pathname }) =>
    to && pathname === to ? COLORS.WHITE : COLORS.LIGHT_GREY};
  text-decoration: none;
  font-family: 'Biryani', Helvetica, sans-serif;
  font-size: 1.5rem;
  font-weight: 600;

  transition: color 250ms ease-in-out;
  &:hover,
  &:focus {
    color: ${COLORS.WHITE};
  }
`;

const MenuCaseStudies = styled.div`
  display: flex;
  flex-direction: column;
  margin: 1.875rem 0;
  text-align: right;
`;

const MenuCaseStudyItem = styled(Link)`
  color: ${({ to, pathname }) =>
    to && pathname === to ? COLORS.WHITE : COLORS.LIGHT_GREY};
  text-decoration: none;
  font-family: 'Noto Sans', Helvetica, sans-serif;
  font-size: 1.25rem;
  font-style: italic;

  transition: color 250ms ease-in-out;
  &:hover,
  &:focus {
    color: ${COLORS.WHITE};
  }

  &:not(:last-of-type) {
    margin-bottom: 1rem;
  }
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
      <Navigation__Wrapper>
        <Icon_Link
          to="/"
          aria-label="My personal logo. Click to return to the homepage."
        >
          <Icon menuActive={active} className="icon icon-logo" />
        </Icon_Link>

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
      </Navigation__Wrapper>
      <Menu
        active={active}
        aria-hidden={!active}
        onClick={closeMenu}
        onKeyDown={evt =>
          evt.key === 'Enter' || evt.key === ' ' ? closeMenu : null
        }
      >
        <MenuWrapper>
          <MenuItem active={active}>
            <MenuLink tabIndex={!active ? -1 : null} to="/" pathname={pathname}>
              Home
            </MenuLink>
          </MenuItem>

          <MenuCaseStudies>
            <MenuCaseStudyItem to="/portfolio/generate" pathname={pathname}>
              Generate Website Redesign
            </MenuCaseStudyItem>
            <MenuCaseStudyItem
              to="/portfolio/hubspot-canvas"
              pathname={pathname}
            >
              Canvas Design System
            </MenuCaseStudyItem>
            <MenuCaseStudyItem
              to="/portfolio/mentalligence"
              pathname={pathname}
            >
              Mentalligence Brand Identity
            </MenuCaseStudyItem>
            <MenuCaseStudyItem to="/portfolio/boo-boston" pathname={pathname}>
              Boo! Boston App Concept
            </MenuCaseStudyItem>
          </MenuCaseStudies>

          <MenuItem active={active}>
            <MenuLink
              tabIndex={!active ? -1 : null}
              to="/about"
              pathname={pathname}
            >
              About
            </MenuLink>
          </MenuItem>
          <MenuItem active={active}>
            <MenuLink
              tabIndex={!active ? -1 : null}
              href={resume}
              target="_blank"
            >
              Résumé
            </MenuLink>
          </MenuItem>
        </MenuWrapper>
      </Menu>
    </Navigation>
  );
};

export default Header;
