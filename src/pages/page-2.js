import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import ContactForm from "../components/ContactForm/ContactForm"

import Layout from "../components/layout"
import SEO from "../components/seo"

const SecondPage = () => (
  <Layout>
    <SEO title="Page two" />
    <ContactForm />
  </Layout>
)

export default SecondPage
