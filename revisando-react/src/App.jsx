import Teste1 from "./components/Teste1/Teste1";
import Teste2 from "./components/Teste2/Teste2";
import Form from "./components/Form/Form";
import Evento from "./components/Evento/Evento";

function App() {
  const name = "joao"
  return (

    <>
     <h1>Olá, {name}</h1>
     <Teste1 nome="Joao"/>
     <Teste2 numero="1"/>
     <Teste2 numero="2"/>
     <Form />
     <Evento />
    </>
  )
}

export default App
