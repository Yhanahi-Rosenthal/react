import React from "react";
import '../css/Item.css';

const Item = ({donut})=>{

    const {img, name, price} = donut

    return(
        <>
            
                <div className="card-donut">
                        <div>
                            <img src={donut.img} className="img-dona" />
                        </div>
                        <p className="nombre">{donut.name}</p>
                        <p className="precio">${donut.price}</p>
                        <div className="container-contador">
                            
                        <br />
                        </div>     
                            <button className="boton" > 
                                    Ver detalle
                            </button>
                    </div>   
               
                         
        </>
    )
}

export default Item;