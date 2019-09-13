import React from 'react';
import styled from 'styled-components';

import P from '../elements/P';

import { COLORS, FONTS, SIZES } from '../tokens';

const Wrapper = styled.div`
  position: relative;
  &:not(:last-of-type) {
    margin-bottom: 80px;
    @media (max-width: ${SIZES.BREAK_MD}) {
      margin-bottom: 56px;
    }
    @media (max-width: ${SIZES.BREAK_SM}) {
      margin-bottom: 40px;
    }
  }
`;

const Title = styled(P)`
  font-family: ${FONTS.SANS};
  font-size: 1.375rem;
  font-weight: 600;
  line-height: 1.75;
  margin-bottom: 1rem;
  color: ${COLORS.BLACK};

  @media (max-width: ${SIZES.BREAK_MD}) {
    font-size: 1.125em;
    margin-bottom: 0.875rem;
  }
  @media (max-width: ${SIZES.BREAK_SM}) {
    font-size: 1rem;
    margin-bottom: 0.75rem;
  }
`;

const Body = styled(P)`
  margin-bottom: 0;
  && {
    font-size: 1.125rem;
    @media (max-width: ${SIZES.BREAK_SM}) {
      font-size: 1rem;
    }
  }
`;

const Tag = styled(P)`
  && {
    font-size: 0.875rem;
    line-height: 1;
    @media (max-width: ${SIZES.BREAK_SM}) {
      font-size: 0.75rem;
      margin-bottom: 0.5rem;
    }
  }
  color: ${COLORS.GREY};
  margin-bottom: 0.75rem;
  font-family: ${FONTS.MONO};
`;

const ListItem = ({ title, body, tag, ...rest }) => (
  <Wrapper {...rest}>
    {tag && <Tag>{tag}</Tag>}
    {title && <Title>{title}</Title>}
    {body && <Body>{body}</Body>}
  </Wrapper>
);

export default ListItem;
