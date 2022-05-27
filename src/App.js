import NavBar from "./components/NavBar";
import ItemListSaluda from "./components/ItemListSaluda"
import './NavBar.css';
import './Saludo.css';

function App() {
  return (
    <div>
      <NavBar />
      <ItemListSaluda msg={"Hola"} tutor={"Christhian"} /> 
    </div>
  );
}

export default App;
