import { useEffect, useState } from "react";
import { getProduct } from "../asyncmock";
import { useParams } from 'react-router-dom'
import ItemDetail from "../ItemDetail/ItemDetail";


const ItemDetailContainer = () => {
    const  [product, setProduct] = useState()
    const { productId } = useParams()

    useEffect(() => {
        getProduct(productId).then(product => {
            setProduct(product)
        }).catch(err => {
            console.log(err)
        })

        return (() => {
            setProduct()
        })
    }, [productId])

    return (
        <div>
            <ItemDetail product={product}/>
        </div>
    )
}

export default ItemDetailContainer