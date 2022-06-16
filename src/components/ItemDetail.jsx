import React, { useEffect, useState } from "react";
import Detail from "./Detail";
import '../css/ItemDetail.css';

const ItemDetail = ({productos1})=>{
    
    const [cargando, setCargando] = useState(true)
    const [detalle, setDetalle] = useState(false)

    useEffect(() =>{
        const donut = new Promise((res, rej) =>{
            setTimeout(()=>{
                res('Cargando...')
            }, 4000)
        })

        .then((res)=>{
            setDetalle(true)
            setCargando(false)
        })

        .catch((res) =>{
            console.log('Error al cargar')
        })
    }, [])

    return(
        <>
            <div>{cargando && 'Cargando...'}</div>
            <div>{detalle && productos1?.map(producto => <Detail key={producto.id} producto={producto} />)}</div>
        </>
    )
}

export default ItemDetail;