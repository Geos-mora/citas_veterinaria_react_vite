
import Header from "./components/header/Header"
import Formulario from "./components/main/Formulario"
import LitadoDePacientes from "./components/main/LitadoDePacientes"
import DataProvider from "./useContext/DataProvider"





function App() {
  
  


  return (

    <DataProvider>
        <div >
          <Header/>
          <div className="containerMain">
              <Formulario/>
              <LitadoDePacientes/>
          </div>
        </div>
    </DataProvider>

  )
}

export default App
