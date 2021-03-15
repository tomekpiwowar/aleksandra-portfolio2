import React, { useEffect } from "react"
import styled from "styled-components"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import Container from "../components/Container/Container"
import VideoSection from "../components/VideoSection/VideoSection"
import Separator from "../components/Separator/Separator"
import { handleLoader } from "../components/Loader/Loader"

const VideosContainer = styled(Container)`
  flex-direction: column;
  overflow-x: hidden;
`

const VideosPage = () => {
  useEffect(() => {
    handleLoader.disableLoader()
    //setTimeout(() => {
    gsap.registerPlugin(ScrollTrigger)
    ScrollTrigger.refresh()
    const separators = document.querySelectorAll(".separator")
    separators.forEach(separator => {
      gsap.fromTo(
        separator,
        { width: 0 },
        {
          width: "100%",
          duration: 1.2,
          ease: "easeInOut",
          scrollTrigger: {
            trigger: separator,
            start: "top 90%",
            //end: "bottom",
          },
        }
      )
    })
    //}, 500)
  })

  return (
    <VideosContainer>
      <VideoSection
        videoSrc={"https://player.vimeo.com/video/80186682"}
        videoLabel={
          'Costume design for movie "Fort" ( dir. by Emilia Sniegoska / Filip Plewinski ) / 2013 /'
        }
      />
      <Separator />
      <VideoSection
        videoSrc={"https://www.youtube.com/embed/QJetXyABPTE"}
        videoLabel={
          "Peter J. Birch - Claudette / 2012. Concept / Direction / Photography / Editing."
        }
      />
      <Separator />
    </VideosContainer>
  )
}

export default VideosPage
