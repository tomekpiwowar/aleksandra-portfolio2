import React, { useEffect } from "react"
import styled from "styled-components"
import { graphql } from "gatsby"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import Container from "../components/Container/Container"

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
gsap.registerPlugin(ScrollTrigger)
const GraphicDesignPage = ({ data }) => {
  useEffect(() => {
    const offers = document.querySelectorAll(".gallery-element")
    offers.forEach(offer => {
      gsap.fromTo(
        offer,
        { y: "+=50", opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          ease: "easeInOut",
          scrollTrigger: {
            trigger: offer,
            start: "top 80%",
            //end: "bottom",
          },
        }
      )
    })
  })

  return (
    <>
      <Container>
        <MasonryContainer>
          {data.allFile.edges.map(({ node }, i) => (
            <img
              className="gallery-element"
              key={i}
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
            fluid(maxWidth: 800, quality: 100) {
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
