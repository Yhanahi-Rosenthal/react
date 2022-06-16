import React, { useEffect, useState } from "react";
import Item from "./Item";
import "../css/Item.css";
import Portada from "../Portada.png";

const ItemList = ({productos}) => {

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
       

    return( <>   
        <br /><br /><br />
        <img alt="Portada" src={Portada} className="portada" />
        <div className="contenedor">
            {cargando && 'Cargando...'}
            {resultado && productos?.map(producto => <Item key={producto.id} producto={producto} />)}
        </div>
        </>
    )
}

export default ItemList;