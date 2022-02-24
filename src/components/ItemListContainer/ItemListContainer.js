import { useEffect, useState } from "react"
import ItemCount from "../ItemCount/ItemCount"
import { getProducts } from "../asyncmock"
import ItemList from "./ItemList"
import { useParams } from "react-router-dom"


const ItemListContainer = () => {
    const [products, setProducts] = useState([])
    const { categoryId } = useParams()


    useEffect(() => {

        getProducts(categoryId).then(products => {
            setProducts(products)
        }).catch(err => {
            console.log(err)
        })

        return (() => {
        setProducts()
        })

    }, [categoryId])

    const handleOnAdd = (quantity) => {
        console.log(`Se agregaron ${quantity} productos`)
    }

    console.log(products)

    return (
        <div className="ItemListContainer">
            <ItemList products={products} />
            {/* <ItemCount stock={10} initial={2} onAdd={handleOnAdd}/> */}
        </div>
    )
}

export default ItemListContainer
