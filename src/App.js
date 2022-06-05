import NavBar from "./components/NavBar";
import '../src/css/NavBar.css';
import ItemCount from "./components/ItemCount";

function App() {

  const onAdd = (cantidad) =>{
    alert('Agregaste ' + cantidad + ' productos al carrito')
  }

  return (
      <div>
        <NavBar />
        <br /><br />
        <br />
        <ItemCount desde={1} hasta={10} onAdd={onAdd} />
      </div>
  );
}

export default App;
