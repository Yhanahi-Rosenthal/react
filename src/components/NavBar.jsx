import logo from "../logo1.png";
import Carrito from "./CartWidget";

function NavBar(){
    return  <div>
                <header>
                    <div className="NavBar">
                        <nav className="menu">
                            <ul className="MenuNav">
                                <img src={logo} className="App-logo" />
                                <a href="#" className="name-logo">E X T R E M E</a>
                                <li><a href="#" className="nav inicio">Inicio</a></li>
                                <li><a href="#" className="nav">Celulares</a></li>
                                <li><a href="#" className="nav">Computadoras</a></li>
                                <li><a href="#" className="nav sub-menu1">Electrodomesticos</a>
                                     <ul className="sub-menu">
                                        <li><a href="#" className="sub-produ">Smart TV</a></li>
                                        <hr />
                                        <li><a href="#" className="sub-produ">Smart Watch</a></li>
                                        <hr />
                                        <li><a href="#" className="sub-produ">Tablets</a></li>
                                        <hr />
                                    </ul>
                                </li>
                    
                                <Carrito />
                                <li><a href="#" className="nav login">Log in</a></li>
                                <li><a href="#" className="nav create">Registrarse</a></li>
                            </ul>
                        </nav>
                    </div>
                </header>
            </div>
}

export default NavBar;