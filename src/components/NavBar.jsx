import logo from "../logo.svg";

function NavBar(){
    return  <div>
                <header>
                    <div className="NavBar">
                        <nav className="menu">
                            <ul className="MenuNav">
                                <img src={logo} className="App-logo" />
                                <a href="#" className="name-logo">Chemistry between us</a>
                                <li><a href="#" className="nav inicio">Index</a></li>
                                <li><a href="#" className="nav">About Us</a></li>
                                <li><a href="#" className="nav">News</a></li>
                                <li><a href="#" className="nav sub-menu1">Products</a>
                                     <ul className="sub-menu">
                                        <li><a href="#" className="sub-produ">Cleaning</a></li>
                                        <hr />
                                        <li><a href="#" className="sub-produ">Chemistry</a></li>
                                        <hr />
                                        <li><a href="#" className="sub-produ">Beauty</a></li>
                                        <hr />
                                    </ul>
                                </li>
                                   
                                <p className="slach">|</p>
                                <li><a href="#" className="nav login">Login</a></li>
                                <li><a href="#" className="nav create">Create account</a></li>
                            </ul>
                        </nav>
                    </div>
                </header>
            </div>
}

export default NavBar;