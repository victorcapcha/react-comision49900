import Navbar from './components/Navbar/Navbar' 
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import ItemCount from "./components/ItemCount/ItemCount"
import MercadoLibre from './components/MercadoLibre/MercadoLibre'

function App() {
   return (
    <>
      <MercadoLibre />
       <Navbar />
       <ItemListContainer greeting={"Bienvenidos a mi Ecommerce"}/>
        <h1>Comision 49900 Coderhouse</h1>
        <ItemCount initialValue={10}/>
        <ItemCount initialValue={20}/>     </>
  )
}

export default App
