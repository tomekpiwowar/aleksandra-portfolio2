import React from "react"
import styled from "styled-components"
import MoonIcon from "../../assets/images/icons/moon.svg"
import SunIcon from "../../assets/images/icons/sun.svg"

const SwitchWrapper = styled.label`
  display: inline-block;
  height: 26px;
  position: relative;
  width: 48px;
  z-index: 1 !important;
  opacity: 1 !important;
  @media (max-width: 1024px) {
    position: absolute;
    left: 20px;
    z-index: ${({ isOpen }) => (isOpen ? "1" : "-1 !important")};
    opacity: ${({ isOpen }) => (isOpen ? "1" : "0 !important")};
    transition: ${({ isOpen }) =>
      isOpen ? "opacity 0.7s 0.5s ease;" : "none"};
  }
`

const StyledSwitch = styled.div`
  background-color: ${({ theme }) => (theme.isDark ? theme.black : theme.pink)};
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  top: 0;
  cursor: pointer;
  transition: 0.4s;
  transition-delay: 0s, 0.4s;
  transition-property: background-color, box-shadow;
  border-radius: 34px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 6px;
  box-shadow: ${({ theme }) =>
    theme.isDark ? "0px 0px 13px 0px #f3f3f354" : null};
  &:before {
    background-color: ${({ theme }) =>
      theme.isDark ? theme.darkGrey : theme.white};
    content: "";
    height: 20px;
    left: 3px;
    top: 50%;
    transform: translateY(-50%);
    position: absolute;
    transition: 0.4s;
    width: 20px;
    border-radius: 50%;
    z-index: 2;
  }
  svg {
    width: auto;
  }
  svg:first-child {
    height: 50%;
    fill: ${({ theme }) => theme.light};
  }
  svg:nth-child(2) {
    height: 60%;
    fill: ${({ theme }) => theme.primary};
  }
`

const StyledCheckbox = styled.input`
  display: none;
  &:checked + ${StyledSwitch}:before {
    transform: translate(22px, -50%);
  }
`

const ThemeSwitcher = ({ themeContext, isOpen }) => (
  <SwitchWrapper
    htmlFor="checkbox"
    isOpen={isOpen}
    className="intro__theme-switcher"
  >
    <StyledCheckbox
      type="checkbox"
      id="checkbox"
      onChange={() => themeContext.toggleDark()}
      checked={themeContext.isDark}
    />
    <StyledSwitch>
      <MoonIcon />
      <SunIcon />
    </StyledSwitch>
  </SwitchWrapper>
)

export default ThemeSwitcher
