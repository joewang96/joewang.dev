import React from 'react';
import styled from 'styled-components';
import { CopySimpleIcon } from '@phosphor-icons/react';
import { COLORS, FONTS, FONT_SIZE, SIZES } from '../tokens';

const CopyIcon = styled(CopySimpleIcon)`
  margin-bottom: 1px;
`;

const Button = styled.button`
  display: inline-flex;
  flex-direction: row;
  align-items: center;
  gap: 6px;
  text-decoration: none;
  color: ${COLORS.TEXT_SUBTLE};
  background: ${COLORS.GREEN_SUBTLE};
  padding: 4px 10px;
  font-size: ${FONT_SIZE.XS};
  font-weight: 500;
  font-family: ${FONTS.MONO};
  border: 1px solid ${COLORS.BORDER_SUBTLE};
  border-radius: ${SIZES.BORDER_RADIUS};
  transition: all 200ms ease-in-out;

  &:hover {
    color: ${COLORS.TEXT};
    background: ${COLORS.GREEN_HOVER};
    border-color: ${COLORS.BORDER_HOVER};
  }
`;

class EmailButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showCopied: false,
    };
  }

  handleClick = () => {
    this.setState({ showCopied: true });
    navigator.clipboard.writeText('joe.wang96@gmail.com');
    setTimeout(() => this.setState({ showCopied: false }), 4000);
  };

  render() {
    const { showCopied } = this.state;
    const { children, ...rest } = this.props;

    return (
      <Button {...rest} onClick={this.handleClick}>
        {showCopied ? 'Copied!' : children}
        <CopyIcon size={14} />
      </Button>
    );
  }
}

export default EmailButton;
