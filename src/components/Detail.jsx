import React from "react";
import '../css/Item.css';

const Item = ({producto})=>{

    return(
        <>
                    <div className="DetailContain">
                    <div>
                        <img src={producto.img} className="img-detail" />
                    </div>
                        <p className="name-detail">{producto.name}</p>
                        <p className="price-detail">${producto.price}</p>
                    <div>
                        <p className="descripcion">Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                        Fuga quo animi aut sequi voluptatem? Tenetur expedita saepe modi? Perferendis velit facere quidem,
                        aut ex mollitia accusantium culpa repudiandae atque alias!</p>
                    </div>
                    <button className="botonmas">
                        Agregar al carrito
                    </button>
                </div>
                         
        </>
    )
}

export default Item;