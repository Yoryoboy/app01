import { useEffect, useState } from "react"
import ItemCount from "../ItemCount/ItemCount"
import { getProducts } from "../asyncmock"
import ItemList from "./ItemList"


const ItemListContainer = ({greeting = 'Hello'}) => {
    const [products, setProducts] = useState([])

    useEffect(() => {

        getProducts().then(products => {
            console.log(products)
            setProducts(products)
        })

    }, [])

    const handleOnAdd = (quantity) => {
        console.log(`Se agregaron ${quantity} productos`)
    }

    console.log(products)

    return (
        <div className="ItemListContainer">
            <h1>{greeting}</h1>
            <ItemList products={products} />
            {/* <ItemCount stock={10} initial={2} onAdd={handleOnAdd}/> */}
        </div>
    )
}

export default ItemListContainer
