import carrito from "../carrito-de-compras.png";
import "../css/CartWidget.css";
import { Link } from "react-router-dom";

function CartWidget() {
  return (
    <div className="divCarrito">
      <Link to="/Carrito">
        <img src={carrito} className="carrito" />
      </Link>
      <p className="cantidad-c">9+</p>
    </div>
  );
}

export default CartWidget;
