import Timeline from "./pages/Timeline"
import Gallery from "./pages/Gallery"
import Portada from "./pages/Portada"
import Presentacion from "./pages/Presentacion"
import Confirmation from "./pages/Confirmation"
import Evento from "./pages/Evento"
import { theme } from "./theme/theme"
import { ThemeProvider } from "styled-components"

import './App.css'


function App() {

  return (
    <ThemeProvider theme={theme}>
    <div>
      <Portada/>
      <Presentacion />
      <Gallery />
      <Timeline />
      <Evento />
      <Confirmation />
    </div>
    </ThemeProvider>
  )
}

export default App
