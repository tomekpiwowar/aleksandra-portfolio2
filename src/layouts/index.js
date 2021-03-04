import React from "react"
import Header from "../components/Header/Header"
import Footer from "../components/Footer/Footer"
import Cursor from "../components/Cursor/Cursor"
import ScrollTopWidget from "../components/ScrollTopWidget/ScrollTopWidget"
import GlobalStyle from "../assets/styles/GlobalStyles"
import { ThemeProvider } from "styled-components"
import { theme } from "../assets/styles/theme"
import SEO from "../components/seo"

const MainLayout = ({ children }) => (
  <>
    <SEO />
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Header />
      {children}
      <Footer />
      <ScrollTopWidget />
      <Cursor />
    </ThemeProvider>
  </>
)

export default MainLayout
