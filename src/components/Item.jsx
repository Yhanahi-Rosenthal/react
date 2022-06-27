import '../css/Item.css';
import {Link} from 'react-router-dom';


const Item = ({producto})=>{

    return(
        <>
            
                <div className="card-donut">
                        <div>
                            <img src={producto.img} className="img-dona" />
                        </div>
                        <p className="nombre">{producto.name}</p>
                        <p className="precio">${producto.price}</p>
                        <div className="container-contador">
                            
                        <br />
                        </div>     
                            <button className="boton"><Link to={"/Detail/" + producto.id} producto={producto} className="verDetalle">Ver detalle</Link></button>
                    </div>   
               
                         
        </>
    )
}

export default Item;