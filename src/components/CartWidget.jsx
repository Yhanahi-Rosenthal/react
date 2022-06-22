import carrito from "../carrito-de-compras.png";
import "../css/CartWidget.css";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "./CartContext";

function CartWidget() {

  const {getItemQty} = useContext(CartContext)

  return (
    <div className="divCarrito">
      <Link to="/Carrito"><img src={carrito} className="carrito" /></Link>
      <p className="cantidad-c">{getItemQty}</p>
    </div>
  );
}

export default CartWidget;
