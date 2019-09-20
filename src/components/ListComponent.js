import React from 'react';
import styled from 'styled-components';
import P from '../elements/P';
import { SIZES } from '../tokens';
import TitleSubtitle from './TitleSubtitle';
import A from '../elements/A';
import * as resume from '../misc/Joseph_Wang_Resume.pdf';

const Title = styled.div`
  width: 100%;
  max-width: 31rem;
  margin-right: 92px;
  box-sizing: content-box;

  @media (min-width: ${parseInt(SIZES.BREAK_MD, 10) + 1}px) {
    position: sticky;
    top: 1rem;
    height: 100%;
  }

  @media (max-width: ${SIZES.BREAK_LG}) {
    margin-right: 72px;
  }
  @media (max-width: ${SIZES.BREAK_MD}) {
    margin-bottom: 60px;
    max-width: 600px;
  }

  @media (max-width: ${SIZES.BREAK_SM}) {
    margin-bottom: 36px;
    max-width: 100%;
  }
`;

const Content = styled.div`
  flex-grow: 1;
  max-width: 48%;

  @media (min-width: ${parseInt(SIZES.BREAK_MD, 10) + 1}px) {
    margin-top: 3.125rem;
  }

  @media (max-width: ${SIZES.BREAK_MD}) {
    max-width: 540px;
    width: 100%;
  }
`;

const Wrapper = styled.section`
  padding: 0 ${SIZES.PADDING_DESKTOP};
  margin-bottom: 136px;
  display: flex;
  justify-content: space-between;
  position: relative;

  @media (max-width: ${SIZES.BREAK_LG}) {
    padding: 0 ${SIZES.PADDING_TABLET};
    margin-bottom: 100px;
  }

  @media (max-width: ${SIZES.BREAK_MD}) {
    flex-direction: column;
    margin-bottom: 60px;
  }

  @media (max-width: ${SIZES.BREAK_SM}) {
    padding: 0 ${SIZES.PADDING_MOBILE};
    margin-bottom: 40px;
  }
`;

const ListComponent = ({ title, content, ...rest }) => {
  return (
    <Wrapper {...rest}>
      <Title>
        <TitleSubtitle
          title="Where have I worked."
          subtitle="Experiences that helped me grow"
        />
        <P>
          I’ve been fortunate enough to have been able to work for a variety of
          great companies in both design and engineering roles. For more
          information, view my{' '}
          <A href={resume} target="_blank">
            full résumé
          </A>
          .
        </P>
      </Title>
      <Content>{content}</Content>
    </Wrapper>
  );
};

export default ListComponent;
