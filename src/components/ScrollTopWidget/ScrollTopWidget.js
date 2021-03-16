import React, { useEffect } from "react"
import styled from "styled-components"
import Icon from "../../assets/images/icons/up-arrow.svg"

const StyledButton = styled.button`
  width: 60px;
  height: 60px;
  position: fixed;
  bottom: 14px;
  right: 15px;
  display: flex;
  transform: translateY(75px);
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.pink};
  backdrop-filter: saturate(4);
  outline: none;
  border: none;
  border-radius: 50%;
  z-index: 99999;
  overflow: hidden;
  transition: transform 0.4s ease;
  &:before {
    content: "";
    position: absolute;
    width: 85%;
    height: 85%;
    border-radius: 50%;
    background-color: ${({ theme }) => theme.pink};
    animation: ping 1.5s ease-in-out infinite both;
  }
  &.show-btn {
    transform: translateY(0px);
    &:hover {
      overflow: visible;
    }
    &:hover:before {
      animation: ping 1.5s ease-in-out infinite both;
    }
    svg {
      transform: translateY(0);
    }
  }
  svg {
    width: 45%;
    overflow: visible;
    fill: #000;
    stroke: #000;
    stroke-width: 3;
    transform: translateY(65px);
    transition: transform 0.4s 0.2s ease;
  }
`

const ScrollTopWidget = () => {
  useEffect(() => {
    const ScrollTopBtn = document.querySelector(".ScrollTopBtn")

    const showBtn = "show-btn"

    let targetScroll = window.innerHeight

    function toggleButtonVisibility() {
      const scrollY = this.pageYOffset

      if (scrollY > targetScroll) {
        ScrollTopBtn.classList.add(showBtn)
      } else {
        ScrollTopBtn.classList.remove(showBtn)
      }
    }

    function handleClick() {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      })
    }

    window.addEventListener("scroll", toggleButtonVisibility)

    window.addEventListener("resize", () => {
      targetScroll = window.innerHeight
    })

    ScrollTopBtn.addEventListener("click", handleClick)
  })

  return (
    <StyledButton className="ScrollTopBtn">
      <Icon />
    </StyledButton>
  )
}

export default ScrollTopWidget
