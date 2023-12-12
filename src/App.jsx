import Navbar from './components/Navbar/Navbar'
import ItemCount from "./components/ItemCount/ItemCount"


function App() {
  return (
    <>
       <Navbar />
        <h1>Comision 49900 Coderhouse</h1>
       <ItemCount initialValue={10}/>
       <ItemCount initialValue={20}/>
    </>
  )
}

export default App
