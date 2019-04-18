import React from 'react';
import styled from 'styled-components';

import P from '../elements/P';

import { COLORS, SIZES } from '../tokens';

const List_Item = styled.div`
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

const List_Item__Content = styled.div`
  max-width: 523px;
`;

const List_Item__Title = styled(P)`
  font-family: 'Biryani', Cabin, Helvetica Neue, Helvetica, sans-serif;
  font-weight: bold;
  line-height: 1.75;
  margin-bottom: 12px;
  color: ${COLORS.BLACK};

  @media (max-width: ${SIZES.BREAK_MD}) {
    font-size: 18px;
  }
  @media (max-width: ${SIZES.BREAK_SM}) {
    font-size: 16px;
  }
`;

const List_Item__Body = styled(P)`
  line-height: 1.75;
  margin-bottom: 0;
  && {
    font-size: 16px;
    @media (max-width: ${SIZES.BREAK_SM}) {
      font-size: 14px;
    }
  }
`;

const List_Item__Tag = styled(P)`
  && {
    font-size: 14px;
    line-height: 2;
    @media (max-width: ${SIZES.BREAK_SM}) {
      font-size: 12px;
    }
  }
  color: #898989;
  margin-top: 16px;
  font-family: 'PT Mono', monospace;
`;

const ListItem = ({ title, body, tag, ...rest }) => (
  <List_Item {...rest}>
    <List_Item__Content>
      {title && <List_Item__Title>{title}</List_Item__Title>}
      {body && <List_Item__Body>{body}</List_Item__Body>}
      {tag && <List_Item__Tag>{tag}</List_Item__Tag>}
    </List_Item__Content>
  </List_Item>
);

export default ListItem;
