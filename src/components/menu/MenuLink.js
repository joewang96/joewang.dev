import React from 'react';
import styled, { css } from 'styled-components';

import { Link } from 'gatsby';
import { COLORS, FONTS } from '../../tokens';
import A from '../../elements/A';
import MenuContext from './MenuContext';

const LinkComponent = styled(props => {
  const { active: __active, external, href, ...rest } = props;
  const Component = external ? A : Link;
  return <Component {...rest} href={href} />;
})`
  color: ${({ to, pathname }) =>
    to && pathname === to ? COLORS.WHITE : COLORS.LIGHT_GREY};
  text-decoration: none;
  transition: color 250ms ease-in-out;
  &:hover,
  &:focus {
    color: ${COLORS.WHITE};
  }

  ${({ use }) =>
    use === 'case-study'
      ? css`
          font-family: ${FONTS.SERIF};
          font-size: 1.125rem;
          font-style: italic;

          &:not(:last-of-type) {
            margin-bottom: 1.25rem;
          }
        `
      : css`
          font-family: ${FONTS.SANS};
          font-size: 1.5rem;
          font-weight: 600;
        `};
`;

class MenuLink extends React.Component {
  render() {
    return (
      <MenuContext.Consumer>
        {value => (
          <LinkComponent
            {...this.props}
            {...value}
            tabIndex={!value.active ? -1 : null}
          />
        )}
      </MenuContext.Consumer>
    );
  }
}

export default MenuLink;
