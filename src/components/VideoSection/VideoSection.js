import React from "react"
import styled from "styled-components"
import Container from "../Container/Container"

const VideoContainer = styled(Container)`
  flex-direction: column;
  text-align: center;
  margin: 20px auto 40px;
  @media (max-width: 1024px) {
    padding: 0;
  }
`

const VideoWrapper = styled.div`
  position: relative;
  padding-bottom: 56.25%;
`

const Video = styled.iframe`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`

const StyledParagraph = styled.p`
  color: ${({ theme }) => (theme.isDark ? theme.white : theme.darkGrey)};
  margin: 6px 0 0;
`

const VideoSection = ({ videoSrc, videoLabel }) => (
  <VideoContainer narrow>
    <VideoWrapper>
      <Video
        width="100%"
        height="100%"
        src={videoSrc}
        frameBorder="0"
        allow="autoplay; encrypted-media"
        allowFullScreen
      ></Video>
    </VideoWrapper>
    <StyledParagraph>{videoLabel}</StyledParagraph>
  </VideoContainer>
)

export default VideoSection
