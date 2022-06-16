import logo from "../cakeCloud.png";
import Carrito from "./CartWidget";
import {Link} from 'react-router-dom'; 

function NavBar(){
    return( <>
                
                <header>
                    <div className="NavBar">
                        <nav className="menu">
                            <ul className="MenuNav">
                                <li><Link to="/Inicio"><img src={logo} className="nav App-logo" /></Link></li>    
                                <li><Link to="/Inicio" className="nav inicio">Inicio</Link></li>
                                <li><Link to="/Muffins" className="nav inicio">Muffin's</Link></li>
                                <li><Link to="/PopCake" className="nav inicio">PopCake</Link></li>
                                <li><Link to="/Donuts" className="nav inicio">Donut's</Link></li>
                    
                                <Carrito />
                                <li><a href="#" className="nav login">Log in</a></li>
                                <li><a href="#" className="nav create">Registrarse</a></li>
                            </ul>
                        </nav>
                    </div>
                </header>
        
    </>

    ) 
        
    
   
}

export default NavBar;