import logo from "../cakeCloud.png";
import Carrito from "./CartWidget";

function NavBar(){
    return  <div>
                <header>
                    <div className="NavBar">
                        <nav className="menu">
                            <ul className="MenuNav">
                                <li><img src={logo} className="nav App-logo" /></li>        
                                <li><a href="#" className="nav inicio">Inicio</a></li>
                                <li><a href="#" className="nav">Muffin's</a></li>
                                <li><a href="#" className="nav">Cake's</a></li>
                                <li><a href="#" className="nav sub-menu1">Especiales</a>
                                     <ul className="sub-menu">
                                        <li><a href="#" className="sub-produ">Cake Cloud</a></li>
                                        <hr />
                                        <li><a href="#" className="sub-produ">Popcake</a></li>
                                        <hr />
                                        <li><a href="#" className="sub-produ">Donuts personalizadas</a></li>
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