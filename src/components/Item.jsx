import React from "react";
import '../css/Item.css';
import { Link } from "react-router-dom";
import ItemDetail from "../components/ItemDetail";

const Item = ({producto})=>{

    return(
        <>
            
                <div className="card-donut">
                        <div>
                            <img src={producto.img} className="img-dona" />
                        </div>
                        <p className="nombre">{producto.name}</p>
                        <p className="precio">${producto.price}</p>
                        <div className="container-contador">
                            
                        <br />
                        </div>     
                            <button className="boton"><Link to={producto.category} >Ver detalle</Link></button>
                    </div>   
               
                         
        </>
    )
}

export default Item;