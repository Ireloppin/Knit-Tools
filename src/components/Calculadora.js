import React, {useState} from 'react';
import styled from 'styled-components';

const Calculadora = ({altoMuestra ,anchoMuestra, puntosMuestra, vueltasMuestra}) => {

    const [calcularAncho, setCalcularAncho] =useState(false)
    const [calcularLargo, setCalcularLargo] =useState(false)

    const [cmsAncho, setCmsAncho] = useState('');
    const [puntos, setPuntos] = useState(0)
    const [cmsLargo, setCmsLargo] = useState('');
    const [vueltas, setVueltas] = useState(0)


    const calcularPuntos = (e) =>{
        e.preventDefault();
        const calculo = Math.round((cmsAncho * puntosMuestra)/anchoMuestra)

        setPuntos(calculo);
    }
    const calcularVueltas = (e) =>{
        e.preventDefault();
        const calculo = Math.round((cmsLargo * vueltasMuestra)/altoMuestra)

        setVueltas(calculo);
    }

  return (
    <>
        <Grid>
        <button className='boton'
        onClick={()=>{setCalcularAncho(!calcularAncho); setCalcularLargo(false)}}
        > Calcular puntos </button>
        
        <button className='boton'
        onClick={()=>{setCalcularLargo(!calcularLargo); setCalcularAncho(false)}}
        > Calcular vueltas </button>
        </Grid>
        {calcularAncho &&
        <FormularioDiv onSubmit={calcularPuntos}>
        <Div>
        <Label id='cmsAncho'> ¿Cuantos cms necesitas de ancho? </Label>
        <Input type='number' value={cmsAncho} placeholder="Ancho en cms"
        onChange={(e)=> {setCmsAncho(Number(e.target.value))}}
        />
        </Div>
        <InputSubmmit type="submit" value="Calcular" />
        {puntos > 0 ?<Resultado> Resultado: {puntos} puntos.</Resultado> : ''}
        </FormularioDiv>
        }
               
        
        {calcularLargo &&
        <FormularioDiv onSubmit={calcularVueltas}>
        <Div>
        <Label id='cmsLargo'> ¿Cuantos cms necesitas de largo? </Label>
        <Input type='number' value={cmsLargo} placeholder="Largo en cms"
        onChange={(e)=> {setCmsLargo(Number(e.target.value))}}
        />
        </Div>
        <InputSubmmit type="submit" value="Calcular"/>
        {vueltas > 0 ?<Resultado> Resultado: {vueltas} vueltas, {vueltas*2} pasadas.</Resultado> : ''}
        </FormularioDiv>
        }
        
    </>
  )
}

export default Calculadora

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
    color: var(--gris-claro);
    padding:1rem;
    width:100%;
`;
const Resultado = styled.h3`
    color: var(--gris-oscuro);
    font-size:2.5rem;
    text-align:center;
`
const Grid = styled.div`
display:grid;
grid-template-columns: repeat(2, 1fr);
margin-bottom: 1rem;
gap:2rem;

`