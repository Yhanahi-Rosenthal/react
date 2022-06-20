import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "./ItemDetail";

const ItemDetailContainer = () =>{
    
    const {id} = useParams()
    const [productos1, setProductos1] = useState({})

    useEffect(() =>{
        fetch("/Productos.json")
            .then((res) => res.json())
            .then(data => setProductos1(data.find(producto => producto.id == id)))
            .catch(error => console.error("Error", error))
        
    }, [])


    return(
        <div>
            <ItemDetail productos1={productos1} />
        </div>
    )
}

export default ItemDetailContainer