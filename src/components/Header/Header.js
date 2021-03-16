import React, { useContext, useState } from "react"
import styled from "styled-components"
import { Link } from "gatsby"
import { ThemeManagerContext } from "gatsby-styled-components-dark-mode"
import Container from "../Container/Container"
import ThemeSwitcher from "./ThemeSwitcher"
import Hamburger from "./Hamburger"

const StyledHeader = styled.header`
  width: 100%;
`

const HeaderContainer = styled(Container)`
  justify-content: space-between;
  align-items: center;
  padding-top: 30px;
  padding-bottom: 30px;
  @media (max-width: 1024px) {
    padding-top: 20px;
    padding-bottom: 20px;
  }
`

const Logo = styled.h1`
  font-size: ${({ theme }) => theme.font.size.l};
  margin: 0;
  a {
    text-decoration: none;
    cursor: pointer;
    color: ${({ theme }) => (theme.isDark ? theme.light : theme.primary)};
    font-family: "Montserrat";
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.3rem;
  }
`

const StyledNav = styled.nav`
  //position: relative;
  //right: -65px;
  display: inline-flex;
  align-items: center;

  @media (max-width: 1024px) {
    //position: unset;
  }
`

const NavigationWrapper = styled.ul`
  list-style: none;
  display: flex;
  align-items: center;

  @media (max-width: 1024px) {
    position: absolute;
    top: 0;
    right: 0;
    width: ${({ isOpen }) => (isOpen ? "100vw" : "0")};
    height: 100vh;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background: ${({ theme }) =>
      theme.isDark ? theme.primaryOpacity : theme.whiteOpacity};
    transition: width 0.3s ease-in;
    z-index: 1;
  }
  li {
    a {
      margin: 15px 15px;
      text-transform: uppercase;
      font-weight: 500;
      font-size: ${({ theme }) => theme.font.size.s};
      color: ${({ theme }) => (theme.isDark ? theme.grey : theme.primary)};
      text-decoration: none;
      position: relative;
      &::after {
        content: "";
        display: block;
        width: 0;
        height: 3px;
        background-color: ${({ theme }) => theme.pink};
        position: absolute;
        left: 50%;
        transform: translateX(-50%);
        transition: width 0.3s ease;
      }
      &.active::after,
      &:hover::after {
        width: 100%;
      }
      @media (max-width: 1024px) {
        display: block;
        font-size: ${({ theme }) => theme.font.size.xl};
        opacity: ${({ isOpen }) => (isOpen ? "1" : "0")};
        transition: color 0.3s ease, opacity 0.5s 0.3s ease;
      }
    }
    &:last-child {
      a {
        margin-right: 30px;
        @media (max-width: 1024px) {
          margin-right: 15px;
        }
      }
    }
  }
  @media (max-width: 1024px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`

const Header = props => {
  const [isMenuOpen, setMenuState] = useState(false)

  const toggleMobileMenu = () => {
    setMenuState(!isMenuOpen)
    handleScreenOverflow()
  }

  const closeMenu = () => {
    isMenuOpen && toggleMobileMenu()
  }

  const handleScreenOverflow = () => {
    const bodyEl = document.body
    isMenuOpen
      ? (bodyEl.style.overflow = "visible")
      : (bodyEl.style.overflow = "hidden")
  }

  const themeContext = useContext(ThemeManagerContext)

  return (
    <StyledHeader>
      <HeaderContainer>
        <Logo className="intro__logo">
          <Link to="/">Aleksandra Portfolio</Link>
        </Logo>
        <StyledNav className="intro__main-nav">
          <NavigationWrapper isOpen={isMenuOpen}>
            <li>
              <Link to="/" activeClassName="active" onClick={closeMenu}>
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/graphic-design"
                activeClassName="active"
                onClick={closeMenu}
              >
                Graphic design
              </Link>
            </li>
            <li>
              <Link to="/fashion" activeClassName="active" onClick={closeMenu}>
                Fashion
              </Link>
            </li>
            <li>
              <Link to="/videos" activeClassName="active" onClick={closeMenu}>
                Videos
              </Link>
            </li>
            <li>
              <Link to="/contact" activeClassName="active" onClick={closeMenu}>
                Contact
              </Link>
            </li>
          </NavigationWrapper>
          <ThemeSwitcher themeContext={themeContext} isOpen={isMenuOpen} />
          <Hamburger
            className="intro__hamburger"
            onClick={toggleMobileMenu}
            isOpen={isMenuOpen}
          />
        </StyledNav>
      </HeaderContainer>
    </StyledHeader>
  )
}

export default Header
