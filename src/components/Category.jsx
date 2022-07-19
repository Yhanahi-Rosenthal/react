import React, { useEffect, useState } from "react";
import Item from "./Item";
import "../css/Item.css";
import Portada from "../Portada1.png";
import { useParams } from "react-router-dom";
import {collection, getDocs, getFirestore} from 'firebase/firestore';

const Category = () => {


    const {category} = useParams()

    const [cargando, setCargando] = useState(true)
    const [products, setProducts] = useState(false)

    useEffect(()=>{
        setTimeout(() => {

            // db me trae la base de datos.
        const db = getFirestore()
        // ItemCollection agarra la base de datos como primer parametro y como segundo parametro tengo que poner a la colleccion que quier acceder.
        const ItemsCollection = collection(db , 'Items')
        // getDocs trae la colleccion que trae ItemCollection y devuelte una promesa por lo que hay que tratarlo como una promera con ".then".
        getDocs(ItemsCollection).then(res => {
            // dentro del map, se hace un return implicito, creo un objeto y traigo con un spread y lo uno con el id de cada producto
            setProducts(res.docs.map(doc => ({...doc.data(), id: doc.id})))
        }) 
        .catch((rej) =>{
            console.log('Hubo un error')
        })
        
            setCargando(false)
        }, 2000);
        
    }, [])
    

    return(<>
        <br /><br /><br />
        <img alt="Portada" src={Portada} className="portada" />
        <div className="contenedor">
            {cargando && 'Cargando...'}
            {products && products?.filter(producto => producto.category.includes(category)).map((producto) => <Item key={producto.id} producto={producto}/>)}
        </div>
        </>
    )
}

export default Category;