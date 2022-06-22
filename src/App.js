import React, { useEffect, useState } from "react";
import NavBar from "./components/NavBar";
import "../src/css/NavBar.css";
import ItemListContainer from "./components/ItemListContainer";
import "../src/css/index.css";
import ItemDetailContainer from "./components/ItemDetailContainer";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Muffins from "./components/Muffins";
import PopCake from "./components/PopCake";
import Donuts from "./components/Donuts";
import MyProvider from "./components/CartContext";
import Carrito from "./components/Carrito";


function App() {
  

  const [productos, setProductos] = useState([]);

  useEffect(() => {
    fetch("/Productos.json")
      .then((res) => res.json())
      .then((res) => setProductos(res))
      .catch((error) => console.error("Error", error));
  }, []);

  return (
    <>
      <BrowserRouter>
        <MyProvider>
          <NavBar />
          <br /><br /><br />
          <Routes>
            <Route path="/" element={<ItemListContainer />} />
            <Route path="/Inicio" element={<ItemListContainer />} />
            <Route path="/Muffins" element={<Muffins productos={productos} />} />
            <Route path="/PopCake" element={<PopCake productos={productos}  />} />
            <Route path="/Donuts" element={<Donuts productos={productos} />} />
            <Route path="/Detail/:id" element={<ItemDetailContainer />} />
            <Route path="/Carrito/" element={<Carrito />} />
          </Routes>  
        </MyProvider>
      </BrowserRouter>
      
      
      
    </>
  );
}

export default App;
