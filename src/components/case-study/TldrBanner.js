import React from 'react';
import styled from 'styled-components';

import { COLORS, SIZES } from '../../tokens';
import P from '../../elements/P';

const Header = styled(P)`
  color: ${COLORS.TEXT};
  font-weight: 500;
`;

const Body = styled.div`
  /* TODO: add breakpoint smaller size */
  & ${P} {
    font-size: 16px;
  }

  ${P} + ${P} {
    margin-top: 8px;
  }
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;

  gap: 8px;

  background: #2f2723;

  padding: 12px 16px;
  border: 1px solid #564035;
  border-radius: ${SIZES.BORDER_RADIUS};
`;

class TldrBanner extends React.Component {
  render() {
    const { children, ...rest } = this.props;

    return (
      <Wrapper {...rest}>
        <Header>The TL;DR</Header>
        <Body>{children}</Body>
      </Wrapper>
    );
  }
}

export default TldrBanner;
