import React from "react"
import styled from "styled-components"

const SwitchWrapper = styled.label`
  display: inline-block;
  height: 26px;
  position: relative;
  width: 50px;
  @media (max-width: 1024px) {
    position: absolute;
    left: 20px;
    z-index: ${({ isOpen }) => (isOpen ? "1" : "-1")};
    opacity: ${({ isOpen }) => (isOpen ? "1" : "0")};
    transition: ${({ isOpen }) =>
      isOpen ? "opacity 0.7s 0.5s ease;" : "none"};
  }
`

const StyledSwitch = styled.div`
  background-color: ${({ theme }) =>
    theme.isDark ? theme.black : theme.lightGrey};
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
  padding: 0 5px 0 7px;
  box-shadow: ${({ theme }) =>
    theme.isDark ? "0px 0px 13px 0px #f3f3f354" : null};
  &:before {
    background-color: ${({ theme }) =>
      theme.isDark ? theme.darkGrey : theme.white};
    bottom: 4px;
    content: "";
    height: 18px;
    left: 4px;
    position: absolute;
    transition: 0.4s;
    width: 18px;
    border-radius: 50%;
    z-index: 2;
  }
  span {
    position: relative;
    filter: brightness(5);
    z-index: 1;
    line-height: 1;
  }
  span:first-child {
    font-size: 10px;
    transform: rotate(90deg);
    position: relative;
    bottom: 1px;
  }
  span:nth-child(2) {
    font-size: 13px;
    top: 1px;
  }
`

const StyledCheckbox = styled.input`
  display: none;
  &:checked + ${StyledSwitch}:before {
    transform: translateX(24px);
  }
`

const ThemeSwitcher = ({ themeContext, isOpen }) => (
  <SwitchWrapper htmlFor="checkbox" isOpen={isOpen}>
    <StyledCheckbox
      type="checkbox"
      id="checkbox"
      onChange={() => themeContext.toggleDark()}
      checked={themeContext.isDark}
    />
    <StyledSwitch>
      <span role="img" aria-label="moon">
        🌙
      </span>
      <span>☀️</span>
    </StyledSwitch>
  </SwitchWrapper>
)

export default ThemeSwitcher
