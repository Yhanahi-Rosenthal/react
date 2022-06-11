import React, { useEffect, useState } from "react";
import ItemDetail from "./ItemDetail";

const ItemDetailContainer = () =>{

    const [donuts1, setDonuts1] = useState([])

    useEffect(() =>{
        fetch("/Donuts.json")
            .then((res) => res.json())
            .then(res => setDonuts1(res))
            .catch(error => console.error("Error", error))
        
    }, [])

    return(
        <div>
            <ItemDetail donuts1={donuts1} />
        </div>
    )
}

export default ItemDetailContainer