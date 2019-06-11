import React from 'react';
import styled from 'styled-components';

import P from '../elements/P';

import { COLORS, SIZES } from '../tokens';

const Wrapper = styled.div`
  padding-bottom: 40px;
  border-bottom: 1px solid ${COLORS.OFF_WHITE};
  position: relative;
  padding-right: 60px;
  &:not(:last-of-type) {
    margin-bottom: 40px;
  }
  @media (max-width: ${SIZES.BREAK_SM}) {
    padding-right: ${SIZES.PADDING_MOBILE};
  }

  @media (max-width: ${SIZES.BREAK_SM}) {
    padding-bottom: 28px;
    margin-bottom: 28px;
  }
`;

const Content = styled.div`
  max-width: 32.7rem;
`;

const Title = styled(P)`
  font-family: 'Biryani', Cabin, Helvetica Neue, Helvetica, sans-serif;
  font-weight: bold;
  line-height: 1.75;
  margin-bottom: 12px;
  color: ${COLORS.BLACK};

  @media (max-width: ${SIZES.BREAK_MD}) {
    font-size: 1.125em;
  }
  @media (max-width: ${SIZES.BREAK_SM}) {
    font-size: 1rem;
  }
`;

const Body = styled(P)`
  line-height: 1.75;
  margin-bottom: 0;
  && {
    font-size: 1rem;
    @media (max-width: ${SIZES.BREAK_SM}) {
      font-size: 0.875rem;
    }
  }
`;

const Tag = styled(P)`
  && {
    font-size: 0.875rem;
    line-height: 2;
    @media (max-width: ${SIZES.BREAK_SM}) {
      font-size: 0.75rem;
    }
  }
  color: ${COLORS.GREY};
  margin-top: 16px;
  font-family: 'PT Mono', monospace;
`;

const ListItem = ({ title, body, tag, ...rest }) => (
  <Wrapper {...rest}>
    <Content>
      {title && <Title>{title}</Title>}
      {body && <Body>{body}</Body>}
      {tag && <Tag>{tag}</Tag>}
    </Content>
  </Wrapper>
);

export default ListItem;
