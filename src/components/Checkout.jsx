import { useState } from "react";

export default function Checkout(){
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')

    function handleClick(){
        console.log('orden de compra de: ' + name + ' -Email: ' + email + ' -Cel: ' + phone + ' -Producto: Muffin ' + ' -Precio: $973.5 ' )
    }

    return(
        <div>
            <br /><br /><br /><br /><br /><br />
            <h1>Complete para terminar la compra</h1>
            <input onChange={(e) => setName(e.target.value)} placeholder="Ingrese su nombre" ></input>
            <input onChange={(e) => setEmail(e.target.value)} placeholder="Ingrese su Email" ></input>
            <input onChange={(e) => setPhone(e.target.value)} placeholder="Ingrese su celular" ></input>
            <button onClick={handleClick}>Finalizar Compra</button>
        </div>
    )
}