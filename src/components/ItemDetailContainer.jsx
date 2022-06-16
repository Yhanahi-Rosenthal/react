import React, { useEffect, useState } from "react";
import ItemDetail from "./ItemDetail";

const ItemDetailContainer = () =>{

    const [productos1, setProductos1] = useState([])

    useEffect(() =>{
        fetch("/Productos.json")
            .then((res) => res.json())
            .then(res => setProductos1(res))
            .catch(error => console.error("Error", error))
        
    }, [])

    return(
        <div>
            <ItemDetail productos1={productos1} />
        </div>
    )
}

export default ItemDetailContainer