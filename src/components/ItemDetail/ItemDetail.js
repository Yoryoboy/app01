import React, { useState, useContext } from "react"
import { Link } from "react-router-dom";
import ItemCount from "../ItemCount/ItemCount"
import { CartContext } from "../../context/CartContext";


const ItemDetail = ({ product }) => {

    const [qty, setQty] = useState(0);
    const {addToCart} = useContext(CartContext);

    const onAdd = (quantity) => {
        setQty(quantity);
        addToCart(product, quantity);
    }

 


    return (
        <div className="card m-2" style={{width: '18rem'}}>
             <img className="card-img-top" src={product?.img}/>
             <div className="card-body">
                 <h5 className="card-title">{product?.name}</h5>
                 <p className="card-text">Categoria: {product?.category}</p>
                 <p className="card-text">Descripcion: {product?.description}</p>
                 <p className="card-text">Precio: {product?.price}</p>
                 <footer className='ItemFooter'>
                     {qty === 0 ? (
                         <ItemCount onAdd={onAdd} />
                     ) : (
                         <>
                         <Link to="/cart">
                             Ir al carrito
                         </Link>
                         </>
                     )}
            </footer>
             </div>
        </div>
    )
}

export default ItemDetail