import React from 'react'
import styled from 'styled-components'



const StyledProjectRect = styled.div`
    width:90vw;
    background-color:${({theme})=>theme.colors.secondary};
    display: grid;
    grid-template-columns: 1fr 2fr;
    grid-template-rows:1fr 1fr;
`;
const StyledProjectName = styled.h2`
    grid-column: 1/2;
    grid-row: 1 / 2;
    display:flex;
    align-items:center;
    justify-content:center;
    flex-direction:column;
    font-size:15px;
    text-align:center;
    color:${({theme})=>theme.colors.primary};
    font-family: ${({theme})=>theme.fonts.header}, sans-serif;
`;
const StyledProjectSource = styled.a`
    grid-column:1 /2 ;
    grid-row: 2/ 3;
    font-weight:bold;
    text-decoration:none;
    font-family: ${({theme})=>theme.fonts.header}, sans-serif;
    color:${({theme})=>theme.colors.accent};
    font-size:15px;
    display:flex;
    text-align:center;
    align-items:center;
    justify-content:center;
    flex-direction:column;
`;
const StyledProjectView = styled.img`
    width:100%;
    height:auto;

`;

const StyledImageContainer = styled.div`
    display:flex;
    text-align:center;
    align-items:center;
    justify-content:center;
    flex-direction:column;
    grid-row: 1/ 3;
    padding:30px 10px 30px 10px;
`;

const ProjectRect = ({name,source,view}) => (
    <StyledProjectRect>
        <StyledProjectName>{name}</StyledProjectName>
        <StyledProjectSource href={source} target="_blank">SOURCE</StyledProjectSource>
        <StyledImageContainer><StyledProjectView src={view}/></StyledImageContainer>
    </StyledProjectRect>
)

export default ProjectRect;