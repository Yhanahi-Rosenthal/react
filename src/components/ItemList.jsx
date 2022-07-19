//@ts-check
import React, { useEffect, useState } from "react";
import Item from "./Item";
import "../css/Item.css";
import Portada from "../Portada.png";
import {collection, getDocs, getFirestore} from 'firebase/firestore';

const ItemList = () => {

    // const [cargando, setCargando] = useState(true)
    const [products, setProducts] = useState([{}])

     // db me trae la base de datos.
     const db = getFirestore()
     // ItemCollection agarra la base de datos como primer parametro y como segundo parametro tengo que poner a la colleccion que quier acceder.
     const ItemsCollection = collection(db, 'Items')

    useEffect(()=>{
        // getDocs trae la colleccion que trae ItemCollection y devuelte una promesa por lo que hay que tratarlo como una promera con ".then".
        getDocs(ItemsCollection).then((snapshot) => {
            // dentro del map, se hace un return implicito, creo un objeto y traigo con un spread y lo juntamos con el id de cada producto
            setProducts(snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data()})))
        }) .catch((rej) =>{
            console.log('Hubo un error')
        })
    }, [])

    return(
    <>
        <br /><br /><br />
        <img alt="Portada" src={Portada} className="portada" />
        <div className="contenedor">
            {products && products?.map(producto => <Item key={producto.id} producto={producto} />)}
        </div>
    </>
    )
}

export default ItemList;