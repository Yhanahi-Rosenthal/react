import React, { useEffect, useState } from "react";
import Item from "./Item";
import "../css/Item.css"

const ItemList = ({donuts}) => {

    const [cargando, setCargando] = useState(true)
    const [resultado, setResultado] = useState(false)

    useEffect(()=>{
        const aparecer = new Promise((res, rej) =>{
            setTimeout(()=>{
                res('Cargando...')
            }, 2000)
        })
  
        .then((res) =>{
            setCargando(false)
            setResultado(true)
        })

        .catch((rej)=>{
            console.log('error')
        })

    }, [])
       

    return(
        <div className="contenedor">
            {cargando && 'Cargando...'}
            {resultado && donuts?.map(donut => <Item key={donut.id} donut={donut} />)}
        </div>
    )
}

export default ItemList;