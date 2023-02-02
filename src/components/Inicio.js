import React, { useState } from 'react';
import styled from 'styled-components';
import Formulario from './Formulario';
import { generarID } from '../helpers';
import ListaProyectos from './ListaProyectos';



const Inicio = ({proyectos, setProyectos, setProyectoSeleccionado}) => {
    
const [creandoProyeto, setCreandoProyecto] = useState(false)

    const guardarProyecto = proyecto =>{
        proyecto.id= generarID();
        setProyectos([...proyectos, proyecto]);
        setCreandoProyecto(false)
    }

  return (
    <div>
        {proyectos.length === 0 || creandoProyeto === true ?
        <>
        <Titulo>Crea tu nuevo proyecto</Titulo>
            <Formulario 
            guardarProyecto={guardarProyecto}
            setCreandoProyecto={setCreandoProyecto}/>
         </>   
         :
         <MisProyectos>
        <Titulo>Mis Proyectos</Titulo>
            <button className='boton'
            onClick={()=> setCreandoProyecto(true)}
            >Nuevo Proyecto </button>
            <ListaProyectos 
            proyectos = {proyectos}
            setProyectoSeleccionado={setProyectoSeleccionado}
            />
            
        </MisProyectos>
        
        }
    </div>
  )
}

export default Inicio

const Titulo = styled.h2`
    color: var(--primario);
    text-align:center;
`

const MisProyectos = styled.div`
background-color:var(--gris-claro);
padding: 2rem 0;
margin-bottom:3rem;
`