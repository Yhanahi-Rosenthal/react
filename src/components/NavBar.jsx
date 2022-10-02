import logo from "../cakeCloud.png";
import Carrito from "./CartWidget";
import {Link} from 'react-router-dom'; 
import { useState } from "react";

function NavBar(){

    const [menuSide, setMenuSide] = useState(false)

    const clicked = ()=>{
        if(menuSide){
            setMenuSide(false)
        }else{
            setMenuSide(true)
        }
    }
    
    return( <>
                
                <header>
                    <div className="NavBar">
                        <nav className="menu">
                            <nav className="menuMenu">
                            
                            <div className="contenedorImg"><img src="./img/menu.png" className="imgMenu" onClick={()=>{clicked()}} /></div>
                                {menuSide && <ul className='menuCel'>
                                    <li><Link to="/Inicio" className="nav1 inicio1">Home</Link></li>
                                    <li><Link to="/Category/Muffins" className="nav1 inicio1">Muffins</Link></li>
                                    <li><Link to="/Category/PopCakes" className="nav1 inicio1">PopCake</Link></li>
                                    <li><Link to="/Category/Donuts" className="nav1 inicio1">Donuts</Link></li>
                                    <li><a href="#" className="nav1 login1">Log in</a></li>
                                    <li><a href="#" className="nav1 create1">Sign in</a></li>
                                </ul>} 
                            <Carrito />
                            <Link to="/Inicio"><img src={logo} className="nav1 App-logo1" /></Link>
                            </nav>
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