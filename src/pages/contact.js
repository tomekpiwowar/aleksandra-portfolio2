import React from "react"
import styled from "styled-components"
import Container from "../components/Container/Container"
import ContactForm from "../components/ContactForm/ContactForm"

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
  font-size: ${({ theme }) => theme.font.size.xl};
  color: ${({ theme }) => (theme.isDark ? theme.light : theme.primary)};
`

const ContactPage = () => (
  <ContactFormContainer narrow>
    <StyledHeading>
      Contact Me{" "}
      <span role="img" aria-label="hi!">
        🙋🏻‍♀️
      </span>
    </StyledHeading>
    <ContactForm />
  </ContactFormContainer>
)

export default ContactPage
