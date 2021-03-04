//import React from "react"
import styled from "styled-components"

const Container = styled.div`
  max-width: ${props => (props.narrow ? "1300px" : "1920px")};
  width: 100%;
  padding: 0 30px;
  margin: 0 auto;
  display: flex;
  @media (max-width: 1024px) {
    padding: 0 20px;
  }
`

export default Container
