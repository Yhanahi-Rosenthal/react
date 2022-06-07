import React, { useEffect, useState } from "react";
import ItemList from "./ItemList";

const ItemListContainer = () =>{

    const [computadoras, setComputadoras] = useState([])

    useEffect(() =>{
        fetch("https://rickandmortyapi.com/api/character")
            .then((res) => res.json())
            .then(res => setComputadoras(res.results))
            .catch(error => console.error("Error", error))
        
    }, [])

    return(
        <div>
            <ItemList computadoras={computadoras} />
        </div>
    )
}

export default ItemListContainer