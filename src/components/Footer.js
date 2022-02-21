import React from "react"
import styled from "styled-components"
import "../styles/index.css"
import { Link } from "gatsby"
import { AiFillApple, AiFillAndroid } from "react-icons/ai"
import { FaFacebookF, FaLinkedinIn } from "react-icons/fa"
import { BsTwitter } from "react-icons/bs"

export const Footer = () => {
  return (
    <FooterContainer>
      <FooterLinkWrapper>
        <Card>
          <FooterLinkItems>
            <FooterLinkTitle>Company</FooterLinkTitle>
            <FooterLink to="/">About Us</FooterLink>
            <FooterLink to="/">Press</FooterLink>
            <FooterLink to="/">Careers</FooterLink>
            <FooterLink to="/">Help</FooterLink>
            <FooterLink to="/">Contact Us</FooterLink>
          </FooterLinkItems>
        </Card>
        <Card>
          <FooterLinkItems>
            <FooterLinkTitle>Apps</FooterLinkTitle>
            <FooterLink to="/">
              <Apls />
              iOS
            </FooterLink>
            <FooterLink
              css={`
                display: flex;
              `}
              to="/"
            >
              <Android />
              Android
            </FooterLink>
            <FooterLink to="/">Photo</FooterLink>
            <FooterLink to="/">Data</FooterLink>
            <FooterLink to="/">Online</FooterLink>
          </FooterLinkItems>
        </Card>
        <Card>
          <FooterLinkItems>
            <FooterLinkTitle>More</FooterLinkTitle>
            <FooterLink to="/">Tickets</FooterLink>
            <FooterLink to="/">Hotels</FooterLink>
            <FooterLink to="/">Rental Cars</FooterLink>
            <FooterLink to="/">Travel Guides</FooterLink>
            <FooterLink to="/">Blog</FooterLink>
          </FooterLinkItems>
          <FooterText>
            <p>We strive to create the best experiences for our customers</p>
          </FooterText>
        </Card>
      </FooterLinkWrapper>

      <LtdWrapper>
        <LtdLogo to="/">
          <img src={"../../logo.png"} alt="Logo" className="logo_footer" />
          <LtdText>
            <p> © 2022 DiscoverEU Pty Ltd • Company Disclosure</p>
          </LtdText>
        </LtdLogo>

        <SocialIcone>
          <Faceb />
          <Linke />
          <Twit />
        </SocialIcone>
      </LtdWrapper>
    </FooterContainer>
  )
}
export default Footer

const FooterContainer = styled.div`
  width: 100%;
  height: 340px;
  background: #000;
  padding: 5rem calc((100vw-1100px) / 2);

  @media screen and (max-width: 768px) {
    height: 420px;
  }

  @media screen and (max-width: 400px) {
    height: 420px;
  }
`
const FooterLinkWrapper = styled.div`
  display: flex;
  justify-content: center;
  padding-left: 20%;
  padding-top: 2rem;
`
const Card = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 20px;

  @media screen and (max-width: 820px) {
    grid-template-columns: 1remx;
  }
`

const FooterText = styled.div`
  p {
    color: #fff;
    font-family: "Brush Script MT", cursive;
    font-size: clamp(1rem, 3vw, 2rem);
    font-weight: 100;
    padding-top: 2rem;
    padding-left: 2rem;

    @media screen and (max-width: 400px) {
      padding: 1rem;
    }
  }
`
const FooterLinkItems = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 1rem 2rem;

  @media screen and (max-width: 400px) {
    padding: 1rem;
  }
`
const FooterLinkTitle = styled.div`
  color: #fff;
  font-size: clamp(1.2rem, 5vw, 1.2rem);
  padding-bottom: 2rem;
`
const FooterLink = styled(Link)`
  color: #fff;
  display: flex;
  flex-direction: none;
  padding-bottom: 0.5rem;

  &:hover {
    color: #f26a2e;
    transition: 0.3s ease-out;
  }
`
const Apls = styled(AiFillApple)``
const Android = styled(AiFillAndroid)``

const LtdWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 1rem 2rem 2rem 0rem;
  border-top: 1px solid hsla(0, 0%, 100%, 0.1);

  @media screen and (max-width: 768px) {
    display: grid;
    margin: 0 auto;
    grid-template-columns: 1fr;
  }

  @media screen and (max-width: 500px) {
    display: grid;
    grid-template-columns: 1fr;
  }
`

const LtdLogo = styled(Link)`
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;
`
const LtdText = styled.div`
  p {
    color: hsla(0, 0%, 100%, 0.5);
  }
`

const SocialIcone = styled.div`
  color: #fff;
  display: flex;
  flex-direction: row;
  align-self: center;
  gap: 0.5rem;

  @media screen and (max-width: 768px) {
    margin: 0 auto;
  }

  @media screen and (max-width: 500px) {
    margin: 0 auto;
  }
`
const Faceb = styled(FaFacebookF)`
  display: flex;
  &:hover {
    color: #f26a2e;
    transition: 0.3s ease-out;
  }
`
const Linke = styled(FaLinkedinIn)`
  &:hover {
    color: #f26a2e;
    transition: 0.3s ease-out;
  }
`
const Twit = styled(BsTwitter)`
  &:hover {
    color: #f26a2e;
    transition: 0.3s ease-out;
  }
`
