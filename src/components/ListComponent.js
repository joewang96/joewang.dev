import React from 'react';
import styled, { css } from 'styled-components';
import H2 from '../elements/H2';
import { SIZES } from '../tokens';

const Title = styled(H2)`
  max-width: 21.125rem;
  margin-right: 126px;
  box-sizing: content-box;
  flex-shrink: 0;

  @media (max-width: ${SIZES.BREAK_LG}) {
    margin-right: 72px;
  }
  @media (max-width: ${SIZES.BREAK_MD}) {
    margin-bottom: 60px;
    max-width: 26.625rem;
  }

  @media (max-width: ${SIZES.BREAK_SM}) {
    margin-bottom: 36px;
    max-width: 100%;
  }
`;

const Content = styled.div`
  flex-grow: 1;
  max-width: 49rem;

  @media (max-width: ${SIZES.BREAK_MD}) {
    max-width: 37.5rem;
    margin-left: auto;
    width: 90%;
  }
  @media (max-width: ${SIZES.BREAK_SM}) {
    width: 100%;
  }
`;

const Wrapper = styled.section`
  padding: 0 0 0 ${SIZES.PADDING_DESKTOP};
  margin-bottom: 136px;
  display: flex;
  justify-content: space-between;

  @media (min-width: ${parseInt(SIZES.BREAK_LG, 10) + 1}px) {
    && {
      ${({ compact }) =>
        compact
          ? css`
              margin-left: 59px;
            `
          : 0};
    }
  }

  @media (max-width: ${SIZES.BREAK_LG}) {
    padding: 0 0 0 ${SIZES.PADDING_TABLET};
    margin-bottom: 100px;
  }

  @media (max-width: ${SIZES.BREAK_MD}) {
    flex-direction: column;
    margin-bottom: 60px;
  }

  @media (max-width: ${SIZES.BREAK_SM}) {
    padding: 0 0 0 ${SIZES.PADDING_MOBILE};
    margin-bottom: 40px;
  }
`;

const ListComponent = ({ title, content, ...rest }) => {
  return (
    <Wrapper {...rest}>
      <Title>{title}</Title>
      <Content>{content}</Content>
    </Wrapper>
  );
};

export default ListComponent;
