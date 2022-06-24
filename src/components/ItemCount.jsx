import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import "../css/ItemCount.css";
import { CartContext } from "./CartContext";

export default function ItemCount({
  cantidad,
  setContador,
  desde,
  hasta,
  onAdd,
  productos1,
}) {
  const { deleteItem } = useContext(CartContext);
  const [botones, setBotones] = useState(true);
  const [opciones, setOpciones] = useState(false);

  return (
    <>
      <div className="card-laptop">
        {botones}
        {opciones}
        {botones && <div>
        <div className="container-contador">
          <br />
          <button
            onClick={() => {
              cantidad > desde
                ? setContador(cantidad - 1)
                : alert("No puede ser menos de 1");
            }}
            className="button"
          >
            -
          </button>
          {cantidad}
          <button
            onClick={() => {
              cantidad < hasta
                ? setContador(cantidad + 1)
                : alert("No hay mas stock de este producto");
            }}
            className="button"
          >
            +
          </button>
        </div>
          <button
            className="botonmas"
            onClick={() => {
              onAdd();
              setOpciones(true);
              setBotones(false);
            }}
          >
            Agregar al carrito
          </button>
          </div>
        }
        {opciones && (
          <div className="opciones">
            <button className="irAlCarrito">
              <Link to="/Carrito" className="link">Ir al carrito</Link>
            </button>
            <button
              onClick={() => {
                setOpciones(false);
                setBotones(true);
                deleteItem(productos1.id);
              }}
              className="borrarDelCarrito"
            >
              Borrar del carrito
            </button>
          </div>
        )}
      </div>
    </>
  );
}
