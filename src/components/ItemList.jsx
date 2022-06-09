import React, { useEffect, useState } from "react";
import Item from "./Item";

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
            {resultado && donuts?.map(donut => <Item  donut={donut.id} />)}
        </div>
    )
}

export default ItemList;