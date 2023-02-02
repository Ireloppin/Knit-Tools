import React from 'react';
import styled from 'styled-components';
import IconoMas from '../img/icono-mas.png'
import IconoMenos from '../img/icono-menos.png'
import IconoReiniciar from '../img/icono-reiniciar.png'

const CuentaVueltas = ({contador, setContador}) => {

    const reiniciarContador = ()=>{
        if(window.confirm('¿Quieres reiniciar el contador de vueltas?')){
            setContador(0)
        }
    }
    
  return (
    <div>
        <Vueltas> {contador} vueltas tejidas</Vueltas>
       <Flex>
        <IMG src={IconoMas} alt="1 más"
        onClick={()=> setContador(contador + 1)}
        ></IMG>
        <IMG src={IconoReiniciar} alt="reiniciar contador"
        onClick={()=> reiniciarContador()}
        ></IMG>
        <IMG src={IconoMenos} alt="1 menos"
        onClick={()=> {if(contador >=1){setContador(contador - 1)}}}
        ></IMG>
        </Flex>
    </div>
  )
}

export default CuentaVueltas

const Vueltas = styled.h3`
    color: var(--gris-oscuro);
    margin-top:0;
    text-align:center;
    font-size:2rem;
`
const Flex = styled.div`
max-width:30rem;
  margin: 0 auto;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  
`;

const IMG = styled.img`
display:block;
width:3.5rem;
`