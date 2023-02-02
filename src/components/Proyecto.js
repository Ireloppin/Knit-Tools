import React from "react";
import styled from "styled-components";
import { useState, useEffect } from "react";
import CuentaVueltas from "./CuentaVueltas";
import IconoEliminar from "../img/icono-eliminar.png"
import IconoVolver from "../img/icono-volver.png"
import IconoEditar from "../img/icono-editar.png"
import Formulario from "./Formulario";
import Calculadora from "./Calculadora";
import Notas from "./Notas";
import { generarID } from '../helpers';

const Proyecto = ({ proyectoSeleccionado, setProyectoSeleccionado, eliminarProyecto }) => {
  const {
    nombre,
    id,
    material,
    aguja,
    muestra,
    altoMuestra,
    anchoMuestra,
    puntosMuestra,
    vueltasMuestra,
    vueltasTejidas,
    notas
  } = proyectoSeleccionado;

  
  const [contador, setContador] = useState(vueltasTejidas? vueltasTejidas : 0);
  const [notasActualizadas, setNotasActualizadas]= useState(notas ? notas : []);
  const [editando, setEditando] = useState(false)

  useEffect(() => {
  setProyectoSeleccionado({...proyectoSeleccionado, vueltasTejidas:contador})
    
  }, [contador])

  useEffect(() => {
    setProyectoSeleccionado({...proyectoSeleccionado, notas:notasActualizadas})
      
    }, [notasActualizadas])

  const guardarNota= nota=>{
    nota.id= generarID();
    setNotasActualizadas([...notasActualizadas, nota])
  }

  const eliminarNota= (id)=>{
    setNotasActualizadas(notasActualizadas.filter( nota => nota.id !== id));
  }

 
 
 
  return (
    <ProyectoDiv>
    
      <Contenedor>
      <Div key={id}>
        
        <Nombre> {nombre}</Nombre>
          <Flex>
          <Dato> Material: {material}</Dato>
          <Dato> Nº aguja: {aguja}</Dato>
          </Flex>
          <Flex>
            <IMG src={IconoVolver} alt="Volver"
            onClick={() => setProyectoSeleccionado("")}
            ></IMG>
            <IMG src={IconoEditar} alt="Editar proyecto"
            onClick={() => setEditando(true)}
            ></IMG>
            <IMG src={IconoEliminar} alt="Eliminar Proyecto"
            onClick={() => eliminarProyecto(id)}
            ></IMG>

        </Flex>
       
      </Div>

    {editando ? 
    <>
    <Formulario 
    setEditando={setEditando}
    editando={editando}
    proyectoSeleccionado={proyectoSeleccionado}
    setProyectoSeleccionado={setProyectoSeleccionado}/>
    </>
    : 
    <>

    <GridDesktop>
      <div>
    <Div>
        <Nombre> Cuenta Vueltas</Nombre>     
          <CuentaVueltas
            contador={contador}
            setContador={setContador}
            vueltasTejidas={vueltasTejidas}
          />
        
      </Div>
      <Div>
        <Nombre> Notas </Nombre>
        <Notas
        notasActualizadas={notasActualizadas}
        guardarNota={guardarNota}
        eliminarNota={eliminarNota}
        />

        
      </Div>
      </div>
      <div>
      <Div>
        <Nombre> Datos de la muestra</Nombre>
        <Dato>Tejida a punto: {muestra}</Dato>
        <Grid>
          <DatoMuestra> {puntosMuestra} Puntos</DatoMuestra>
          <DatoMuestra> {vueltasMuestra} Vueltas</DatoMuestra>
        
          <DatoMuestra> {anchoMuestra} cms ancho</DatoMuestra>
          <DatoMuestra> {altoMuestra} cms alto</DatoMuestra>
        </Grid>
      </Div>

      <Div>
        <Nombre> Calculadora </Nombre>
        
        <Calculadora
        altoMuestra= {altoMuestra}
        anchoMuestra= {anchoMuestra}
        puntosMuestra= {puntosMuestra}
        vueltasMuestra= {vueltasMuestra}
        />
      </Div>
      </div>
      </GridDesktop> 
      </>
      
    
    }

  </Contenedor>
    </ProyectoDiv>
  );
};

export default Proyecto;

const ProyectoDiv = styled.div`
background-color: var(--primario);
padding: 2rem 0;
`
const Contenedor = styled.div`
@media (min-width: 768px){
  max-width: 80%;
  margin:0 auto;
}
`
const Nombre = styled.h3`
  color: var(--primario);
  font-weight: 700;
  font-size: 2.3rem;
  text-align: center;
`;
const Dato = styled.h3`
  color: var(--gris-oscuro);
  margin: 2rem;
  text-align:center;
`;

const DatoMuestra = styled.h3`
  color: var(--gris-oscuro);
  margin: 1rem;
  text-align:center;
`;



const Div = styled.div`
  background-color: white;
  max-width: 100%;
  box-shadow: 10px 5px 5px var(--gris-oscuro);
  padding: 1rem 2rem 2rem 2rem;
  margin-bottom: 2rem;

  @media (min-width: 768px){
    max-width: 90%;
    border-radius:2rem;
    margin: 0 auto 2rem auto;
  }

 
`;
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
const Grid = styled.div`
display:grid;
grid-template-columns: repeat(2, 1fr);
margin-bottom: 1rem;


`

const GridDesktop = styled.div`
@media (min-width: 1100px){
 display:grid;
grid-template-columns: repeat(2, 1fr);
margin-bottom: 1rem; 
}



`

