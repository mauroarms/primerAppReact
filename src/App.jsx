//Importaciones de componentes

import Informacion from "./components/Informacion"
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
  
  return (

    // Lógica del Componente

    // Maquetado que va a dibujar el componente 
    <> 
      {/* <Informacion></Informacion> */}
      <Informacion tituloSecundario="Este titulo fue creado con un props"/>
      
    </>
  )
}

export default App
