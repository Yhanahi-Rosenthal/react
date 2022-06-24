import React from "react";
import { useContext } from "react";
import { CartContext } from "./CartContext";
import "../css/Cart.css";
import { Link } from "react-router-dom";
import basurita from "../bolsa-de-reciclaje.png"
import basura from "../basurita1.png"
import nose from "../nose.png"

export default function Carrito() {
  const { cart, getItemPrice, emptyCart, deleteItem} = useContext(CartContext);


  return (
    <>
        <div>
            {cart.length > 0 && <div>
                                    <h2 className="miCompra">Mi Compra</h2>
                                    <h3 className="resumen"> Resumen:</h3>
                                </div>} 
            <div className="contenedor-carrito">
            {cart.length > 0 
            ? cart.map((item) => {
                return  <div className="cart-content">
                            <div className="card-carrito">
                                <div>
                                    <img src={item.img} className="img-carrito" />
                                </div>
                                <p className="name-carrito">{item.name}</p>
                                <p className="cart-cantidad">{item.cantidad} X</p>
                                <p className="price-carrito">${item.price}</p> 
                                <p onClick={()=>{deleteItem(item.id)}}><img src={basura} className="basurita1" /><img src={basurita} className="basurita" /></p>                   
                            </div>
                        </div>
            })
            
                : (
                <div className="contenedor-cartVacio">
                  <div className="noHayProductos">
                    <img src={nose} className="nose" />
                    <h2 className="noProductos">Aun no hay productos en tu carrito</h2>
                    <button className="volver-cartVacio"><Link to="/inicio" className="link-cartVacio">Ver Productos</Link></button>

                  </div>
                </div>
            )}
            {cart.length > 0 && <button onClick={()=>{emptyCart()}} className="vaciarCarro" >Vaciar carrito</button>}
            </div>
            {cart.length > 0 && <div>
                                    <h2 className="Total">Total:${getItemPrice()}</h2>
                                    <div className="botones-cart">
                                         <button className="volver-cart"><Link to="/inicio" className="link-cart">← Volver a comprar</Link></button>
                                         <button className="finalizar-cart"><Link to="/Pagos" className="link-cart">Finalizar compra</Link></button>
                                    </div>
                                    
                                </div>
            } 
      </div>
    </>
  );
}

{/* <button
            onClick={() => {
              emptyCart();
              alert("Eliminaste tu compra");
            }}
          >
            Eliminar compra
          </button> */}