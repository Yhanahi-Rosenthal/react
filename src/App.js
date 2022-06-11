import NavBar from "./components/NavBar";
import '../src/css/NavBar.css';
// import ItemCount from "./components/ItemCount";
import ItemListContainer from "./components/ItemListContainer";
// import { useState } from "react";
import '../src/css/index.css';
import Portada from './Portada1.png'
import ItemDetailContainer from "./components/ItemDetailContainer";
// import { BrowserRouter, Routes, Route } from "react-router-dom";


function App() {

  // const onAdd = (cantidad) =>{
  //   alert('Agregaste ' + cantidad + ' productos al carrito')
  // }

  return (
      <div>
        <NavBar />
        <img alt="Portada" src={Portada} className="portada" />
        <br /><br />
        <br />
        {/* <ItemCount desde={1} hasta={10} onAdd={onAdd} /> */}
        <ItemListContainer />
        <ItemDetailContainer />
      </div>
  );
}

export default App;
