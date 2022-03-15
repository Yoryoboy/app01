import { useEffect, useState } from "react";
import { useParams } from 'react-router-dom'
import ItemDetail from "../ItemDetail/ItemDetail";
import { getDoc, doc } from "firebase/firestore";
import { firestoreDb } from "../../services/firebase/firebase";

const ItemDetailContainer = () => {
    const  [product, setProduct] = useState()
    const { productId } = useParams()

    useEffect(() => {

        const docRef = doc(firestoreDb, 'products', productId)

        getDoc(docRef).then(response => {
            const product = {id: response.id, ...response.data()}
            setProduct(product)
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