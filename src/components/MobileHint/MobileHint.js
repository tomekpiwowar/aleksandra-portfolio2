import React from "react"
import styled from "styled-components"

const StyledDiv = styled.div`
  display: none;
  width: 100px;
  height: auto;
  margin: 10vh auto 0 auto;
  text-align: center;
  background-color: ${({ theme }) =>
    theme.isDark ? theme.darkGrey : theme.white};
  z-index: 2;

  @media (max-width: 1024px) {
    display: flex;
    flex-direction: column;
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

const StyledSpan = styled.span`
  color: ${({ theme }) => (theme.isDark ? theme.white : theme.darkGrey)};
`

const MobileHint = () => (
  <StyledDiv>
    <StyledSpan>Swipe</StyledSpan>
    <SwipeIcon className="swipe-icon">
      <div></div>
    </SwipeIcon>
  </StyledDiv>
)

export default MobileHint
