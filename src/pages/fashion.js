import React, { useEffect } from "react"
import styled from "styled-components"
import { graphql } from "gatsby"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import MobileHint from "../components/MobileHint/MobileHint"
import PhotoSlider from "../components/PhotoSlider/PhotoSlider"
import { handleLoader } from "../components/Loader/Loader"

const SlidersContainer = styled.div`
  display: flex;
  flex-direction: column;
  overflow: hidden;
`

const FashionPage = ({ data }) => {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)
    ScrollTrigger.refresh()

    //setTimeout(() => {

    let screenWidth = window.screen.width
    let index = 0
    const numSliders = [...document.querySelectorAll(".slider")].length
    let numLoadedSliders = 0

    document.querySelectorAll(".slider-container").forEach(sliderContainer => {
      let slider = sliderContainer.querySelector(".slider")

      let sliderImages = [...slider.querySelectorAll(".slider-images > img")]

      const numImages = sliderImages.length
      let numLoadedimages = 0

      sliderImages.forEach(image => {
        if (image.complete) {
          imgLoaded()
        } else {
          image.addEventListener("load", imgLoaded)
        }
      })

      function imgLoaded() {
        //console.log(numLoadedimages)
        //console.log(numImages)
        if (++numLoadedimages === numImages) {
          screenWidth > 1024 && initScroller()
          ++numLoadedSliders === numSliders && handleLoader.disableLoader()
        }
      }

      function initScroller() {
        slider = [...document.querySelectorAll(".slider-container .slider")][
          index++
        ]

        function getSliderImagesTotalWidth() {
          let sliderImages = [
            ...slider.querySelectorAll(".slider-images > img"),
          ]
          let totalWidth = 0
          sliderImages.forEach(image => {
            totalWidth += image.offsetWidth
          })
          return totalWidth
        }

        const onLeaveFunc = () => {
          tl.progress(0)
        }

        const addMarginTopWhileNotAdded = () => {
          let sliderMarginTop = slider.style.marginTop
          return sliderMarginTop === "10vh" ? "10vh" : 0
        }
        //const modifyLabelStyles = () => {
        // return (screenWidth <== 1024) ? scale
        // }

        let tl = gsap.timeline({
          scrollTrigger: {
            id: "slider1",
            trigger: slider,
            start: "top top",
            // end: `+=${
            //   getSliderImagesTotalWidth(slider) - slider.offsetWidth
            // }px`,
            end: "+=900%",
            pin: slider,
            scrub: true,
            toggleClass: "active",
            invalidateOnRefresh: true,
            onLeave: () => onLeaveFunc(),
            //onEnterBack: () => onEnterBackFunc(),
          },
          invalidateOnRefresh: true,
        })

        tl.to(slider, {
          duration: 0.25,
          paddingLeft: 0,
          paddingRight: 0,
          marginLeft: 0,
          xPercent: 0,
        })
          .to(slider.querySelectorAll(".slider-images img"), {
            duration: 0.2,
            //ease: "power1",
            opacity: 1,
            //overwrite: true,
          })
          .to(slider.querySelector(".slider-label"), {
            duration: 0.2,
            //overwrite: true,
            scale: () => (screenWidth <= 1024 ? 1 : 1.3),
          })
          .to(slider.querySelector(".slider-images"), {
            duration: 1,
            //overwrite: true,
            x: () =>
              -(
                getSliderImagesTotalWidth() -
                document.documentElement.clientWidth
              ),
          })
          .to(slider, {
            duration: 0.25,
            //overwrite: true,
            marginTop: () => addMarginTopWhileNotAdded(slider),
          })
      }
    })

    //}, 3000)
  })

  return (
    <>
      <MobileHint />
      <SlidersContainer className="sliders-container">
        <PhotoSlider
          graphQlData={data}
          sliderName={"slider1"}
          sliderLabel={
            "PLASTIC BONES Summer 2017 / Womenswear Collection / 2017 /"
          }
        />
        <PhotoSlider
          graphQlData={data}
          sliderName={"slider2"}
          sliderLabel={
            "PLASTIC BONES Summer 2016 & Autumn-Winter 2016/17 Packshots / Womenswear Collections / 2016 /"
          }
        />
        <PhotoSlider
          graphQlData={data}
          sliderName={"slider3"}
          sliderLabel={
            "PLASTIC BONES Winter 2015/16 / Womenswear Collection / 2015 /"
          }
        />
        <PhotoSlider
          graphQlData={data}
          sliderName={"slider4"}
          sliderLabel={
            "PLASTIC BONES Autumn 2015 / Womenswear Collection / 2015 /"
          }
        />
        <PhotoSlider
          graphQlData={data}
          sliderName={"slider5"}
          sliderLabel={
            "PLASTIC BONES Spring-Summer 2015 / Women's & Menswear Collection / 2015 /"
          }
        />
        <PhotoSlider
          graphQlData={data}
          sliderName={"slider6"}
          sliderLabel={
            "Sound of Silence / Women's & Menswear Collection / 2014 /"
          }
        />
        <PhotoSlider
          graphQlData={data}
          sliderName={"slider7"}
          sliderLabel={"Wizard of Oz / Film Costumes Collection / 2013 /"}
        />
        <PhotoSlider
          graphQlData={data}
          sliderName={"slider8"}
          sliderLabel={"Blend Pigment / Womenswear Collection / 2012 /"}
        />
      </SlidersContainer>
    </>
  )
}

export const query = graphql`
  query {
    slider1: allFile(
      filter: {
        extension: { regex: "/(jpg)|(jpeg)|(png)/" }
        relativeDirectory: { eq: "fashion/Summer2017" }
      }
      sort: { fields: name, order: ASC }
    ) {
      edges {
        node {
          childImageSharp {
            fluid(maxWidth: 1200, quality: 80) {
              src
              srcSet
              sizes
            }
          }
        }
      }
    }
    slider2: allFile(
      filter: {
        extension: { regex: "/(jpg)|(jpeg)|(png)/" }
        relativeDirectory: { eq: "fashion/Summer2016" }
      }
      sort: { fields: name, order: ASC }
    ) {
      edges {
        node {
          childImageSharp {
            fluid(maxWidth: 1200, quality: 80) {
              src
              srcSet
              sizes
            }
          }
        }
      }
    }
    slider3: allFile(
      filter: {
        extension: { regex: "/(jpg)|(jpeg)|(png)/" }
        relativeDirectory: { eq: "fashion/Winter15-16" }
      }
      sort: { fields: name, order: ASC }
    ) {
      edges {
        node {
          childImageSharp {
            fluid(maxWidth: 1200, quality: 80) {
              src
              srcSet
              sizes
            }
          }
        }
      }
    }
    slider4: allFile(
      filter: {
        extension: { regex: "/(jpg)|(jpeg)|(png)/" }
        relativeDirectory: { eq: "fashion/Autumn2015" }
      }
      sort: { fields: name, order: ASC }
    ) {
      edges {
        node {
          childImageSharp {
            fluid(maxWidth: 1200, quality: 80) {
              src
              srcSet
              sizes
            }
          }
        }
      }
    }
    slider5: allFile(
      filter: {
        extension: { regex: "/(jpg)|(jpeg)|(png)/" }
        relativeDirectory: { eq: "fashion/SpringSummer2015" }
      }
      sort: { fields: name, order: ASC }
    ) {
      edges {
        node {
          childImageSharp {
            fluid(maxWidth: 1200, quality: 80) {
              src
              srcSet
              sizes
            }
          }
        }
      }
    }
    slider6: allFile(
      filter: {
        extension: { regex: "/(jpg)|(jpeg)|(png)/" }
        relativeDirectory: { eq: "fashion/SoundOfSilence2014" }
      }
      sort: { fields: name, order: ASC }
    ) {
      edges {
        node {
          childImageSharp {
            fluid(maxWidth: 1200, quality: 80) {
              src
              srcSet
              sizes
            }
          }
        }
      }
    }
    slider7: allFile(
      filter: {
        extension: { regex: "/(jpg)|(jpeg)|(png)/" }
        relativeDirectory: { eq: "fashion/WizardOfOz2013" }
      }
      sort: { fields: name, order: ASC }
    ) {
      edges {
        node {
          childImageSharp {
            fluid(maxWidth: 1200, quality: 80) {
              src
              srcSet
              sizes
            }
          }
        }
      }
    }
    slider8: allFile(
      filter: {
        extension: { regex: "/(jpg)|(jpeg)|(png)/" }
        relativeDirectory: { eq: "fashion/BlendPigment2012" }
      }
      sort: { fields: name, order: ASC }
    ) {
      edges {
        node {
          childImageSharp {
            fluid(maxWidth: 1200, quality: 80) {
              src
              srcSet
              sizes
            }
          }
        }
      }
    }
  }
`

export default FashionPage
