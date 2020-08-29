import React from 'react'
import styled from 'styled-components'

const StyledDiv = styled.div`
    width: 0; 
    height: 0; 
    border-left: 20px solid transparent;
    border-right: 20px solid transparent;

    border-top: 35px solid #ffffff;
`;

const Triangle = () => (
    <StyledDiv></StyledDiv>
)

export default Triangle