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
                                <li><Link to="/Inicio" className="nav inicio">Home</Link></li>
                                <li><Link to="/Category/Muffins" className="nav inicio">Muffins</Link></li>
                                <li><Link to="/Category/PopCakes" className="nav inicio">PopCake</Link></li>
                                <li><Link to="/Category/Donuts" className="nav inicio">Donuts</Link></li>
                                <Carrito />
                                <li><a href="#" className="nav login">Log in</a></li>
                                <li><a href="#" className="nav create">Sign in</a></li>
                            </ul>
                        </nav>
                    </div>
                </header>
        
    </>

    ) 
        
    
   
}

export default NavBar;