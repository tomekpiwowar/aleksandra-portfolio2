import React, { useEffect } from "react"
import styled from "styled-components"
import { gsap } from "gsap"

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
    gsap.set(".cursor", { xPercent: -50, yPercent: -50 })
    const circle = document.querySelector(".cursor")
    let pos = { x: window.innerWidth / 2, y: window.innerHeight / 2 }
    let mouse = { x: pos.x, y: pos.y }
    let speed = 0.1
    let fpms = 60 / 1000
    let xSet = gsap.quickSetter(circle, "x", "px")
    let ySet = gsap.quickSetter(circle, "y", "px")
    window.addEventListener("mousemove", e => {
      mouse.x = e.x
      mouse.y = e.y
      //let elementMouseIsOver = document.elementFromPoint(mouse.x, mouse.y)
      if (e.target.tagName.toLowerCase() === ("a" || "button")) {
        circle.classList.add("hoverState")
        //console.log(e.target)
      } else {
        circle.classList.remove("hoverState")
        //console.log("normal")
      }
    })
    gsap.ticker.add((time, deltaTime) => {
      let delta = deltaTime * fpms
      let dt = 1.0 - Math.pow(1.0 - speed, delta)
      pos.x += (mouse.x - pos.x) * dt
      pos.y += (mouse.y - pos.y) * dt
      xSet(pos.x)
      ySet(pos.y)
    })
  })
  return <StyledDiv className="cursor"></StyledDiv>
}

export default Cursor
