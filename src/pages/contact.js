import React, { useEffect } from "react"
import { graphql } from "gatsby"
import styled from "styled-components"
import Container from "../components/Container/Container"
import ContactForm from "../components/ContactForm/ContactForm"
import { handleLoader } from "../components/Loader/Loader"

const ContactFormContainer = styled(Container)`
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-top: 20px;
  padding-bottom: 120px;
  min-height: calc(100vh - (87px + 82px));
  @media (max-width: 1024px) {
    min-height: calc(100vh - (65px + 62px));
  }
`

const StyledHeading = styled.h2`
  width: 100%;
  text-align: center;
  //display: flex;
  //justify-content: center;
  //align-items: center;
  font-size: ${({ theme }) => theme.font.size.xxl};
  color: ${({ theme }) => (theme.isDark ? theme.light : theme.primary)};
  img {
    max-width: 45px;
    padding: 0 0 0 6px;
  }
`

const ContactPage = ({ data }) => {
  useEffect(() => {
    handleLoader.disableLoader()
  })
  return (
    <ContactFormContainer narrow>
      <StyledHeading>
        Contact Me
        <img
          src={data.icon.childImageSharp.fluid.src}
          alt="Girl say Hi! icon"
          title="Email me!"
        />
      </StyledHeading>
      <ContactForm />
    </ContactFormContainer>
  )
}

export const query = graphql`
  query {
    icon: file(name: { eq: "icon" }) {
      childImageSharp {
        fluid(maxWidth: 100, quality: 100) {
          src
        }
      }
    }
  }
`

export default ContactPage
