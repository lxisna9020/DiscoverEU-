import * as React from "react"
import { Link } from "react-scroll"
import styled from "styled-components"
import { FaBars } from "react-icons/fa"
import { menuData } from "../data/MenuData"
import { Button } from "./Button"
import "../styles/index.css"

const Header = ({}) => {
  return (
    <Nav>
      <NavLink to="/">
        <img alt="Logo" src={"../../logo.png"} className="logo_header" />
      </NavLink>
      <Bars />
      <NavMenu>
        {menuData.map((item, index) => (
          <NavLink
            to={item.link}
            key={index}
            activeClass="active"
            spy={true}
            smooth={true}
          >
            {item.title}
          </NavLink>
        ))}
      </NavMenu>
      <NavLogin>
        <Button id="book" primary="true" round="true" to="/book">
          BOOK
        </Button>
      </NavLogin>
    </Nav>
  )
}

export default Header

const Nav = styled.nav`
  background: transparent;
  height: 80px;
  display: flex;
  justify-content: space-between;
  padding: 0.5rem calc((100vw - 1300px) / 2);
  z-index: 10;
  position: relative;
`

const NavMenu = styled.div`
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  margin-right: -24px;

  @media screen and (max-width: 768px) {
    display: flex;
    flex-flow: column nowrap;
    bacground-color: #ccc;
    right: 0;
    height: 50vh;
    width: 300px;
    padding-top: 1rem;
  }
`

const NavLink = styled(Link)`
  color: #fff;
  display: flex;

  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;

  &.hover {
    color: #f26a2e;
    transition: 0.3s ease-out;
  }
`
const Bars = styled(FaBars)`
  display: none;
  cursor: pointer;
  color: #fff;

  @media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 75%);
    font-size: 1.8rem;
    cursor: pointer;
  }
`
// 屏幕小于768，不显示
const NavLogin = styled.div`
  display: flex;
  align-items: center;
  margin-right: 44px;

  @media screen and (max-width: 768px) {
    display: none;
  }
`
