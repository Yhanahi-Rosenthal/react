import { createContext, useState } from "react";

export const CartContext = createContext()

const {Provider} = CartContext;

const MyProvider = ({children}) =>{
    
    const [cart, setCart] = useState([])

    const isInCart = (id) =>{
        return cart.some(product => product.id === id)
    }

    const addItem = (producto, cantidad) =>{

        const newItem = {
            ...producto,
            cantidad
        }
        if(isInCart(newItem.id)){
            const findProducto = cart.find(product => product.id === newItem.id)
            const indexProducto = cart.indexOf(findProducto)
            const auxArray = [...cart]
            auxArray[indexProducto].cantidad += cantidad
            setCart(auxArray)
        }else{
            setCart([...cart, newItem])
        }
    }

    // Metodo filter - cart- se encarga en funcion del ID de retornar un nuevo array sin el producto seleccionado.
    const deleteItem = (id) =>{
        setCart(cart.filter(product => product.id !== id)) 
    }

    // Vaciar el carrito -cart- boton
    const emptyCart = () =>{
        setCart([])
    }

    // Metodo reduce - cartwidget- retorna la cantidad total de unidades que tiene nuestro state cart
    const getItemQty = () =>{
        return cart.reduce((acc, product) => acc += product.cantidad, 0)
    }

    // Metodo reduce - cart - retorna el precio total del carrito
    const getItemPrice = () =>{
        return cart.reduce((acc, product) => acc += product.cantidad * product.price, 0)
    }


    return(
        <Provider value={{cart, isInCart, addItem, deleteItem, emptyCart, getItemQty, getItemPrice}} >{children}</Provider>
    )

}

export default MyProvider;