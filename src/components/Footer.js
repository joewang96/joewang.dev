import { Link } from 'gatsby';
import styled from 'styled-components';
import React from 'react';
import A from '../elements/A';
import P from '../elements/P';
import SocialIcon from '../components/SocialIcon';
import * as resume from '../misc/Joseph_Wang_Resume.pdf';
import * as footerBg from '../images/footer_pattern.svg';

import { COLORS, SIZES } from '../tokens';

const StyledFooter = styled.footer`
  position: relative;
  padding: 0 ${SIZES.PADDING_DESKTOP} 60px;

  @media (max-width: ${SIZES.BREAK_LG}) {
    padding: 0 ${SIZES.PADDING_TABLET} 60px;
  }

  @media (max-width: ${SIZES.BREAK_SM}) {
    padding: 0 ${SIZES.PADDING_MOBILE} 40px;
  }

  &::before {
    content: " ";
    width: 100%;
    height: 100%;
    position: absolute;
    z-index: -1;
    background: url('${footerBg}');
    background-position: top right;
    background-size: contain;
    background-repeat: no-repeat;
    right: 0;
    bottom: 0;

    @media (max-width: ${SIZES.BREAK_MD}) {
      width: 50%;
      background-position: bottom right;
    }
  }
`;
const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;

  @media (max-width: ${SIZES.BREAK_MD}) {
    flex-direction: column;
    align-items: flex-start;
  }
`;
const MessageSocial = styled.div`
  max-width: 25rem;
  display: flex;
  flex-direction: column;

  @media (max-width: ${SIZES.BREAK_MD}) {
    margin-bottom: 28px;
  }
`;
const SocialList = styled.ul`
  list-style: none;
  position: relative;
`;
const SocialListItem = styled.li`
  display: inline-block;
  &:not(:last-child) {
    margin-right: 26px; // 36 - 10 (padding 5 for each) = 26
  }
`;
const SitemapCopyright = styled.div`
  display: flex;
  flex-direction: column;
`;
const SiteMap = styled.ul`
  list-style: none;
  margin-bottom: 24px;

  @media (max-width: ${SIZES.BREAK_SM}) {
    margin-bottom: 32px;
  }
`;
const SiteMapItem = styled.li`
  display: inline-block;
  &:not(:last-child) {
    margin-right: 40px;
    @media (max-width: ${SIZES.BREAK_SM}) {
      margin-right: 32px;
    }
  }

  a {
    text-decoration: none;
    color: ${COLORS.OFF_BLACK};
    font-weight: bold;
    transition: color 250ms ease-in-out;
    &:hover,
    &:focus {
      color: ${COLORS.BLUE};
    }
  }
`;
const CopyrightText = styled(P)`
  && {
    font-size: 0.875rem;
  }
  font-family: 'PT Mono', monospace;
`;
const MessageText = styled(P)`
  font-family: 'Noto Serif', Georigia, serif;
  font-weight: normal;
  line-height: 1.66;
  margin-bottom: 3.5rem;
  color: ${COLORS.BLACK};
  && {
    font-size: 1.75rem;
  }

  @media (max-width: ${SIZES.BREAK_MD}) {
    margin-bottom: 2.5rem;
    && {
      font-size: 1.5rem;
    }
  }
`;

const Footer = () => (
  <StyledFooter>
    <Container>
      <MessageSocial>
        <MessageText>
          Seems like you reached the end. Feel free to get in touch!
        </MessageText>
        <SocialList>
          <SocialListItem>
            <SocialIcon
              iconClass="icon-github"
              targetBlank
              href="https://github.com/joewang96"
              ariaLabel="View my Github profile."
            />
          </SocialListItem>
          <SocialListItem>
            <SocialIcon
              iconClass="icon-linkedin"
              targetBlank
              href="https://www.linkedin.com/in/joseph-wang-7b0751129/"
              ariaLabel="View my LinkedIn profile."
            />
          </SocialListItem>
          <SocialListItem>
            <SocialIcon
              iconClass="icon-gmail"
              href="mailto:wang.jo@husky.neu.edu"
              ariaLabel="Send me an email."
            />
          </SocialListItem>
          <SocialListItem>
            <SocialIcon
              iconClass="icon-dribbble"
              targetBlank
              href="https://dribbble.com/josephwang"
              ariaLabel="View my Dribbble profile."
            />
          </SocialListItem>
        </SocialList>
      </MessageSocial>

      <SitemapCopyright>
        <SiteMap>
          <SiteMapItem>
            <Link to="/">Home</Link>
          </SiteMapItem>
          <SiteMapItem>
            <Link to="/about">About</Link>
          </SiteMapItem>
          <SiteMapItem>
            <A href={resume} target="_blank">
              Résumé
            </A>
          </SiteMapItem>
        </SiteMap>
        <CopyrightText>
          Copyright &copy; {new Date().getFullYear()} Joseph Wang
        </CopyrightText>
      </SitemapCopyright>
    </Container>
  </StyledFooter>
);

export default Footer;
