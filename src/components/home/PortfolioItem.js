import React from 'react';
import styled, { css } from 'styled-components';
import { Link } from 'gatsby';
import { SIZES, FONTS, COLORS } from '../../tokens';

const Tag = styled.div`
  font-family: ${FONTS.SERIF};
  font-style: italic;
  font-size: 1rem;
  line-height: 1.4;
  text-align: ${({ leftAlign }) => (leftAlign ? 'left' : 'right')};
  ${({ above }) =>
    above
      ? css`
          margin-bottom: 1rem;
        `
      : css`
          margin-top: 1rem;
        `}

  @media (max-width: ${SIZES.BREAK_MD}) {
    margin-top: 0.75rem;
    font-size: 0.875rem;
    padding: 0 0.75rem;
    margin-bottom: 0;
    text-align: left;
  }
  @media (max-width: ${SIZES.BREAK_SM}) {
    margin-top: 0.875rem;
    font-size: 1rem;
    padding: 0 0.75rem;
  }
`;

const Image = styled.div`
  width: 100%;
  padding-bottom: ${({ ratio }) => ratio || '66%'};
  transition: transform 200ms ease-in-out;
  // margin-bottom: 16px;

  background: radial-gradient(circle, #fafaff 0%, #eff0ff 100%);
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  border-radius: ${SIZES.BORDER_RADIUS};

  @media (max-width: ${SIZES.BREAK_MD}) {
    padding-bottom: 70%;
  }
  @media (max-width: ${SIZES.BREAK_SM}) {
    padding-bottom: 62.5%;
  }
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: ${({ above }) => (above ? 'column-reverse' : 'column')};
  flex-basis: ${({ basis }) => basis || '50%'};
  position: relative;

  &:first-of-type {
    margin-right: 2.125rem;
  }

  @media (max-width: ${SIZES.BREAK_MD}) {
    width: 100%;
    flex-basis: 100%;
    flex-direction: column;

    &:first-of-type {
      margin-right: 1.25rem;
    }
  }
  @media (max-width: ${SIZES.BREAK_SM}) {
    &:first-of-type {
      margin-bottom: 40px;
    }
  }

  &:hover,
  &:focus {
    ${Image} {
      transform: scale(0.975);
    }
  }
`;

const PortfolioItem = ({
  id,
  title,
  to,
  image,
  basis,
  ratio,
  above = false,
  left = true,
}) => {
  return (
    <Wrapper basis={basis} above={above}>
      <Link to={to} aria-labelledby={id}>
        <Image
          ratio={ratio}
          style={{
            backgroundImage: `url(${image})`,
          }}
        />
      </Link>
      <Tag above={above} leftAlign={left}>
        {title}
      </Tag>
    </Wrapper>
  );
};

export default PortfolioItem;
