import NavBar from "./components/NavBar";
import './NavBar.css';
import ItemCount from "./components/ItemCount";

function App() {
  return (
      <div>
        <NavBar />
        <br /><br />
        <br />
        <ItemCount desde={1} hasta={5} />
      </div>
  );
}

export default App;
