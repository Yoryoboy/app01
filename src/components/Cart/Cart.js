import React, { useContext } from "react";
import { CartContext } from "../../context/CartContext";

const Cart = () => {
    const {cart, removeProd, cartTotal} = useContext(CartContext)

    if(cart.lenght === 0) {
        return <h1>No se han agregado productos</h1>
    }



    return (
        <>

        <div>Productos en carrito:</div>
        <h1>Total: ${cartTotal()}</h1>
        <button>Finalizar compra</button>
        {cart.map((prod) => (
            <div key={prod.id} className="card m-2" style={{width: '18rem'}}>
                <img className="card-img-top" src={prod.img}/>
                <div className="card-body">
                    <h5 className="card-title">{prod.name}</h5>
                    <p className="card-text">Precio: {prod.price}</p>
                    <p className="card-text">Unidades: {prod.quantity}</p>
                    <button onClick={() => removeProd(prod.id)}>Quitar producto</button>
                 </div>
           </div>
            
        ))}
        </>
    )
}

export default Cart