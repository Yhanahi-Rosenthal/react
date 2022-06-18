import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "../css/Item.css";

const Detail = ({ producto }) => {

  return (
        <>
            <div className="DetailContain">
            <div>
                <img src={producto.img} className="img-detail" />
            </div>
            <p className="name-detail">{producto.name}</p>
            <p className="price-detail">${producto.price}</p>
            <div>
                <p className="descripcion">{producto.description}</p>
            </div>
            <button className="botonmas">Agregar al carrito</button>
            </div>
        </>
  );
};

export default Detail;
