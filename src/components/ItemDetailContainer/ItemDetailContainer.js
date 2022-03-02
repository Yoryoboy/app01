import { useEffect, useState } from "react";
import { getProduct } from "../asyncmock";
import { useParams } from 'react-router-dom'
import ItemDetail from "../ItemDetail/ItemDetail";


const ItemDetailContainer = () => {
    const  [product, setProduct] = useState()
    const { productId } = useParams()

    useEffect(() => {
        getProduct(productId).then(item => {
            setProduct(item)
        }).catch(err => {
            console.log(err)
        })

        return (() => {
            setProduct()
        })
    }, [productId])

    return (
        <div className="ItemDetailContainer">
            <ItemDetail product={product}/>
        </div>
    )
}

export default ItemDetailContainer