import React from "react"
import styled from "styled-components"
import { graphql } from "gatsby"
import Container from "../components/Container/Container"

const HeroContainer = styled(Container)`
  display: grid;
  grid-template-columns: 52% 43.5%;
  justify-content: space-between;
  @media (max-width: 1024px) {
    grid-template-columns: 1fr;
  }
  img:nth-child(2) {
    padding: 55px 0 0 0;
    @media (max-width: 1024px) {
      padding: 30px 0 0 0;
    }
  }
`

const IndexPage = ({ data }) => (
  <>
    <HeroContainer>
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
    </HeroContainer>
  </>
)

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
