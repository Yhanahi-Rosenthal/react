import React from "react";
import { useContext } from "react";
import { CartContext } from "./CartContext";

export default function Carrito(){

    const {deleteItem} = useContext(CartContext)

    const {getItemPrice, emptyCart} = useContext(CartContext)

    return(
        <div>
            <h2 className="tituloCarrito">Tu compra</h2>
            <p className="price" >${getItemPrice}</p>
            <div>

            </div>
            <button onClick={() =>{
                emptyCart() 
                alert('Eliminaste tu compra')
                }}>
                    Eliminar compra
            </button>
        </div>
    )
}