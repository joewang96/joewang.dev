import React from 'react';
import styled, { css } from 'styled-components';
import * as resume from '../../misc/Joseph_Wang_Resume.pdf';
import MenuContext from './MenuContext';
import { COLORS, SIZES } from '../../tokens';
import MenuLink from './MenuLink';

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

const MenuCaseStudies = styled.div`
  display: flex;
  flex-direction: column;
  margin: 1.875rem 0;
  text-align: right;
`;

const MenuCaseStudyItem = props => <MenuLink {...props} use="case-study" />;

const Menu = ({ closeMenu, pathname, active }) => (
  <MenuContext.Provider value={{ active, pathname }}>
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
          <MenuLink to="/">Home</MenuLink>
        </MenuItem>

        <MenuCaseStudies>
          <MenuCaseStudyItem to="/portfolio/generate/">
            Generate Website Redesign
          </MenuCaseStudyItem>
          <MenuCaseStudyItem to="/portfolio/hubspot-canvas/">
            Canvas Design System
          </MenuCaseStudyItem>
          <MenuCaseStudyItem to="/portfolio/mentalligence/">
            Mentalligence Brand Identity
          </MenuCaseStudyItem>
          <MenuCaseStudyItem to="/portfolio/boo-boston/">
            Boo! Boston App Concept
          </MenuCaseStudyItem>
        </MenuCaseStudies>

        <MenuItem active={active}>
          <MenuLink href={resume} external={true} target="_blank">
            Résumé
          </MenuLink>
        </MenuItem>
      </MenuWrapper>
    </MenuComponent>
  </MenuContext.Provider>
);

export default Menu;
