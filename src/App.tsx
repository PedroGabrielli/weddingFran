import Timeline from "./pages/Timeline"
import Gallery from "./pages/Gallery"
import Portada from "./pages/Portada"
import Confirmation from "./pages/Confirmation"
import Evento from "./pages/Evento"
import { antdTheme, theme } from "./theme/theme"
import { ThemeProvider } from "styled-components"
import { ConfigProvider } from "antd"
import { initializeApp } from "firebase/app";
import '@fontsource/dancing-script';
import '@fontsource/parisienne';
import '@fontsource/amatic-sc';
import '@fontsource/roboto';
import './App.css'
import { firebaseConfig } from "./constants/FirebaseConfig"

const app = initializeApp(firebaseConfig);

function App() {

  return (
    <ConfigProvider
    theme={antdTheme}
    >
      <ThemeProvider theme={theme}>
        <div>
          <Portada />
          {/* <Presentacion /> */}
          <Timeline />
          <Gallery />
          <Evento />
          <Confirmation />
        </div>
      </ThemeProvider>
    </ConfigProvider>
  )
}

export default App
