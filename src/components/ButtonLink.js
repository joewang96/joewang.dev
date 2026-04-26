import React from 'react';
import styled from 'styled-components';
import { ArrowSquareOutIcon } from '@phosphor-icons/react';
import { COLORS, FONTS, FONT_SIZE, SIZES } from '../tokens';

const ExternalIcon = styled(ArrowSquareOutIcon)`
  margin-bottom: 1px;
`;

const Link = styled.a`
  display: inline-flex;
  flex-direction: row;
  align-items: center;
  gap: 6px;
  text-decoration: none;
  color: ${COLORS.TEXT_SUBTLE};
  background: ${COLORS.PURPLE_SUBTLE};
  padding: 4px 10px;
  font-size: ${FONT_SIZE.XS};
  font-weight: 500;
  font-family: ${FONTS.MONO};
  border: 1px solid ${COLORS.BORDER_SUBTLE};
  border-radius: ${SIZES.BORDER_RADIUS};
  transition: all 200ms ease-in-out;

  &:hover {
    color: ${COLORS.TEXT};
    background: ${COLORS.PURPLE_HOVER};
    border-color: ${COLORS.BORDER_HOVER};
  }
`;

class ButtonLink extends React.Component {
  render() {
    const { children, ...rest } = this.props;

    return (
      <Link {...rest}>
        {children}
        <ExternalIcon size={14} />
      </Link>
    );
  }
}

export default ButtonLink;
