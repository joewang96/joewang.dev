import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';
import { SIZES, FONTS, MISC } from '../../tokens';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex-basis: 50%;

  &:first-of-type {
    margin-right: 2.125rem;
  }

  @media (max-width: ${SIZES.BREAK_MD}) {
    width: 100%;
    flex-basis: 100%;

    &:first-of-type {
      margin-bottom: 60px;
      margin-right: 0;
    }
  }
  @media (max-width: ${SIZES.BREAK_SM}) {
    &:first-of-type {
      margin-bottom: 52px;
    }
  }
`;

const Tag = styled.p`
  font-family: ${FONTS.NOTO_SANS};
  font-size: 1.125rem;
  line-height: 1.5;
  margin-bottom: 0;
  padding: 0 16px;

  @media (max-width: ${SIZES.BREAK_SM}) {
    padding: 0 ${SIZES.PADDING_MOBILE};
    font-size: 1rem;
  }
`;

const Title = styled.strong`
  font-family: ${FONTS.BIRYANI};
`;

const Image = styled.div`
  width: 100%;
  padding-bottom: 72.5%;
  transition: transform 200ms ease-in-out;
  margin-bottom: 16px;

  background: radial-gradient(circle, #fafaff 0%, #eff0ff 100%);
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  border-radius: ${SIZES.BORDER_RADIUS};
  box-shadow: ${MISC.BOX_SHADOW};

  @media (max-width: ${SIZES.BREAK_MD}) {
    padding-bottom: 60%;
  }
  @media (max-width: ${SIZES.BREAK_SM}) {
    padding-bottom: 62.5%;
    border-radius: 0px;
  }

  &:hover,
  &:focus {
    transform: scale(0.975);
  }
`;

const PortfolioItem = ({ id, title, body, to, image }) => {
  return (
    <Wrapper>
      <Link to={to} aria-labelledby={id}>
        <Image
          style={{
            backgroundImage: `url(${image})`,
          }}
        />
      </Link>
      <Tag id={id} aria-hidden="true">
        <Title>{title}</Title> — {body}
      </Tag>
    </Wrapper>
  );
};

export default PortfolioItem;
