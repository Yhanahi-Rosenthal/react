import React from "react";
import laptop from '../img/item-laptop.jpg';
import '../css/Item.css';

const Item = ()=>{
    return(
        <>
            
                <div className="card-laptop">
                        <div>
                            <img src={laptop} className="img-laptop" />
                        </div>
                        <p>Laptop hp 1000tb RAM</p>
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