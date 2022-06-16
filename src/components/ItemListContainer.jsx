import React, { useEffect, useState } from "react";
import ItemList from "./ItemList";

const ItemListContainer = () =>{

    const [productos, setProductos] = useState([])

    useEffect(() =>{
        fetch("/Productos.json")
            .then((res) => res.json())
            .then(res => setProductos(res))
            .catch(error => console.error("Error", error))
        
    }, [])

    return(
        <div>
            <ItemList productos={productos} />
        </div>
    )
}

export default ItemListContainer