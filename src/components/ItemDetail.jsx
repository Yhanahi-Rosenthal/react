import { Link } from "react-router-dom";
import "../css/Item.css";
import '../css/ItemDetail.css';
import ItemCount from "./ItemCount";

const ItemDetail = ({productos1})=>{

//     const onAdd = (cantidad) =>{
//     alert('Agregaste ' + cantidad + ' productos al carrito')
//   }


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
            <ItemCount desde={1} hasta={10} />
            <button className="botonmas"><Link to="/cart/" className="addToCart">Agregar al carrito</Link></button>            
            </div>
        </>
        
    )
}

export default ItemDetail;