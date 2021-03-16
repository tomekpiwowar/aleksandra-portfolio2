import React from "react"
import styled from "styled-components"
import Container from "../Container/Container"

const StyledFooter = styled.footer`
  width: 100%;
`

const FooterContainer = styled(Container)`
  align-items: center;
  padding-top: 30px;
  padding-bottom: 30px;
  p {
    margin: 0;
    font-size: ${({ theme }) => theme.font.size.m};
  }
  @media (max-width: 1024px) {
    padding-top: 20px;
    padding-bottom: 20px;
  }
`

const Footer = () => (
  <StyledFooter className="intro__footer">
    <FooterContainer>
      <p>
        © 2009 - {new Date().getFullYear()} Aleksandra - Portfolio. All rights
        reserved{" "}
        <span role="img" aria-label="rainbow">
          🌈
        </span>
      </p>
    </FooterContainer>
  </StyledFooter>
)

export default Footer
