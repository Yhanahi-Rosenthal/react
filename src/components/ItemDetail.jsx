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
    const {isInCart, addItem} = useContext(CartContext)
    const onAdd = () =>{
        isInCart(productos1.id)
        addItem(productos1, cantidad)
  }

//   useEffect(()=>{
//     // db me trae la base de datos.
//     const db = getFirestore()
//     // ItemCollection agarra la base de datos como primer parametro y como segundo parametro tengo que poner a la colleccion que quier acceder.
//     const ItemsCollection = collection(db , 'Items')
//     // getDocs trae la colleccion que trae ItemCollection y devuelte una promesa por lo que hay que tratarlo como una promera con ".then".
//     getDocs(ItemsCollection).then(res => {
//         // dentro del map, se hace un return implicito, creo un objeto y traigo con un spread y lo uno con el id de cada producto
//         setResultado(res.docs.map(doc => ({...doc.data(), id: doc.id})))
//     }) 
//     .catch((rej) =>{
//         console.log('Hubo un error')
//     })
// }, [])

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
            <ItemCount desde={1} hasta={10}  cantidad={cantidad} setContador={setContador} onAdd={onAdd} productos1={productos1} />  
            </div>
        </>
        
    )
}

export default ItemDetail;