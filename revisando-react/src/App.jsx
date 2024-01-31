import { useState } from "react";
import SeuNome from "./components/SeuNome/SeuNome";
import Saudacao from "./components/Saudacao/Saudacao";

function App() {
  
  const [nome, setNome] = useState()

  return (

    <>
     <h1>State lift</h1>
     <SeuNome setNome={setNome} />
     <Saudacao nome={nome} />
    </>
  )
}

export default App
