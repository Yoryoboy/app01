import { Link } from "react-router-dom"
import { useContext } from 'react'
import { CartContext } from "../../../context/CartContext"


const CartWidget = () => {

    const {totalQty} = useContext(CartContext)

    return (
        <Link to={'/cart'}>
            <img src="./cart.PNG"></img>
            {totalQty()}
        </Link>
    )
  }

  export default CartWidget