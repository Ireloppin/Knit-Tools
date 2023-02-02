import { useState, useEffect } from "react";
import Header from "./components/Header";
import Inicio from "./components/Inicio";
import Proyecto from "./components/Proyecto";




function App() {

  const [proyectoSeleccionado, setProyectoSeleccionado]= useState('')
  const [proyectos, setProyectos]= useState(localStorage.getItem('proyectos') ? JSON.parse(localStorage.getItem('proyectos')) : [])

  useEffect(() => {
    localStorage.setItem('proyectos', JSON.stringify(proyectos))
  
    
  }, [proyectos])

  useEffect(()=>{
    const proyectosActualizados = proyectos.map(proyecto => 
      proyecto.id === proyectoSeleccionado.id ?
       proyectoSeleccionado:proyecto
      )
      setProyectos(proyectosActualizados);
      
  }, [proyectoSeleccionado])

  const eliminarProyecto = id =>{
    if(window.confirm('¿Quieres eliminar este proyecto?')){
     const proyectosActualizados = proyectos.filter(proyecto =>
      proyecto.id !== id)
      setProyectos(proyectosActualizados);
      setProyectoSeleccionado('') 
  } 
  }
  


  return (
    <div >
      <Header/> 

      {proyectoSeleccionado === '' ?
      <Inicio
      proyectos = {proyectos}
      setProyectos ={setProyectos}
      setProyectoSeleccionado={setProyectoSeleccionado}
      />
      :
      <Proyecto
      proyectoSeleccionado={proyectoSeleccionado}
      setProyectoSeleccionado={setProyectoSeleccionado}
      eliminarProyecto={eliminarProyecto}
      />
      }      
      
     
    </div>
  );
}

export default App;
