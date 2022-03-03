import React, { useContext } from "react";
import { CartContext } from "../../context/CartContext";

const Cart = () => {
    const {cart} = useContext(CartContext)
    console.log(cart)
    return (
        <>
        {cart.map((prod) => (
            <li key={prod.id}>
                {prod.quantity}
            </li>
        ))}
        </>
    )
}

export default Cart