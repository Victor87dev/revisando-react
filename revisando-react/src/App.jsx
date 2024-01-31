import Lista from "./components/Lista/Lista"


function App() {
  const minhaLista = ["React","Javascript","CSS","Java"]

  return (

    <>
     <h1>Rederização de listas</h1>
     <Lista itens={minhaLista} />
     <Lista itens={[]} />
    </>
  )
}

export default App
