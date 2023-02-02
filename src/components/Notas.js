import React, {useState} from 'react';
import styled from 'styled-components';
import IconoEliminar from "../img/icono-eliminar.png";
import IconoEditar from "../img/icono-editar.png"


const Notas = ({notasActualizadas, guardarNota, eliminarNota}) => {
    const [textoNota, setTextoNota]= useState('')
    const [creandoNota, setCreandoNota] = useState(false)

    const handleNotas =(e)=>{
        e.preventDefault();
        guardarNota({textoNota})
   
        setCreandoNota(false)
        setTextoNota('')
    }

   
  return (
    <div>
        
        {notasActualizadas.length === 0 ? 
        <Dato>No tienes ninguna nota guardada</Dato>
        :
        
        notasActualizadas.map ( nota =>
            <Flex key= {nota.id}>
                <Nota >{nota.textoNota}</Nota>
                <>
               
                <IMG src={IconoEliminar} alt="borrar nota"
                onClick={()=> eliminarNota(nota.id)}
                ></IMG>
                </>
            </Flex>)
        }
        <button className="boton"
        onClick={()=> setCreandoNota(!creandoNota)}
        >{creandoNota ? 'Cerrar' : 'Nueva nota'}</button>

        {creandoNota &&
        <FormularioDiv onSubmit={handleNotas}>
        <Div>
        <Label id='cmsAalto'> Escribe tu nota </Label>
        <Input type='text' value={textoNota} placeholder="texto de la nota"
        onChange={(e)=> {setTextoNota(e.target.value)}}
        />
        </Div>
        <InputSubmmit type="submit" value="Guardar Nota"/>
        
        </FormularioDiv>
        }
    </div>
  )
}

export default Notas

const Nota = styled.h3`
color: var(--gris-oscuro);
margin: 0 0 2rem 0;
padding-right:2rem;


`

const FormularioDiv = styled.form`
    padding:1rem;
    margin-bottom:1rem;
   
`;

const Div = styled.div`
    display:flex;
    flex-direction: column;
    gap:1rem;
    padding:1rem 0;
`
const Label = styled.label`
    color: var(--primario);
    font-size: 1.8rem;
    font-weight:700;
    text-align:center;
    
`;

const Input = styled.input`
    color: grey;
    font-size:1.7rem;
    border: 0;
    background-color: #f5f5f5;
    padding:1rem;
    
`

const InputSubmmit = styled.input`
    background-color: var(--primario);
    font-size:2.2rem;
    font-weight:700;
    border: 0;
    color: var(--blanco);
    padding:1rem;
    width:100%;
`;

const Flex = styled.div`
display:flex;
flex-direction:row;
justify-content:space-between;
align-items: center;
`

const IMG = styled.img`
display:block;
width:3rem;
`

const Dato = styled.h3`
  color: var(--gris-oscuro);
  margin: 2rem;
  text-align:center;
`;