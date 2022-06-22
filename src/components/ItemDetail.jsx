import { useContext, useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import "../css/Item.css";
import '../css/ItemDetail.css';
import Carrito from "./Carrito";
import { CartContext } from "./CartContext";
import ItemCount from "./ItemCount";

const ItemDetail = ({productos1})=>{

    const [cantidad, setContador] = useState(1)

    const {isInCart, addItem, cart, deleteItem} = useContext(CartContext)

    const onAdd = () =>{
        isInCart(productos1.id)
        addItem(productos1, cantidad)
  }

  useEffect(()=>{
    console.log(cart)

  },[cart])

    return(<>
            
            <div className="DetailContain">
            <div>
                <img src={productos1.img} className="img-detail" />
            </div>
            <p className="name-detail">{productos1.name}</p>
            <p className="price-detail">${productos1.price}</p>
            <div>
                <p className="descripcion">{productos1.description}</p>
            </div>
            <ItemCount desde={1} hasta={10}  cantidad={cantidad} setContador={setContador} onAdd={onAdd} />   
            <button onClick={()=>{deleteItem(productos1.id)}}>borrar producto</button>      
            </div>
        </>
        
    )
}

export default ItemDetail;