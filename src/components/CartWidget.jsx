import carrito from "../carrito-de-compras.png"
import "../CartWidget.css";

function CartWidget(){
    return  <div className="divCarrito">
                <img src={carrito} className="carrito" />  
                <p className="cantidad-c">3</p>
            </div>   
}

export default CartWidget;