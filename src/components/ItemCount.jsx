import "../css/ItemCount.css";

export default function ItemCount({ cantidad, setContador, desde, hasta, onAdd }) {


  return (
    <>
      <div className="card-laptop">
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
          }}
        >
          Agregar al carrito
        </button>
      </div>
    </>
  );
}
