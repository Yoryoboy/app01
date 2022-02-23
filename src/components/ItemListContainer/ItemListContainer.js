import { useEffect, useState } from "react"
import ItemCount from "../ItemCount/ItemCount"
import { getProducts } from "../asyncmock"
import ItemList from "./ItemList"


const ItemListContainer = ({ routing }) => {
    const [products, setProducts] = useState([])

    useEffect(() => {

        getProducts().then(products => {
            setProducts(products)
        }).catch(err => {
            console.log(err)
        })

        return (() => {
        setProducts()
        })

    }, [])

    const handleOnAdd = (quantity) => {
        console.log(`Se agregaron ${quantity} productos`)
    }

    console.log(products)

    return (
        <div className="ItemListContainer">
            <ItemList products={products} routing={routing} />
            {/* <ItemCount stock={10} initial={2} onAdd={handleOnAdd}/> */}
        </div>
    )
}

export default ItemListContainer
