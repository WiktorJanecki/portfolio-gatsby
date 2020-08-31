import React from 'react'
import styled from 'styled-components'

const StyledRect = styled.div`
    background-color:${({accent,theme}) => (accent ? theme.colors.accent : theme.colors.secondary)};
    text-align:center;
    padding:5px;
    display:flex;
    align-items: center;
    justify-content:center;
    flex-direction:column;
    ${({wide})=>wide?"grid-column: 1 / 3;":null}
`;

const StyledName = styled.p`
    font-size:15px;
    color:${({theme})=>theme.colors.primary};
    padding:5px;
    font-family:${({theme})=>theme.fonts.header}, sans-serif;
    font-weight:bold;
    letter-spacing:1px;
`;

const StyledStarsContainer = styled.div`
    display:grid;
    width:50%;
    grid-template-columns: repeat(${(props)=>props.value},1fr);
`;

const StyledStar = styled.p`
    font-size:20px;
    color:${({theme})=>theme.colors.primary};
`;

function CreateStars(value){
    let Stars = [];
    for(let i =0;i<value;i++){
        Stars[i] = <StyledStar key={i}>★</StyledStar>
    } 
    return Stars
}

const SkillRect = ({text, value, accent, wide, language}) => (
    <>
    {language?
        <StyledRect style={{"backgroundColor":"transparent",}} accent={accent} wide={wide}>
            <img src={"https://www.countryflags.io/"+language+"/flat/64.png"}></img>
        </StyledRect>
    :
        <StyledRect accent={accent} wide={wide}>
            <StyledName>{text}</StyledName>
            <StyledStarsContainer value={value}>
                {
                CreateStars(value)
                }
            </StyledStarsContainer>
        </StyledRect>
    }
    </>
)

export default SkillRect;