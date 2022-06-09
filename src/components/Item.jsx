import React from "react";
import Dona from '../img/Marroc.png';
import '../css/Item.css';

const Item = ({donut})=>{
    return(
        <>
            
                <div className="card-donut">
                        <div>
                            <img src={donut.img} className="img-dona" />
                        </div>
                        <p className="nombre">Donut Marroc</p>
                        <p className="precio">'$' + ${donut.price}</p>
                        <div className="container-contador">
                            
                        <br />
                        </div>     
                            <button className="boton" > 
                                    Ver detalle del producto
                            </button>
                    </div>   
               
                         
        </>
    )
}

export default Item;