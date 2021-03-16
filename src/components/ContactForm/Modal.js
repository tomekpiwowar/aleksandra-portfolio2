import React from "react"
import styled from "styled-components"

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  width: 100vw;
  height: 100vh;
  z-index: 99999999;
  background: #00000080;
  display: ${({ isOpen }) => (isOpen ? "flex" : "none")};
  justify-content: center;
  align-items: center;
`

const ModalWrapper = styled.div`
  width: 100%;
  max-width: 500px;
  height: auto;
  min-height: 300px;
  padding: 15px;
  background: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

const StyledParagraph = styled.p`
  margin-bottom: 30px;
`

const StyledButton = styled.button`
  width: 120px;
  padding: 10px;
  margin-top: 10px;
  background-color: transparent;
  border: 2px solid
    ${({ theme }) => (theme.isDark ? theme.light : theme.primary)};
  text-transform: uppercase;
  color: ${({ theme }) => (theme.isDark ? theme.light : theme.primary)};
  font-weight: 600;
  font-size: ${({ theme }) => theme.font.size.l};
  letter-spacing: 1px;
  box-shadow: none;
  outline: none;
  text-decoration: none;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  z-index: 1;

  &::after {
    position: absolute;
    content: "";
    display: block;
    height: 0px;
    width: 0px;
    border-radius: 100px;
    //background-color: #edcdc2;
    background: #f98bb0;
    z-index: -1;
    transition: height 0.3s ease-in, width 0.3s ease-in;
  }

  &:hover::after {
    height: 140px;
    width: 140px;
  }
`

const Modal = ({ isOpen, closeModal }) => {
  return (
    <ModalOverlay isOpen={isOpen}>
      <ModalWrapper>
        <StyledParagraph className="modal-message"></StyledParagraph>
        <StyledButton onClick={closeModal}>Ok</StyledButton>
      </ModalWrapper>
    </ModalOverlay>
  )
}

export default Modal
