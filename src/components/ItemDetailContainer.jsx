//@ts-check
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "./ItemDetail";
import {collection, getDocs, getFirestore} from 'firebase/firestore';

const ItemDetailContainer = () =>{
    
    const {id} = useParams()

    const [products, setResultado] = useState([{}])
    const [cargando, setCargando] = useState(true)

    useEffect(()=>{
        setTimeout(() => {

            // db me trae la base de datos.
        const db = getFirestore()
        // ItemCollection agarra la base de datos como primer parametro y como segundo parametro tengo que poner a la colleccion que quier acceder.
        const ItemsCollection = collection(db , 'Items')
        // getDocs trae la colleccion que trae ItemCollection y devuelte una promesa por lo que hay que tratarlo como una promera con ".then".
        getDocs(ItemsCollection).then(res => {
            // dentro del map, se hace un return implicito, creo un objeto y traigo con un spread y lo uno con el id de cada producto
            setResultado(res.docs.map(doc => ({...doc.data(), id: doc.id})))
        }) 
        .catch((rej) =>{
            console.log('Hubo un error')
        })
        
            setCargando(false)
        }, 2000);
        
    }, [])

    

    

    return(
        <>  
            {cargando && 'Cargando...'}
            {products && products?.filter((product) => product.id?.includes(id)).map((producto) => <ItemDetail key={producto.id} producto={producto}/>)}
        </>
        
    )
}

export default ItemDetailContainer