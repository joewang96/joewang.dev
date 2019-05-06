import React from 'react';
import styled, { css } from 'styled-components';
import * as resume from '../../misc/Joseph_Wang_Resume.pdf';

import { Link } from 'gatsby';
import { COLORS, SIZES } from '../../tokens';
import A from '../../elements/A';

const MenuComponent = styled.div`
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

  transition: opacity ${({ active }) => (active ? '400ms' : '50ms')} ease-out
    ${({ active }) => (active ? '300ms' : '0ms')};
  opacity: ${({ active }) => (active ? 1 : 0)};
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

const Menu = ({ closeMenu, pathname, active }) => (
  <MenuComponent
    active={active}
    aria-hidden={!active}
    onClick={closeMenu}
    onKeyDown={evt =>
      evt.key === 'Enter' || evt.key === ' ' ? closeMenu : null
    }
  >
    <MenuWrapper active={active}>
      <MenuItem active={active}>
        <MenuLink tabIndex={!active ? -1 : null} to="/" pathname={pathname}>
          Home
        </MenuLink>
      </MenuItem>

      <MenuCaseStudies>
        <MenuCaseStudyItem
          to="/portfolio/generate/"
          pathname={pathname}
          tabIndex={!active ? -1 : null}
        >
          Generate Website Redesign
        </MenuCaseStudyItem>
        <MenuCaseStudyItem
          to="/portfolio/hubspot-canvas/"
          pathname={pathname}
          tabIndex={!active ? -1 : null}
        >
          Canvas Design System
        </MenuCaseStudyItem>
        <MenuCaseStudyItem
          to="/portfolio/mentalligence/"
          pathname={pathname}
          tabIndex={!active ? -1 : null}
        >
          Mentalligence Brand Identity
        </MenuCaseStudyItem>
        <MenuCaseStudyItem
          to="/portfolio/boo-boston/"
          pathname={pathname}
          tabIndex={!active ? -1 : null}
        >
          Boo! Boston App Concept
        </MenuCaseStudyItem>
      </MenuCaseStudies>

      <MenuItem active={active}>
        <MenuLink
          tabIndex={!active ? -1 : null}
          to="/about/"
          pathname={pathname}
        >
          About
        </MenuLink>
      </MenuItem>
      <MenuItem active={active}>
        <MenuLink tabIndex={!active ? -1 : null} href={resume} target="_blank">
          Résumé
        </MenuLink>
      </MenuItem>
    </MenuWrapper>
  </MenuComponent>
);

export default Menu;
