import React from 'react'
import styled from 'styled-components'



const Header = () => {
  return (
    <HeaderDiv>
     
        <Logo>Knit tools</Logo>

    </HeaderDiv>
  )
}

export default Header

const HeaderDiv = styled.div`
    color: white;
    text-align: center;
    background-color: var(--primario)
`;

const Logo = styled.h1`
margin: 0;
padding: 2.5rem 0;
color: var(--gris-claro)
`
