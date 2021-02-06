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
    setTimeout(() => {
      gsap.registerPlugin(ScrollTrigger)
      ScrollTrigger.refresh()
    }, 500)
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
