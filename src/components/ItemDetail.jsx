import React, { useEffect, useState } from "react";
import Oreo from '../Oreo1.png';
import '../css/ItemDetail.css';

const ItemDetail = ({donuts1})=>{
    
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
            <div>{detalle && 
                <div className="DetailContain">
                    <div>
                        <img src={Oreo} className="img-detail" />
                    </div>
                        <p className="name-detail">Donut Oreo</p>
                        <p className="price-detail">$160</p>
                    <div>
                        <p className="descripcion">Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                        Fuga quo animi aut sequi voluptatem? Tenetur expedita saepe modi? Perferendis velit facere quidem,
                        aut ex mollitia accusantium culpa repudiandae atque alias!</p>
                    </div>
                    <button className="botonmas">
                        Agregar al carrito
                    </button>
                </div>

}           </div>
        </>
    )
}

export default ItemDetail;