import React from 'react';
import styled from 'styled-components';


const ListaProyectos = ({proyectos, setProyectoSeleccionado}) => {
  return (
    <Flex>
         {proyectos.map( proyecto => 
           <ProyectoDiv key= {proyecto.id} onClick={()=> setProyectoSeleccionado(proyecto)}>
                <Nombre > {proyecto.nombre}</Nombre>
                   
           </ProyectoDiv>
        )}


    </Flex>
  )
}

export default ListaProyectos

const Nombre = styled.h3`
    color: var(--primario);
    font-weight:700;
    font-size:2.3rem;
    text-align: center;
    
`

const ProyectoDiv = styled.div`
background-color:white;
    width:70%;
    max-width: 40rem;
    box-shadow: 10px 5px 5px var(--gris-oscuro);
    border: solid 3px var(--primario);
    padding:1rem 2rem;
    border-radius: 2rem;
    margin: 1rem auto;
    
`
const Flex= styled.div`

@media (min-width: 768px){
 display: flex; 
flex-direction: row;
justify-content: space-evenly;
gap: 3rem;
}

`
