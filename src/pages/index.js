import React, { useEffect } from "react"
import styled from "styled-components"
import { graphql } from "gatsby"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import Container from "../components/Container/Container"
import { handleLoader } from "../components/Loader/Loader"

const HeroContainer = styled(Container)`
  height: calc(100vh - (86px + 80px));
  justify-content: center;
  align-items: center;
  //display: grid;
  //grid-template-columns: 52% 43.5%;
  //justify-content: space-between;
  div.hero-images-wrapper {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;

    img {
      height: 100%;
      width: auto;
      @media (max-width: 768px) {
        height: auto;
        width: 100%;
        max-width: 65vw;
        padding: 0 !important;
        align-self: flex-start;
      }
    }
    img:nth-child(2) {
      padding: 30px 0 30px 30px;
      @media (max-width: 768px) {
        align-self: flex-end;
        margin-top: -15%;
      }
    }
    @media (max-width: 768px) {
      flex-direction: column;
    }
  }
  @media (max-width: 768px) {
    height: auto;
  }
`

const IndexPage = ({ data }) => {
  const stage = document.querySelector("#___gatsby")
  //!stage.classList.contains("initialized") && gsap.set(stage, { autoAlpha: 0 })

  useEffect(() => {
    handleLoader.disableLoader()
    const logo = document.querySelector(".intro__logo")
    const mainNav = document.querySelector(".intro__main-nav")
    const introHamburger = document.querySelector(".intro__hamburger")
    const themeSwitcher = document.querySelector(".intro__theme-switcher")
    const footer = document.querySelector(".intro__footer")
    //setTimeout(() => {
    gsap.registerPlugin(ScrollTrigger)
    ScrollTrigger.refresh()

    !stage.classList.contains("initialized") && init()

    function initHeader() {
      let tl = gsap.timeline()
      const mainNavEl = mainNav.querySelectorAll("li")
      let screenWidth = window.screen.width
      gsap.set(mainNav, { autoAlpha: 0 })

      function initNavDesktop() {
        mainNavEl.forEach((el, i) => {
          gsap.from(el, {
            y: -50,
            opacity: 0,
            duration: 2,
            ease: "power4",
            delay: i * 0.05,
          })
        })
      }

      function initNavMobile() {
        tl.from(introHamburger, {
          x: 50,
          opacity: 0,
          duration: 1.5,
          ease: "power4",
        })
      }

      tl.from(logo, {
        y: -50,
        opacity: 0,
        duration: 2,
        ease: "power4",
      })
        .set(mainNav, { autoAlpha: 1 })
        .add(function () {
          screenWidth <= 1024 ? initNavMobile() : initNavDesktop()
        })
        .from(themeSwitcher, {
          x: 150,
          opacity: 0,
          delay: 0.6,
          duration: 1,
          ease: "power4",
        })
    }

    function initFooter() {
      let tl = gsap.timeline()

      //setTimeout(() => {
      tl.from(footer, {
        y: 50,
        opacity: 0,
        duration: 2,
        ease: "power4",
      })
    }

    function initIntro() {
      let tl = gsap.timeline()

      tl.from(
        ".intro__img1",
        {
          y: 50,
          opacity: 0,
          ease: "power4",
          duration: 2,
        },
        1
      ).from(
        ".intro__img2",
        {
          y: -50,
          opacity: 0,
          ease: "power4",
          duration: 2,
        },
        1
      )
    }

    function init() {
      //gsap.set(stage, { autoAlpha: 1 })
      initIntro()
      initHeader()
      initFooter()
    }

    const body = document.querySelector("body")
    const heroImages = [
      ...document.querySelectorAll(".hero-images-wrapper img"),
    ]

    heroImages.forEach(heroImage => {
      gsap.set(heroImage, {
        transformStyle: "preserve-3d",
        backfaceVisibility: "hidden",
        outline: "1px solid transparent",
      })
    })

    function animateHeroImages(e) {
      let sxPos = (e.pageX / body.clientWidth) * 100 - 50
      let syPos = (e.pageY / body.clientHeight) * 100 - 50

      heroImages.forEach(heroImage => {
        gsap.to(heroImage, {
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
      })
    }

    ScrollTrigger.matchMedia({
      "(min-width: 1025px)": () => {
        body.addEventListener("mousemove", animateHeroImages, true)
      },
      "(max-width: 1024px)": () => {
        heroImages.forEach(heroImage => {
          gsap.to(heroImage, {
            duration: 0,
            rotationY: 0,
            rotationX: 0,
            rotationZ: "0",
            y: 0,
            x: 0,
            boxShadow: "none",
          })
        })
        body.removeEventListener("mousemove", animateHeroImages, true)
      },
    })
  })
  return (
    <>
      <HeroContainer>
        <div className="hero-images-wrapper">
          <img
            className="intro__img1"
            src={data.hero1.childImageSharp.fluid.src}
            srcSet={data.hero1.childImageSharp.fluid.srcSrt}
            sizes={data.hero1.childImageSharp.fluid.sizes}
            alt="Aleksandra Summer 2017 collection dress"
          />
          <img
            className="intro__img2"
            src={data.hero2.childImageSharp.fluid.src}
            srcSet={data.hero2.childImageSharp.fluid.srcSrt}
            sizes={data.hero2.childImageSharp.fluid.sizes}
            alt="Aleksandra Summer 2017 collection dress 2"
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
        fluid(maxWidth: 1000, quality: 90) {
          src
          srcSet
          sizes
        }
      }
    }
    hero2: file(name: { eq: "hero2" }) {
      childImageSharp {
        fluid(maxWidth: 800, quality: 90) {
          src
          srcSet
          sizes
        }
      }
    }
  }
`

export default IndexPage
