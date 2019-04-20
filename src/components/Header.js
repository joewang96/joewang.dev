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

  &:before {
    content: ' ';
    position: absolute;
    left: calc(-32px - ${SIZES.PADDING_DESKTOP});
    width: ${SIZES.PADDING_DESKTOP};
    height: 1px;
    top: -1px;
    bottom: 0;
    margin: auto;
    background: #e0e0e0;

    @media (max-width: ${SIZES.BREAK_LG}) {
      left: calc(-20px - ${SIZES.PADDING_TABLET});
      width: ${SIZES.PADDING_TABLET};
    }
  }
`;
const Icon_Link = styled(Link)`
  text-decoration: none;
`;

const Icon = styled.i`
  font-size: 22px;
  color: ${COLORS.BLACK};
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
  transition: 250ms top ease-in-out;
  overflow: hidden;

  padding: 80px ${SIZES.PADDING_DESKTOP};

  @media (max-width: ${SIZES.BREAK_MD}) {
    padding: 0 60px;
  }

  @media (max-width: ${SIZES.BREAK_SM}) {
    padding: 0 30px;
  }

  box-sizing: border-box;
  display: flex;
  align-items: center;
`;

const MenuWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const MenuLink = styled(props => {
  const { href } = props;
  const LinkComponent = href ? A : Link;
  return <LinkComponent {...props} />;
})`
  color: ${COLORS.WHITE};
  text-decoration: none;
  font-family: 'Noto Serif', Georigia, serif;
  font-size: 80px;
  font-weight: 400;

  &:not(:last-of-type) {
    margin-bottom: 40px;
  }

  transition: color 250ms ease-in-out;
  &:hover,
  &:focus {
    color: ${COLORS.BLUE};
  }

  @media (max-width: ${SIZES.BREAK_MD}) {
    &:not(:last-of-type) {
      margin-bottom: 30px;
    }
  }

  @media (max-width: ${SIZES.BREAK_SM}) {
    font-size: 70px;
    &:not(:last-of-type) {
      margin-bottom: 20px;
    }
  }
`;

const Header = props => {
  const [active, setActive] = useState(false);
  const { onMenuActive } = props;

  const toggleActive = evt => {
    evt.preventDefault();
    setActive(!active);
    onMenuActive(!active);
  };

  const closeMenu = () => {
    setActive(false);
    onMenuActive(false);
  };

  return (
    <Navigation>
      <Navigation__Wrapper>
        <Icon_Link
          to="/"
          aria-label="My personal logo. Click to return to the homepage."
        >
          <Icon className="icon icon-logo" />
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
          <MenuLink tabIndex={!active ? -1 : null} to="/">
            Home
          </MenuLink>
          <MenuLink tabIndex={!active ? -1 : null} to="/about">
            About
          </MenuLink>
          <MenuLink
            tabIndex={!active ? -1 : null}
            href={resume}
            target="_blank"
          >
            Resume
          </MenuLink>
        </MenuWrapper>
      </Menu>
    </Navigation>
  );
};

export default Header;
