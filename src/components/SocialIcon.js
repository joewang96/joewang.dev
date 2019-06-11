import React, { Component } from 'react';
import styled from 'styled-components';

import { COLORS } from '../tokens';

const Icon = styled.i`
  display: inline-block;
  color: #595959;
  transition-duration: 250ms;
  transition-timing-function: ease-in-out;
  transition-property: color;
  font-size: 1.75rem;
  padding: 5px;
`;

const Wrapper = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  &:hover ${Icon}, &:focus ${Icon} {
    color: ${COLORS.BLUE};
  }
`;

class SocialIcon extends Component {
  renderIcon() {
    const { iconClass, ariaLabel } = this.props;
    return <Icon className={iconClass} aria-label={ariaLabel} />;
  }

  render() {
    const { className, href, targetBlank = true } = this.props;
    return !href ? (
      this.renderIcon()
    ) : (
      <Wrapper
        className={`social-icon ${className}`}
        href={href}
        target={targetBlank ? '_blank' : ''}
        rel="noopener noreferrer"
      >
        {this.renderIcon()}
      </Wrapper>
    );
  }
}

export default SocialIcon;
