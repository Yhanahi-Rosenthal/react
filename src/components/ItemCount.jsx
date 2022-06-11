import React, { useState } from "react";
import '../css/ItemCount.css';

export default function ItemCount ({ desde, hasta, onAdd }) {
    const [numero, setContador] = useState(1)

    console.log('render')
    return(
        
            <>
                <div className="card-laptop">
                    <div>
                        {/* <img src={dona} className="img-laptop" /> */}
                    </div>
                    <div className="container-contador">
                    <br />
                    <button
                        onClick={() =>{
                            numero > desde ? setContador(numero - 1) : alert('No puede ser menos de 1')
                        }}
                        className="button"
                    >
                            -
                    </button>
                    {numero}
                    <button
                        onClick={() =>{
                            numero < hasta ? setContador(numero + 1) : alert('No hay mas stock de este producto')
                        }}
                        className="button"
                    >
                            +
                    </button>
                    </div>     
                        <button className="boton" 
                            onClick={() =>{
                               onAdd(numero)
                            }}> 
                                Agregar al carrito
                            </button>
                </div>            
            </>
           
           
        
    )
}