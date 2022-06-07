import NavBar from "./components/NavBar";
import '../src/css/NavBar.css';
import ItemCount from "./components/ItemCount";
import ItemListContainer from "./components/ItemListContainer";
import { useState } from "react";

function App() {

  const onAdd = (cantidad) =>{
    alert('Agregaste ' + cantidad + ' productos al carrito')
  }

  return (
      <div>
        <NavBar />
        <br /><br />
        <br />
        {/* <ItemCount desde={1} hasta={10} onAdd={onAdd} /> */}
        <ItemListContainer />
        
      </div>
  );
}

export default App;
