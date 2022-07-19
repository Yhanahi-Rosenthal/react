
import { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "../src/css/index.css";
import "../src/css/NavBar.css";
import Carrito from "./components/Carrito";
import MyProvider from "./components/CartContext";
import Footer from "./components/Footer";
import ItemDetailContainer from "./components/ItemDetailContainer";
import ItemList from "./components/ItemList";
import NavBar from "./components/NavBar";
import PopCake from "./components/PopCake";
import { initializeApp } from "firebase/app";
import Checkout from "./components/Checkout";
import {Link} from 'react-router-dom';
import Category from "./components/Category";



function App() {

  const firebaseConfig = {
    apiKey: "AIzaSyCcpmvqjDhPdTkxEflnK44vCJSABbkJ2fM",
    authDomain: "cakecloud-5b22b.firebaseapp.com",
    projectId: "cakecloud-5b22b",
    storageBucket: "cakecloud-5b22b.appspot.com",
    messagingSenderId: "791639510382",
    appId: "1:791639510382:web:0856cb743a51f5c242457f"
  };
  
  
  initializeApp(firebaseConfig);  
  

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
            <Route path="/" element={<ItemList />} />
            <Route path="/Inicio" element={<ItemList />} />
            <Route path="/Category/:category" element={<Category productos={productos} />} />
            <Route path="/Detail/:id" element={<ItemDetailContainer />} />
            <Route path="/Carrito/" element={<Carrito />} />
            <Route path="/Checkout" element={<Checkout />} />
          </Routes>  
          <Footer />
        </MyProvider>
      </BrowserRouter>
      
      
      
    </>
  );
}

export default App;
