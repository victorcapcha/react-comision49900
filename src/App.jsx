// import Navbar from './components/Navbar/Navbar'
// import ItemListContainer from './components/ItemListContainer/ItemListContainer'
// import ItemCount from "./components/ItemCount/ItemCount"


// function App() {
//   return (
//     <>
//        <Navbar />
//        <ItemListContainer greeting={"Bienvenidos a mi Ecommerce"}/>
//         <h1>Comision 49900 Coderhouse</h1>
//        <ItemCount initialValue={10}/>
//        <ItemCount initialValue={20}/>
//     </>
//   )
// }

// export default App

import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/Navbar.jsx';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';

const App = () => {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/" component={ItemListContainer} />
        <Route path="/category/:id" component={ItemListContainer} />
        <Route path="/item/:id" component={ItemDetailContainer} />
      </Switch>
    </Router>
  );
};

export default App;

