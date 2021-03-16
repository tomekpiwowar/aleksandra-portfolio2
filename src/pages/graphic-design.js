import React, { useEffect } from "react"
import styled from "styled-components"
import { graphql } from "gatsby"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import Container from "../components/Container/Container"
import { handleLoader } from "../components/Loader/Loader"

const MasonryContainer = styled.div`
  display: block;
  line-height: 0;
  column-count: 3;
  column-gap: 0;
  margin: -15px -15px 0;
  @media (max-width: 768px) {
    column-count: 2;
    margin: -10px -10px 0;
  }
  img {
    padding: 15px;
    @media (max-width: 768px) {
      padding: 10px;
    }
  }
`

const GraphicDesignPage = ({ data }) => {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)

    //setTimeout(() => {

    ScrollTrigger.refresh()

    const galleryImages = document.querySelectorAll(".gallery-element")

    const numImages = galleryImages.length
    let numLoaded = 0

    galleryImages.forEach(image => {
      if (image.complete) {
        imgLoaded()
      } else {
        image.addEventListener("load", imgLoaded)
      }
    })

    function imgLoaded() {
      if (++numLoaded === numImages) {
        handleLoader.disableLoader()
        initScroller()
      }
    }

    function initScroller() {
      gsap.registerPlugin(ScrollTrigger)
      ScrollTrigger.matchMedia({
        "(min-width: 768px)": function () {
          galleryImages.forEach(image => {
            gsap.fromTo(
              image,
              { y: "+=50", opacity: 0 },
              {
                stagger: 2,
                y: 0,
                opacity: 1,
                duration: 1,
                ease: "easeInOut",
                scrollTrigger: {
                  trigger: image,
                  start: "top 80%",
                  //end: "bottom",
                },
              }
            )
          })
        },

        "(max-width: 767px)": function () {
          galleryImages.forEach(image => {
            gsap.fromTo(
              image,
              { y: "+=50", opacity: 0 },
              {
                stagger: 2,
                y: 0,
                opacity: 1,
                duration: 1,
                ease: "easeInOut",
                scrollTrigger: {
                  trigger: image,
                  start: "top 120%",
                  //end: "bottom",
                },
              }
            )
          })
        },
      })
    }
    // }, 500)
  })

  return (
    <>
      <Container>
        <MasonryContainer>
          {data.allFile.edges.map(({ node }, i) => (
            <img
              className="gallery-element"
              key={i}
              alt="Portfolio gallery pic"
              src={node.childImageSharp.fluid.src}
              srcSet={node.childImageSharp.fluid.srcSrt}
              sizes={node.childImageSharp.fluid.sizes}
            />
          ))}
        </MasonryContainer>
      </Container>
    </>
  )
}

export const query = graphql`
  {
    allFile(
      filter: {
        extension: { regex: "/(jpg)|(jpeg)|(png)/" }
        relativeDirectory: { eq: "graphic-design" }
      }
      sort: { fields: name, order: ASC }
    ) {
      edges {
        node {
          childImageSharp {
            fluid(maxWidth: 650, quality: 98) {
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

export default GraphicDesignPage
