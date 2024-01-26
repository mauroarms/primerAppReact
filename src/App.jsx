//Importaciones de componentes
import Informacion from "./components/Informacion"
import Contador from "./components/Contador"
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
  
  return (
    
    <> 
      <Informacion tituloSecundario="Este titulo fue creado con un props"/>
      <Contador></Contador>
    </>
  )
}
export default App
