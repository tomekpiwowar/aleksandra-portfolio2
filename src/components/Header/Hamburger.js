import React from "react"
import styled from "styled-components"

const StyledHamburger = styled.button`
  display: none;
  padding: 10px 0;
  border: none;
  background: transparent;
  position: relative;
  z-index: 2;

  @media (max-width: 1024px) {
    display: block;
  }
`

const InnerHamburger = styled.div`
  position: relative;
  width: 28px;
  height: 2px;
  background-color: ${({ theme }) =>
    theme.isDark ? theme.light : theme.primary};
  background-color: ${({ isOpen }) => isOpen && "transparent"};
  transition: ${({ isOpen }) =>
    isOpen ? "background 0.2s ease-out" : "background 0.2s 0.2s ease-out"};

  &::before,
  &::after {
    content: "";
    display: block;
    position: absolute;
    width: 28px;
    height: 2px;
    background-color: ${({ theme }) =>
      theme.isDark ? theme.light : theme.primary};
    visibility: visible;
    transition: ${({ isOpen }) =>
      isOpen
        ? "background 0.2s ease-out, transform 0.2s 0.2s ease-out"
        : "transform 0.2s ease-out, background 0.2s 0.2s ease-out"};
  }

  &::before {
    top: -8px;
    transform: translateY(${({ isOpen }) => (isOpen ? "8px" : "0")})
      rotate(${({ isOpen }) => (isOpen ? "45deg" : "0")});
  }

  &::after {
    bottom: -8px;
    transform: translateY(${({ isOpen }) => (isOpen ? "-8px" : "0")})
      rotate(${({ isOpen }) => (isOpen ? "-45deg" : "0")});
  }
`

const Hamburger = ({ isOpen, ...props }) => (
  <StyledHamburger {...props}>
    <InnerHamburger isOpen={isOpen} />
  </StyledHamburger>
)

export default Hamburger
