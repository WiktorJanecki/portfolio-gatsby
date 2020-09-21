import React from 'react'
import styled from 'styled-components'

const StyledDiv = styled.div`
    width: 0; 
    height: 0; 
    border-left: 20px solid transparent;
    border-right: 20px solid transparent;

border-top: 35px solid ${({accent,theme}) => (accent ? theme.colors.accent : theme.colors.primary)};
`;

const Triangle = (props) => (
    <StyledDiv accent={props.accent}></StyledDiv>
)

export default Triangle