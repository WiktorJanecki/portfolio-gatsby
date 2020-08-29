import React from "react"
import { Link } from "gatsby"
import styled from 'styled-components'
import Layout  from '../components/Layout'
import SuitImg from '../images/suit.png'
import Triangle from '../components/Triangle'

const StyledContainer = styled.div`
  background-color: ${({theme})=>theme.colors.background};
  width:100%;
  min-height:120vh;
`;

const StyledStartContainer = styled.div`
    height:100vh;
    width:100vw;
    max-width:100%;
`;

const StyledH1 = styled.h1`
  font-size:30px;
  padding:34px;
  padding-top:50px;
  font-family: ${({theme})=>theme.fonts.header}, sans-serif;
  color: ${({theme})=>theme.colors.primary};
`;

const StyledP = styled.p`
    font-family: ${({theme})=>theme.fonts.header}, sans-serif;
    color: ${({theme})=>theme.colors.secondary};
    font-size:24px;
    padding-left:34px;
`;
const StyledImg = styled.img`
  width:80vh;
  height:auto;
  position: relative;
  right:-200px;
  float:right;
`;
const StyledImageContainer = styled.div`
  overflow:hidden;
  height:100% !important;
  top:30%;
  position: relative;
`;
const StyledAbsoluteImageContainer = styled.div`
  overflow:hidden;
  height:100vh;
  width:100%;
  top:0;
  position: absolute;
`;
const StyledTriangleContainer = styled.div`
  padding-left:34px;
  padding-top:80px;
`;

const StyledHR = styled.div`
  width:100%;
  height:6vh;
  position:relative;
  z-index:1;
  background-color:${({theme})=>theme.colors.backgroundSecondary};
  -webkit-box-shadow: 0px -15px 79px -4px rgba(0,0,0,0.75);
-moz-box-shadow: 0px -15px 79px -4px rgba(0,0,0,0.75);
box-shadow: 0px -15px 79px -4px rgba(0,0,0,0.75);
`;

const IndexPage = () => (
  <Layout>
    <StyledContainer>
      <StyledStartContainer>
        <StyledH1>Wiktor Janecki</StyledH1>
        <StyledP>I am a front end web <br/> developer. React,<br/> Gatsby and pure <br /> javascript are <br/> my strengths</StyledP>
        <StyledAbsoluteImageContainer><StyledImageContainer><StyledImg src={SuitImg}/> </StyledImageContainer></StyledAbsoluteImageContainer>
        <StyledTriangleContainer>
          <Triangle/><br/><br/>
          <Triangle/><br/><br/>
          <Triangle/><br/><br/>
          <Triangle/><br/><br/>
        </StyledTriangleContainer>
      </StyledStartContainer>
      
      <StyledHR/>

    </StyledContainer>
  </Layout>
)

export default IndexPage
