import React, { useEffect, useState } from "react";
import Item from "./Item";

const ItemList = ({computadoras}) => {

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
            {resultado && computadoras?.map(computadora => <Item key={computadora.id} computadora={computadora} />)}
        </div>
    )
}

export default ItemList;