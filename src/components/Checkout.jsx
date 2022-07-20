import { useState } from "react";
import "../css/checkOut.css";
import { useContext } from "react";
import { CartContext } from "./CartContext";
import {addDoc, collection, getFirestore} from 'firebase/firestore';

export default function Checkout(){

    const {cart, getItemPrice} = useContext(CartContext)


    const [form, setForm] = useState(true)
    const [invoice, setInvoice] = useState(false)

    const [firstName, setFirstName] = useState('')
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')

    const [idBuyer, setIdBuyer] = useState('')

    const db = getFirestore()
    const orderCollection = collection(db, 'Orders')

    function handleClick(){  
        if(firstName != '' || email != '' || phone != ''){
            setForm(false)
            setInvoice(true)
        }
        
        const order = {
            buyer: {firstName, email, phone},
            items: cart,
            total: getItemPrice()
        }
        

        addDoc(orderCollection, order).then(({ id }) => {
            setIdBuyer(id)
        })
    }

    return(
        <>
          {form &&  <div>
            <br /><br />
            <div className="contenedorcheck">
                <div className="Checkout" >
                    <h1 className="Completecompra" >Complete para terminar la compra</h1>
                    <div className="contenedorform">
                        <input onChange={(e) => setFirstName(e.target.value)} placeholder="Ingrese su nombre" className="inputCheck" required></input>
                        <input type="email" onChange={(e) => setEmail(e.target.value)} placeholder="Ingrese su Email" className="inputCheck" required></input>
                        <input type="number" onChange={(e) => setPhone(e.target.value)} placeholder="Ingrese su celular" className="inputCheck" required></input>
                        <button onClick={()=>{handleClick()}} className="FINALIZAR">Finalizar Compra</button>
                    </div>
                </div>
            </div>
            </div>}
            {invoice && <div className="contenedorcheck">
                            <div className="checkout2">
                            <div className="Checkout1">
                                <div className="datos">
                                    <h2>Resumen</h2>
                                    
                                    <hr />
                                    <h3>Tus datos:</h3>
                                    <p>Nombre: {firstName}</p>
                                    <p>Email: {email}</p>
                                    <p>Celular: {phone}</p>
                                    <hr />
                                    <h3>Tu compra</h3>
                                </div>
                                <div className="datoscart">
                                
                                    {cart.map((item) => {
                                        return  <div className="cart-content">
                                                    <div className="card-carrito">
                                                        <div>
                                                            <img src={item.img} className="img-carrito" />
                                                        </div>
                                                        <p className="name-carrito">{item.name}</p>
                                                        <p className="cart-cantidad">X{item.cantidad}</p>
                                                        <p className="price-carrito">${item.price}</p>                  
                                                    </div>
                                                </div>
                                            })}
                                            <h4 className="datos">Orden de compra: {idBuyer}</h4>
                                </div>
                                <hr />
                                <h3 className="datos">Total:${getItemPrice()}</h3>
                            </div>
                            </div>    
                        </div>}
        </>
        
    )
}