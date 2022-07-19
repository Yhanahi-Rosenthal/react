//@ts-check
import { useContext, useEffect, useState } from "react";
import "../css/Item.css";
import '../css/ItemDetail.css';
import { CartContext } from "./CartContext";
import ItemCount from "./ItemCount";

const ItemDetail = ({producto})=>{

    const [cantidad, setContador] = useState(1)
    const {isInCart, addItem} = useContext(CartContext)
    const onAdd = () =>{
        isInCart(producto.id)
        addItem(producto, cantidad)
  }

    return(<>
            
            <div className="DetailContain">
            <div>
                <img src={producto.img} className="img-detail" />
            </div>
            <p className="name-detail">{producto.name}</p>
            <p className="price-detail">${producto.price}</p>
            <div>
                <p className="descripcion">{producto.description}</p>
            </div>
            <ItemCount desde={1} hasta={10}  cantidad={cantidad} setContador={setContador} onAdd={onAdd} productos1={producto} />  
            </div>
        </>
        
    )
}

export default ItemDetail;