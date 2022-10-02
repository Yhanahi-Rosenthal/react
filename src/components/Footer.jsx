import visa from "../tarjetas/visa.png";
import masterCard from "../tarjetas/mastercard.png";
import lider from "../tarjetas/lider.png";
import oca from "../tarjetas/oca.png";
import redPagos from "../tarjetas/redpagos.png";
import abitab from "../tarjetas/abitab.png";
import mercadoPago from "../tarjetas/mercado-pago.png";
import facebook from "../tarjetas/facebook.png";
import insta from "../tarjetas/instagram.png";
import you from "../tarjetas/youtube.png";
import twi from "../tarjetas/gorjeo.png";
import linkedin from "../tarjetas/linkedin.png"
import { Link } from "react-router-dom";
import "../css/Footer.css"



export default function Footer(){

    return(
        <div>
            <div className="footer">
                <div className="redes">
                    <Link to="https://es-la.facebook.com/"><img src={facebook} alt="" className="sociales" /></Link>
                    <Link to="https://www.instagram.com/"><img src={insta} alt="" className="sociales" /></Link>
                    <Link to="https://www.youtube.com/?hl=ES"><img src={you} alt="" className="sociales" /></Link>
                    <Link to="https://twitter.com/?lang=es"><img src={twi} alt="" className="sociales" /></Link>
                    <Link to="https://uy.linkedin.com/"><img src={linkedin} alt="" className="sociales" /></Link>
                </div>
                    <hr className="hr" />
            <div className="info">
                <div> 
                    <h3>Nosotros</h3>
                    <Link to="/not found" className="link">Nuestra Empresa</Link>
                    <Link to="/not found" className="link">Trabaja con Nosotros</Link>
                    <Link to="/not found" className="link">Nuestras Tiendas</Link>
                </div>
            <div>
                <h3>Compras</h3>
                <Link to="/not found" className="link">Guía de compras</Link>
                <Link to="/not found" className="link">Preguntas Frecuentes</Link>
            </div>
            <div>
                <h3>Atención al cliente</h3>
                <Link to="/not found" className="link">Contacto</Link>
                <Link to="/not found" className="link">Rastrear mi pedido</Link>
            </div>
        </div>
        <hr className="hr" />
        <div className="tarjetas">
            <img src={visa} alt="" className="imgTar" />
            <img src={masterCard} alt="" className="imgTar" />
            <img src={lider} alt="" className="imgTar" />
            <img src={oca} alt="" className="imgTar" />
            <img src={redPagos} alt="" className="imgTar" />
            <img src={abitab} alt="" className="imgTar abi" />
            <img src={mercadoPago} alt="" className="imgTar mer" />
        </div>
        <hr className="hr" />
        <div className="extra">
            <p>Copyright 2022 CakeCloud</p>
            <p>Developed by: Yhanahi Rosenthal</p>
        </div>
        </div>
        </div>
    )
}