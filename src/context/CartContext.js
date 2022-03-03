import { createContext, useEffect, useState } from "react";
import Item from "../components/ItemListContainer/Item";

export const CartContext = createContext();

export const CartContextProvider = ({ children }) => {

    const [cart, setCart] = useState([]);


    const addToCart = (product, quantity) => {

        if (isInCart(product.id)) {

           addQty(product.id, quantity)
            
        } else {
            setCart(
                [...cart, {...product, quantity}]
            );         
        }

    };

    const isInCart = (id) => {
        const validation = cart.some((product) => product.id === id);
        return validation;
    }

    const addQty = (id, quantity) => {
        const copy = [...cart];
        copy.forEach((prod) => prod.id === id && (prod.quantity += quantity));

    }

    const clearProds =  () => {
        setCart([])
    }

    const removeProd = (id) => {
        const filteredProds = cart.filter((prod)=>prod.id !== id)
        setCart(filteredProds)
    }




    return(

        <CartContext.Provider value={{ cart, addToCart, clearProds }}>
            {children}
        </CartContext.Provider>

    )
}
