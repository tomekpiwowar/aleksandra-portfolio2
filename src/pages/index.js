import React, { useEffect } from "react"
import styled from "styled-components"
import { graphql } from "gatsby"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import Container from "../components/Container/Container"

const HeroContainer = styled(Container)`
  height: calc(100vh - (87px * 2));
  justify-content: center;
  //display: grid;
  //grid-template-columns: 52% 43.5%;
  //justify-content: space-between;
  div.hero-images-wrapper {
    display: flex;
    justify-content: center;
    width: 100%;
    img {
      //height: 100%;
      width: auto;
      @media (max-width: 768px) {
        max-width: 65vw;
        padding: 0 10px !important;
        align-self: flex-start;
      }
    }
    img:nth-child(2) {
      padding: 30px 0 30px 30px;
      @media (max-width: 768px) {
        align-self: flex-end;
        position: relative;
        top: -15%;
      }
    }
    @media (max-width: 768px) {
      flex-direction: column;
      align-items: center;
    }
  }
  @media (max-width: 768px) {
    height: auto;
  }
`

const IndexPage = ({ data }) => {
  useEffect(() => {
    //setTimeout(() => {
    gsap.registerPlugin(ScrollTrigger)
    ScrollTrigger.refresh()
    //}, 500)

    const body = document.querySelector("body")
    const heroImages = [
      ...document.querySelectorAll(".hero-images-wrapper img"),
    ]
    const heroImage1 = heroImages[0]
    const heroImage2 = heroImages[1]

    gsap.set(heroImage1, {
      transformStyle: "preserve-3d",
      backfaceVisibility: "hidden",
      outline: "1px solid transparent",
    })
    gsap.set(heroImage2, {
      transformStyle: "preserve-3d",
      backfaceVisibility: "hidden",
      outline: "1px solid transparent",
    })

    body.addEventListener("mousemove", e => {
      let sxPos = (e.pageX / body.clientWidth) * 100 - 50
      let syPos = (e.pageY / body.clientHeight) * 100 - 50
      //console.log("x:" + sxPos + ", y:" + syPos)
      gsap.to(heroImage1, {
        duration: 1,
        rotationY: 0.08 * sxPos,
        rotationX: 0.03 * syPos,
        rotationZ: "0",
        y: -0.2 * syPos,
        x: -0.5 * sxPos,
        transformPerspective: 500,
        transformOrigin: "center center",
        boxShadow: "0 0 1px rgba(0, 0, 0, 0.05)",
      })
      gsap.to(heroImage2, {
        duration: 1,
        rotationY: 0.08 * sxPos,
        rotationX: 0.03 * syPos,
        rotationZ: "0",
        y: -0.2 * syPos,
        x: -0.5 * sxPos,
        transformPerspective: 500,
        transformOrigin: "center center",
        boxShadow: "0 0 1px rgba(0, 0, 0, 0.05)",
      })
      // gsap.to(heroImage2, {
      //   duration: 1,
      //   rotationY: 0.1 * sxPos,
      //   rotationX: 0.15 * syPos,
      //   rotationZ: 0,
      //   transformPerspective: 500,
      //   transformOrigin: "center center",
      // })
    })
  })
  return (
    <>
      <HeroContainer>
        <div className="hero-images-wrapper">
          <img
            src={data.hero1.childImageSharp.fluid.src}
            srcSet={data.hero1.childImageSharp.fluid.srcSrt}
            sizes={data.hero1.childImageSharp.fluid.sizes}
            alt="Aleksandra Kiszka Summer 2017 collection dress"
          />
          <img
            src={data.hero2.childImageSharp.fluid.src}
            srcSet={data.hero2.childImageSharp.fluid.srcSrt}
            sizes={data.hero2.childImageSharp.fluid.sizes}
            alt="Aleksandra Kiszka Summer 2017 collection dress 2"
          />
        </div>
      </HeroContainer>
    </>
  )
}

export const query = graphql`
  query {
    hero1: file(name: { eq: "hero1" }) {
      childImageSharp {
        fluid(maxWidth: 1000, quality: 100) {
          src
          srcSet
          sizes
        }
      }
    }
    hero2: file(name: { eq: "hero2" }) {
      childImageSharp {
        fluid(maxWidth: 800, quality: 100) {
          src
          srcSet
          sizes
        }
      }
    }
  }
`

export default IndexPage
