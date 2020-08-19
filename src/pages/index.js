import React from "react"
import { Link } from "gatsby"
import styled from 'styled-components'
import Layout  from '../components/Layout'

const StyledContainer = styled.div`
  background-color: ${({theme})=>theme.colors.background};
  width:100%;
  min-height:100vh;
`;

const StyledH1 = styled.h1`
  font-size:30px;
  padding:30px;
  color: ${({theme})=>theme.colors.primary};
`;

const IndexPage = () => (
  <Layout>
    <StyledContainer>
      <StyledH1>Wiktor Janecki</StyledH1>
    </StyledContainer>
  </Layout>
)

export default IndexPage
