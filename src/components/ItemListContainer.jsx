import React, { useEffect, useState } from "react";
import ItemList from "./ItemList";

const ItemListContainer = () =>{

    const [donuts, setDonuts] = useState([])

    useEffect(() =>{
        fetch("/public/Donuts.json")
            .then((res) => res.json())
            .then(res => setDonuts(res))
            .catch(error => console.error("Error", error))
        
    }, [])

    return(
        <div>
            <ItemList donuts={donuts} />
        </div>
    )
}

export default ItemListContainer