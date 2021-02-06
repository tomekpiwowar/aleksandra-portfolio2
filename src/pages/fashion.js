import React, { useEffect } from "react"
import styled from "styled-components"
import { graphql } from "gatsby"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import PhotoSlider from "../components/PhotoSlider/PhotoSlider"

const SlidersContainer = styled.div`
  display: flex;
  flex-direction: column;
  overflow: hidden;
`

const StyledDiv = styled.div`
  width: 100%;
  height: 100vh;
  background: transparent;
  display: flex;
  justify-content: center;
  align-items: center;
`

const ScrollToTop = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  h1 {
    opacity: 0;
  }
`

const FashionPage = ({ data }) => {
  useEffect(() => {
    setTimeout(() => {
      gsap.registerPlugin(ScrollTrigger)
      ScrollTrigger.refresh()
      //let slider = document.querySelector(".slider")
      //let sliderImages = document.querySelector(".slider-images")

      const getSliderImagesTotalWidth = thisSlider => {
        let totalWidth = 0
        let sliderImages = [
          ...document.querySelectorAll(
            "." + thisSlider.classList[3] + " .slider-images > img"
          ),
        ]
        sliderImages.map(image => {
          totalWidth += image.offsetWidth
        })
        return totalWidth
      }
      //getSliderImagesTotalWidth()
      //console.log(totalWidth)

      document
        .querySelectorAll(".slider-container")
        .forEach(sliderContainer => {
          const slider = sliderContainer.querySelector(".slider")
          let screenWidth = window.screen.width
          const onLeaveFunc = () => {
            //tl.restart()
            //tl.pause()
            tl.progress(0)
          }
          // const onEnterBackFunc = () => {
          //   //tl.pause(0).kill(true)
          //   //console.log(ScrollTrigger.getById("slider1"))
          //   //ScrollTrigger.getAll().forEach(st => st.kill())
          //   //tl.pause(0).kill(true)
          //   //ScrollTrigger.end = "0"
          //   //ScrollTrigger.getById("slider1").kill(true)
          // }
          const addMarginTopWhileNotAdded = () => {
            let sliderMarginTop = slider.style.marginTop
            return sliderMarginTop === "10vh" ? "10vh" : 0
          }
          //const modifyLabelStyles = () => {
          // return (screenWidth <== 1024) ? scale
          // }

          let tl = gsap
            .timeline({
              scrollTrigger: {
                id: "slider1",
                trigger: slider,
                //start: "top top",
                //end: "bottom bottom",
                // end: `+=${
                //   getSliderImagesTotalWidth(slider) - slider.offsetWidth
                // }px`,
                end: "+=300%",
                pin: slider,
                //markers: true,
                scrub: true,
                toggleClass: "active",
                //toggleActions: "restart none none reset",
                //onLeaveBack: () => scrollTrigger.pause(),
                onLeave: () => onLeaveFunc(),
                //onEnterBack: () => onEnterBackFunc(),
              },
            })

            .to(slider, {
              duration: 0.25,
              //marginTop: () => addMarginToFirstSlider(slider),
              marginTop: "10vh",
              //marginBottom: "10vh",
              paddingLeft: 0,
              paddingRight: 0,
              marginLeft: 0,
              xPercent: 0,
            })
            .to(slider.querySelectorAll(".slider-images img"), {
              duration: 0.5,
              ease: "power1",
              opacity: 1,
            })
            .to(slider.querySelector(".slider-label"), {
              duration: 0.5,
              scale: () => (screenWidth <= 1024 ? 1 : 1.3),
              //autoAlpha: 0,
              //rotation: "360",
              //ease: "power1",
            })
            .to(slider.querySelector(".slider-images"), {
              duration: 15,
              x: () =>
                -(
                  getSliderImagesTotalWidth(slider) -
                  document.documentElement.clientWidth
                ),
            })
            .to(slider, {
              duration: 0.25,
              marginTop: () => addMarginTopWhileNotAdded(slider),
            })
        })

      const lastSection = document.querySelector(".last-section")
      const lastSectionText = lastSection.querySelector("h1")
      let tl2 = gsap
        .timeline({
          scrollTrigger: {
            trigger: lastSection,
            start: "top bottom-=10%",
            //end: "bottom bottom",
            // end: `+=${
            //   getSliderImagesTotalWidth(slider) - slider.offsetWidth
            // }px`,
            end: "bottom bottom",
            //pin: true,
            markers: true,
            scrub: true,
            //toggleActions: "restart none none reset",
            //onLeaveBack: () => scrollTrigger.pause(),
            //onEnterBack: () => onEnterBackFunc(),
          },
        })

        .to(lastSection, {
          duration: 3,
          backgroundColor: "#f98bb0",
        })
        .to(lastSectionText, {
          opacity: 1,
        })
    }, 500)
  })

  return (
    <>
      <SlidersContainer>
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
        <StyledDiv className="last-section">
          <ScrollToTop>
            <h1>Back to top</h1>
            <span role="img" aria-label="point up">
              ☝️
            </span>
          </ScrollToTop>
        </StyledDiv>
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
            fluid(maxWidth: 1200, quality: 100) {
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
            fluid(maxWidth: 1200, quality: 100) {
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
            fluid(maxWidth: 1200, quality: 100) {
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
            fluid(maxWidth: 1200, quality: 100) {
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
            fluid(maxWidth: 1200, quality: 100) {
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
            fluid(maxWidth: 1200, quality: 100) {
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
            fluid(maxWidth: 1200, quality: 100) {
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
            fluid(maxWidth: 1200, quality: 100) {
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
