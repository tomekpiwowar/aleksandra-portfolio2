import React from "react"
import styled from "styled-components"

const StyledDiv = styled.div`
  display: none;
  width: 100px;
  height: auto;
  position: absolute;
  top: 10px;
  background-color: ${({ theme }) =>
    theme.isDark ? theme.darkGrey : theme.white};
  z-index: 2;

  @media (max-width: 1024px) {
    display: flex;
    flex-direction: column;
    justify-self: center;
    align-self: center;
  }
`

const SwipeIcon = styled.div`
  display: flex;
  justify-content: center;

  & > div {
    width: 15px;
    height: 15px;
    background: ${({ theme }) => theme.pink};
    border-radius: 50%;
    animation: swipe 2s 0.2s infinite;
  }
`

const StyledParagraph = styled.p`
  color: ${({ theme }) => (theme.isDark ? theme.white : theme.darkGrey)};
  margin: 20px 0 0;
  @media (max-width: 1024px) {
    margin-top: 0;
    padding: 20px;
  }
`

const MobileHint = () => (
  <StyledDiv>
    <span>Swipe</span>
    <SwipeIcon className="swipe-icon">
      <div></div>
    </SwipeIcon>
  </StyledDiv>
)

export default MobileHint
