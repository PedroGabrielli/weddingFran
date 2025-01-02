import { Timeline } from "antd"
import Gallery from "./pages/Gallery"
import Portada from "./pages/Portada"
import Presentacion from "./pages/Presentacion"
import Confirmation from "./pages/Confirmation"
import Presents from "./pages/Presents"
import Evento from "./pages/Evento"
import './App.css'


function App() {

  return (
    <div>
      <Portada/>
      
      <Presentacion />
      <Gallery />
      <Timeline />
      <Evento />
      <Presents />
      <Confirmation />

      
    </div>
  )
}

export default App
