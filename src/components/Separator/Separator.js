import React from "react"
import styled from "styled-components"

const StyledDiv = styled.div`
  width: 100%;
  height: 1px;
  display: block;
  background: ${({ theme }) => (theme.isDark ? theme.white : theme.grey)};
  margin: 0 0 30px;
`

const Separator = () => <StyledDiv className="separator" />

export default Separator
