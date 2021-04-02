import React from "react"
import styled from "styled-components"
import { gsap } from "gsap"

const StyledDiv = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  place-items: center;
  position: fixed;
  top: 0;
  left: 0;
  background-color: ${({ theme }) =>
    theme.isDark ? theme.darkGrey : theme.white};
  z-index: 2;
  display: none;
`

const LoaderIcon = styled.div`
  display: flex;
  justify-content: center;

  & > div {
    width: 26px;
    height: 26px;
    margin: 20px 10px;
    background: ${({ theme }) => theme.pink};
    border-radius: 50%;
    animation: bouncing-loader 0.6s infinite alternate;
  }
  & > div:nth-child(2) {
    animation-delay: 0.2s;
  }
  & > div:nth-child(3) {
    animation-delay: 0.4s;
  }
`

export const handleLoader = {
  initLoader: () => {
    if (document.querySelector(".loader")) {
      gsap.set(".loader", { autoAlpha: 1, display: "grid" })
      gsap.set("body", { overflowY: "hidden" })
    }
  },

  disableLoader: () => {
    if (document.querySelector(".loader")) {
      let tl = gsap.timeline()
      tl.to(".loader", {
        opacity: 0,
        duration: 2,
      })
      tl.to(".loader", {
        autoAlpha: 0,
        display: "none",
        duration: 1.5,
        ease: "power4",
      })
      gsap.set("body", { overflowY: "auto" })
      //console.log("loaded")
    }
  },
}

export const Loader = () => (
  <StyledDiv className="loader">
    <LoaderIcon className="bouncing-loader">
      <div></div>
      <div></div>
      <div></div>
    </LoaderIcon>
  </StyledDiv>
)

//export default Loader
