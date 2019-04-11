import { Link } from "gatsby"
import styled from "styled-components"
import React from "react"
import A from "../elements/A"
import P from "../elements/P"
import SocialIcon from "../components/SocialIcon"
import * as resume from "../misc/Joseph_Wang_Resume.pdf"

import { COLORS, SIZES } from "../tokens"

const Styled_Footer = styled.footer`
  margin-bottom: 60px;
  padding: 0 ${SIZES.PADDING_DESKTOP};

  @media (max-width: ${SIZES.BREAK_LG}) {
    padding: 0 ${SIZES.PADDING_TABLET};
  }

  @media (max-width: ${SIZES.BREAK_SM}) {
    padding: 0 ${SIZES.PADDING_MOBILE};
    margin-bottom: 30px;
  }
`
const Footer__Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;

  @media (max-width: ${SIZES.BREAK_MD}) {
    flex-direction: column;
    align-items: flex-start;
  }
`
const Footer__Message_Social = styled.div`
  max-width: 400px;
  display: flex;
  flex-direction: column;

  @media (max-width: ${SIZES.BREAK_MD}) {
    margin-bottom: 28px;
  }
`
const SocialList = styled.ul`
  list-style: none;
  position: relative;

  &:before {
    content: " ";
    position: absolute;
    top: 0;
    bottom: 0;
    margin: auto;
    right: calc(100% + 32px);
    width: 100px;
    height: 1px;
    background: #e0e0e0;
  }
`
const SocialList__Item = styled.li`
  display: inline-block;
  &:not(:last-child) {
    margin-right: 26px; // 36 - 10 (padding 5 for each) = 26
  }
`
const Footer__Sitemap_Copyright = styled.div`
  display: flex;
  flex-direction: column;
`
const SiteMap = styled.ul`
  list-style: none;
  margin-bottom: 24px;
`
const SiteMap__Item = styled.li`
  display: inline-block;
  &:not(:last-child) {
    margin-right: 40px;
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
`
const Copyright_Text = styled(P)`
  && {
    font-size: 14px;
  }
  font-family: "PT Mono", monospace;
`
const Footer__Message_Text = styled(P)`
  font-family: "Noto Serif", Georigia, serif;
  font-weight: normal;
  line-height: 1.66;
  margin-bottom: 60px;
  color: ${COLORS.BLACK};
  && {
    font-size: 24px;
  }

  @media (max-width: ${SIZES.BREAK_MD}) {
    margin-bottom: 24px;
  }
`

const Footer = () => (
  <Styled_Footer>
    <Footer__Container>
      <Footer__Message_Social>
        <Footer__Message_Text>
          Seems like you reached the end. Feel free to get in touch!
        </Footer__Message_Text>
        <SocialList>
          <SocialList__Item>
            <SocialIcon
              iconClass="icon-github"
              targetBlank
              href="https://github.com/joewang96"
              ariaLabel="View my Github profile."
            />
          </SocialList__Item>
          <SocialList__Item>
            <SocialIcon
              iconClass="icon-linkedin"
              targetBlank
              href="https://www.linkedin.com/in/joseph-wang-7b0751129/"
              ariaLabel="View my LinkedIn profile."
            />
          </SocialList__Item>
          <SocialList__Item>
            <SocialIcon
              iconClass="icon-gmail"
              href="mailto:wang.jo@husky.neu.edu"
              ariaLabel="Send me an email."
            />
          </SocialList__Item>
          <SocialList__Item>
            <SocialIcon
              iconClass="icon-dribbble"
              targetBlank
              href="https://dribbble.com/josephwang"
              ariaLabel="View my Dribbble profile."
            />
          </SocialList__Item>
        </SocialList>
      </Footer__Message_Social>

      <Footer__Sitemap_Copyright>
        <SiteMap>
          <SiteMap__Item>
            <Link to="/">Home</Link>
          </SiteMap__Item>
          <SiteMap__Item>
            <Link to="/about">About</Link>
          </SiteMap__Item>
          <SiteMap__Item>
            <A href={resume} target="_blank">
              Resume
            </A>
          </SiteMap__Item>
        </SiteMap>
        <Copyright_Text>
          Copyright &copy; {new Date().getFullYear()} Joseph Wang
        </Copyright_Text>
      </Footer__Sitemap_Copyright>
    </Footer__Container>
  </Styled_Footer>
)

export default Footer
