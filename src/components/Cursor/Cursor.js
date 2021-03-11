import React, { useEffect } from "react"
import styled from "styled-components"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

const StyledDiv = styled.div`
  width: 50px;
  height: 50px;
  position: fixed;
  top: 0;
  left: 0;
  border: 1px solid ${({ theme }) => theme.pink};
  background-color: rgb(249 139 176 / 15%);
  backdrop-filter: saturate(4);
  opacity: 0.5;
  border-radius: 50%;
  z-index: 99999;
  pointer-events: none;
  transition: width 0.3s, height 0.3s, background-color 0.3s;
  &.hoverState {
    width: 20px;
    height: 20px;
    background-color: ${({ theme }) => theme.pink};
  }
`

const Cursor = () => {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)

    gsap.set(".cursor", { xPercent: -50, yPercent: -50, autoAlpha: 0 })
    const circle = document.querySelector(".cursor")
    let pos = { x: window.innerWidth / 2, y: window.innerHeight / 2 }
    let mouse = { x: pos.x, y: pos.y }
    let speed = 0.15
    let fpms = 60 / 1000
    let xSet = gsap.quickSetter(circle, "x", "px")
    let ySet = gsap.quickSetter(circle, "y", "px")

    function mouseMoveHandler(e) {
      mouse.x = e.x
      mouse.y = e.y

      let allHoveredLayers = e.composedPath()
      let isHoveredLayerLink = allHoveredLayers.filter(layer => {
        return layer.tagName === "A" || layer.tagName === "BUTTON"
      })
      isHoveredLayerLink.length
        ? circle.classList.add("hoverState")
        : circle.classList.remove("hoverState")

      // if (
      //   e.target.tagName.toLowerCase() === "a" ||
      //   e.target.tagName.toLowerCase() === "button"
      // ) {
      //   circle.classList.add("hoverState")
      // } else {
      //   circle.classList.remove("hoverState")
      // }
    }

    gsap.ticker.add((time, deltaTime) => {
      let delta = deltaTime * fpms
      let dt = 1.0 - Math.pow(1.0 - speed, delta)
      pos.x += (mouse.x - pos.x) * dt
      pos.y += (mouse.y - pos.y) * dt
      xSet(pos.x)
      ySet(pos.y)
    })

    const initAnimation = () => {
      gsap.set(".cursor", {
        autoAlpha: 0.5,
        duration: 1,
        delay: 2,
      })
    }

    ScrollTrigger.matchMedia({
      "(min-width: 1025px)": () => {
        circle.style.display = "block"
        window.addEventListener("mousemove", mouseMoveHandler, true)
        window.addEventListener(
          "mousemove",
          function () {
            initAnimation()
          },
          { once: true }
        )
      },
      "(max-width: 1024px)": () => {
        circle.style.display = "none"
        window.removeEventListener("mousemove", mouseMoveHandler, true)
        window.addEventListener(
          "mousemove",
          function () {
            initAnimation()
          },
          { once: true }
        )
      },
    })
  })

  return <StyledDiv className="cursor"></StyledDiv>
}

export default Cursor
