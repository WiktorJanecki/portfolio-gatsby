import React from "react"
import { Link } from "gatsby"
import styled from 'styled-components'
import Layout  from '../components/Layout'
import SuitImg from '../images/suit.png'
import Project1 from '../images/project1.png'
import Triangle from '../components/Triangle'
import SkillRect from '../components/SkillRect'
import ProjectRect from '../components/ProjectRect'

const StyledContainer = styled.div`
  background-color: ${({theme})=>theme.colors.background};
  width:100%;
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
  background-color:${({theme})=>theme.colors.accent};
  -webkit-box-shadow: 0px -15px 79px -4px rgba(0,0,0,0.75);
  -moz-box-shadow: 0px -15px 79px -4px rgba(0,0,0,0.75);
  box-shadow: 0px -15px 79px -4px rgba(0,0,0,0.75);
`;
const StyledBottomTriangleContainer = styled.div`
 position:absolute;
 bottom:-5px;
 left:-25px;
 transform: scale(2) rotate(180deg);
 z-index:3;
`;

const StyledBottom2TriangleContainer = styled.div`
 position:absolute;
 bottom:calc(-6vh-100%);
 left:30px;
 transform: scale(1);
 z-index:3;
`;

const StyledSkillsNameGrid = styled.div`
  display:grid;
  grid-template-columns: 1fr 40% 1fr;
  width:100%;
  padding-top:40px;
  padding-bottom:40px;
`;
const StyledStrippedLineGrid = styled.div`
  display:grid;
  grid-template-columns:1fr 1fr;
  column-gap:3vw;
`;
const StyledSkillNameHeader = styled.h1`
  font-size:20px;
  font-family:${({theme})=>theme.fonts.header}, sans-serif;
  color:${({theme})=>theme.colors.primary};
  grid-column:1,2;
  text-align:center;
`;
const StyledStripe = styled.div`
  color:${({theme})=>theme.colors.primary};
  position:relative;
  ::before{
    position:absolute;
    top:10px;
    left:25%;
    content:'';
    width:50%;
    border: 0.001em solid #FFFFFF;
  }
`;

const StyledSkillsGrid = styled.div`
  display:grid;
  width:90%;
  grid-template-columns: 1fr 1fr;
  grid-template-rows:10vh;
  grid-gap:15px;
`;
const StyledCenterContainer = styled.div`
  display:flex;
  justify-items:center;
  align-items:center;
  flex-direction:column;
`;
const StyledPreFooter = styled.footer`
  background-color:${({theme})=>theme.colors.secondary};
  height:20vh;
  width:100%;
`;
const StyledFooter = styled.footer`
  background-color:${({theme})=>theme.colors.accent};
  color:${({theme})=>theme.colors.primary};
  font-size:20px;
  width:100%;
  text-align:center;
  font-family:${({theme})=>theme.fonts.header}, sans-serif;
  padding:20px;
`;

const IndexPage = () => (
  <Layout>
    <StyledContainer>
      <StyledStartContainer>
        <StyledH1>Wiktor Janecki</StyledH1>
        <StyledP>I am a front-end web <br/> developer. React,<br/> Gatsby and pure <br /> javascript are <br/> my strengths</StyledP>
        <StyledAbsoluteImageContainer><StyledImageContainer><StyledImg src={SuitImg}/> </StyledImageContainer></StyledAbsoluteImageContainer>
        <StyledTriangleContainer>
          <Triangle/><br/><br/>
          <Triangle/><br/><br/>
          <Triangle/><br/><br/>
          <Triangle/><br/><br/>
        </StyledTriangleContainer>
        <StyledBottomTriangleContainer>
          <Triangle accent/><br/>
        </StyledBottomTriangleContainer>
      </StyledStartContainer>
      
      <StyledHR/>
      <StyledBottom2TriangleContainer>
          <Triangle accent/><br/>
        </StyledBottom2TriangleContainer>
      { /* CHANGE FONT !IMPORTANT */ } <center><StyledH1 style={{"paddingBottom":0,}}>MY SKILLS</StyledH1></center>
      
      <StyledSkillsNameGrid>
        <StyledStrippedLineGrid>
          <StyledStripe/><StyledStripe/>
        </StyledStrippedLineGrid>
        <StyledSkillNameHeader>Front-end</StyledSkillNameHeader>
        <StyledStrippedLineGrid>
          <StyledStripe></StyledStripe><StyledStripe></StyledStripe>
        </StyledStrippedLineGrid>
      </StyledSkillsNameGrid>

      
      <StyledCenterContainer>
        <StyledSkillsGrid>     

         <SkillRect text="HTML" value={3}/>
         <SkillRect text="JQuerry" value={1}/>
         <SkillRect wide accent text="JavaScript" value={3}/>

         <SkillRect text="CSS" value={3}/>
         <SkillRect text="Bootstrap" value={1}/>

         <SkillRect accent text="React" value={2}/>
         <SkillRect accent text="GatsbyJS" value={2}/>

        </StyledSkillsGrid>
      </StyledCenterContainer>

      <StyledSkillsNameGrid>
        <StyledStrippedLineGrid>
          <StyledStripe/><StyledStripe/>
        </StyledStrippedLineGrid>
        <StyledSkillNameHeader>Back-end</StyledSkillNameHeader>
        <StyledStrippedLineGrid>
          <StyledStripe></StyledStripe><StyledStripe></StyledStripe>
        </StyledStrippedLineGrid>
      </StyledSkillsNameGrid>

      <StyledCenterContainer>
        <StyledSkillsGrid>     

         <SkillRect accent text="Java" value={3}/>
         <SkillRect accent text="Python" value={2}/>

         <SkillRect accent text="Flask" value={3}/>
         <SkillRect text="PHP" value={2}/>

         <SkillRect accent text="NodeJS" value={3}/>
         <SkillRect text="ExpressJS" value={2}/>

        </StyledSkillsGrid>
      </StyledCenterContainer>

      <StyledSkillsNameGrid>
        <StyledStrippedLineGrid>
          <StyledStripe/><StyledStripe/>
        </StyledStrippedLineGrid>
        <StyledSkillNameHeader>Other web-dev</StyledSkillNameHeader>
        <StyledStrippedLineGrid>
          <StyledStripe></StyledStripe><StyledStripe></StyledStripe>
        </StyledStrippedLineGrid>
      </StyledSkillsNameGrid>

      <StyledCenterContainer>
        <StyledSkillsGrid>     

         <SkillRect accent text="SQL" value={3}/>
         <SkillRect text="FTP" value={2}/>

         <SkillRect text="Figma" value={1}/>
         <SkillRect accent text="RestAPI" value={2}/>

        </StyledSkillsGrid>
      </StyledCenterContainer>

      <StyledSkillsNameGrid>
        <StyledStrippedLineGrid>
          <StyledStripe/><StyledStripe/>
        </StyledStrippedLineGrid>
        <StyledSkillNameHeader>Project Management</StyledSkillNameHeader>
        <StyledStrippedLineGrid>
          <StyledStripe></StyledStripe><StyledStripe></StyledStripe>
        </StyledStrippedLineGrid>
      </StyledSkillsNameGrid>

      <StyledCenterContainer>
        <StyledSkillsGrid>     

         <SkillRect accent wide text="GIT" value={3}/>

         <SkillRect text="GitHub" value={3}/>
         <SkillRect text="Slack" value={1}/>

        </StyledSkillsGrid>
      </StyledCenterContainer>

      
      <StyledSkillsNameGrid>
        <StyledStrippedLineGrid>
          <StyledStripe/><StyledStripe/>
        </StyledStrippedLineGrid>
        <StyledSkillNameHeader>Languages</StyledSkillNameHeader>
        <StyledStrippedLineGrid>
          <StyledStripe></StyledStripe><StyledStripe></StyledStripe>
        </StyledStrippedLineGrid>
      </StyledSkillsNameGrid>

      <StyledCenterContainer>
        <StyledSkillsGrid>     

         <SkillRect language="pl" text="GIT" value={3}/>
         <SkillRect text="Native" value={0}/>
         
         <SkillRect language="gb" text="GIT" value={3}/>
         <SkillRect text="C2" value={0}/>
         
         <SkillRect language="es" text="GIT" value={3}/>
         <SkillRect text="B1" value={0}/>

         <SkillRect language="DE" text="GIT" value={3}/>
         <SkillRect text="A2" value={0}/>

         <SkillRect language="jp" text="GIT" value={3}/>
         <SkillRect text="A1" value={0}/>

        </StyledSkillsGrid>
      </StyledCenterContainer>

      <StyledSkillsNameGrid>
        <StyledStrippedLineGrid>
          <StyledStripe/><StyledStripe/>
        </StyledStrippedLineGrid>
        <StyledSkillNameHeader></StyledSkillNameHeader>
        <StyledStrippedLineGrid>
          <StyledStripe></StyledStripe><StyledStripe></StyledStripe>
        </StyledStrippedLineGrid>
      </StyledSkillsNameGrid>

      <StyledHR/>

      { /* CHANGE FONT !IMPORTANT */ } <center><StyledH1>PROJECTS</StyledH1></center>

      <StyledCenterContainer>
        <ProjectRect name="DREWCAR" source="https://google.com" view={Project1} />
      </StyledCenterContainer>

      <div style={{"marginBottom":"40px"}}></div>
      
      <StyledCenterContainer>
        <StyledPreFooter>123</StyledPreFooter>
        <StyledFooter>Wiktor Janecki 2020 &copy;</StyledFooter>
      </StyledCenterContainer>
    </StyledContainer>
  </Layout>
)

export default IndexPage
