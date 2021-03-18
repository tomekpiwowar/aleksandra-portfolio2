import React from "react"
import styled from "styled-components"

const Slider = styled.div`
  max-width: 1920px;
  width: 100%;
  padding: 10vh 80px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  text-align: center;
  height: 100vh;
  position: relative;
  transition: margin 0.25s ease;
  &:first-child {
    padding-top: 0;
  }
  &.active {
    margin-top: 10vh !important;
  }
  &.active img {
    margin-left: 0 !important;
    transform: none !important;
  }
  @media (max-width: 1024px) {
    padding: 0;
  }
`

const SliderImages = styled.div`
  display: flex;
  align-items: center;
  height: 100%;
  max-height: 80vh;
`

const StyledImg = styled.img`
  height: 100%;
  width: auto;
  margin-left: 50%;
  transform: translateX(-50%) !important;
  transition: transform 0.3s ease, margin 0.3s ease;
  &:not(:first-child) {
    opacity: 0;
    //display: none;
  }
  @media (max-width: 1024px) {
    height: auto;
    max-height: inherit;
    width: 100%;
  }
`

const StyledParagraph = styled.p`
  color: ${({ theme }) => (theme.isDark ? theme.white : theme.darkGrey)};
  margin: 20px 0 0;
  @media (max-width: 1024px) {
    //margin-top: 48px;
    margin-top: 0;
    position: absolute;
    bottom: 100px;
    width: 100%;
    padding: 0 5%;
  }
`

const PhotoSlider = ({ graphQlData, sliderName, sliderLabel }) => {
  const generateClass = pre => {
    return `${pre}_${new Date().getTime()}`
  }

  return (
    <div className="slider-container">
      <Slider className={`slider ${generateClass("slider")}`}>
        <SliderImages className="slider-images">
          {graphQlData[sliderName].edges.map(({ node }, i) => (
            <StyledImg
              className="slider-element"
              key={i}
              src={node.childImageSharp.fluid.src}
              srcSet={node.childImageSharp.fluid.srcSrt}
              sizes={node.childImageSharp.fluid.sizes}
              //loading="eager"
            />
          ))}
        </SliderImages>
        <StyledParagraph className="slider-label">
          {sliderLabel}
        </StyledParagraph>
      </Slider>
    </div>
  )
}

export default PhotoSlider
