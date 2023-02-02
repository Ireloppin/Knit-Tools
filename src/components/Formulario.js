import React, {useState} from 'react';
import styled from 'styled-components';
import IconoVolver from "../img/icono-volver.png"

const Formulario = ({guardarProyecto, setCreandoProyecto, setEditando, editando, proyectoSeleccionado, setProyectoSeleccionado }) => {
  

    const [nombre, setNombre]= useState(editando? proyectoSeleccionado.nombre : '')
    const [material, setMaterial]= useState(editando? proyectoSeleccionado.material :'')
    const [aguja, setAguja]= useState(editando? proyectoSeleccionado.aguja :'')
    const [muestra, setMuestra]= useState(editando? proyectoSeleccionado.aguja :'')
    const [anchoMuestra, setAnchoMuestra]= useState(editando? proyectoSeleccionado.anchoMuestra :'')
    const [altoMuestra, setAltoMuestra]= useState(editando? proyectoSeleccionado.altoMuestra :'')
    const [puntosMuestra, setPuntosMuestra] = useState(editando? proyectoSeleccionado.puntosMuestra :'')
    const [vueltasMuestra, setVueltasMuestra] = useState(editando? proyectoSeleccionado.vueltasMuestra :'')
   
    

    const handleProyecto = (e) =>{
        e.preventDefault();
        
        if (nombre === ''){
            console.log('El nombre es obligatorio');
        }
            if(editando){
            setProyectoSeleccionado({...proyectoSeleccionado, nombre:nombre, material:material, aguja:aguja, anchoMuestra:anchoMuestra, altoMuestra:altoMuestra, puntosMuestra:puntosMuestra, vueltasMuestra:vueltasMuestra })
            setEditando(false)
            } else {
            guardarProyecto({nombre, material, aguja, muestra, anchoMuestra, altoMuestra, puntosMuestra, vueltasMuestra})    
            }
            
        
    }

  return (
    <FormularioDiv onSubmit={handleProyecto}>

        {editando ?
            <IMG src={IconoVolver} alt="Volver"
        onClick={()=> setEditando(false)}
        ></IMG>
         : 
         <IMG src={IconoVolver} alt="Volver"
        onClick={()=> setCreandoProyecto(false)}
        ></IMG>
         }
        <Grid>
            <div>
        
        <Div>
        <Label id='nombre'> Nombre del proyecto*</Label>
        <Input type='text' value={nombre} placeholder="Nombre"
        onChange={(e)=> setNombre(e.target.value)}
        /> 
        </Div>
        <Div>
        <Label id='material'> Material (nombre de lana o hilo) </Label>
        <Input type='text' value={material} placeholder="Material"
        onChange={(e)=> setMaterial(e.target.value)}
        />
        </Div>
        <Div>
        <Label id='aguja'> Aguja utilizada </Label>
        <Input type='number' value={aguja} placeholder="Numero de aguja"
        onChange={(e)=> setAguja(Number(e.target.value))}
        />
        </Div>
        <Div>
        <Label id='aguja'>Muestra tejida en punto </Label>
        <Input type='text' value={muestra} placeholder="Tejido de la muestra"
        onChange={(e)=> setMuestra(e.target.value)}
        />
        </Div>
        </div>
        <div>
  
        <Div>
        <Label id='anchoMuestra'> Medida de ancho (cms) </Label>
        <Input type='number' value={anchoMuestra} placeholder="Cms de ancho"
        onChange={(e)=> setAnchoMuestra(Number(e.target.value))}
        />
        </Div>
        <Div>
        <Label id='altoMuestra'> Medida de alto (cms) </Label>
        <Input type='number' value={altoMuestra} placeholder="Cms de alto"
        onChange={(e)=> setAltoMuestra(Number(e.target.value))}
        />
        </Div>
        <Div>
        <Label id='puntosMuestra'> Puntos de la muestra </Label>
        <Input type='number' value={puntosMuestra} placeholder="Número de puntos"
        onChange={(e)=> setPuntosMuestra(Number(e.target.value))}
        />
        </Div>
        <Div>
        <Label id='vueltasMuestra'> Vueltas de la muestra </Label>
        <Input type='number' value={vueltasMuestra} placeholder="Número de vueltas"
        onChange={(e)=> setVueltasMuestra(Number(e.target.value))}
        />
        </Div>
        </div>
        </Grid>
        <Div>
        <InputSubmmit type="submit" value={editando ?"Guardar cambios" :"Guardar proyecto"}/>
        </Div>

    </FormularioDiv>
  )
}

export default Formulario

const FormularioDiv = styled.form`
    background-color:white;
    max-width:90%;
    box-shadow: 10px 5px 5px var(--gris-oscuro);
    padding:3rem;
    border-radius: 2rem;
    margin: 1rem auto 3rem auto;
    
 `;

const Grid = styled.div`
display:grid;
    @media (min-width: 768px){
        grid-template-columns: repeat(2, 1fr);
        gap:5rem
    }
    
`
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
    color: var(--gris-claro);
    padding:1rem;
`;

const IMG = styled.img`
display:block;
width:5rem;
margin-bottom: 2rem;
`