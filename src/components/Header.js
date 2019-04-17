import { Link } from 'gatsby';
import React, { useState } from 'react';
import styled, { css } from 'styled-components';

import { COLORS, SIZES } from '../tokens';

const MOBILE_TIMING = '125ms';

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
  background: ${COLORS.BLACK};
  position: absolute;
  transition: ${MOBILE_TIMING} ease-in-out transform;
  transition-delay: ${MOBILE_TIMING};

  &:nth-child(1) {
    top: 0;
    background: transparent;
    &::before {
      content: ' ';
      width: 100%;
      height: 100%;
      background: ${COLORS.BLACK};
      position: absolute;
      top: 0;
      transition: ${MOBILE_TIMING} ease-in-out transform;
    }
  }
  &:nth-child(2) {
    bottom: 0;
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
  height: 12px;
  z-index: 1000;
  position: relative;
  cursor: pointer;
  transition: ${MOBILE_TIMING} ease-in-out transform;

  ${({ active }) =>
    active == true &&
    css`
      transition-delay: ${MOBILE_TIMING};
      transform: rotate(45deg);
    `};
`;

const Header = () => {
  const [active, setActive] = useState(false);
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
          onClick={evt => {
            evt.preventDefault();
            setActive(!active);
          }}
        >
          <MobileNavLine active={active} />
          <MobileNavLine active={active} />
        </MobileNav>
      </Navigation__Wrapper>
    </Navigation>
  );
};

export default Header;
