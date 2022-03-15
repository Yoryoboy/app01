import { useEffect, useState } from "react"
import ItemCount from "../ItemCount/ItemCount"
import ItemList from "./ItemList"
import { useParams } from "react-router-dom"
import { getDocs, collection, QuerySnapshot, query, where } from "firebase/firestore"
import { firestoreDb } from "../../services/firebase/firebase"

const ItemListContainer = () => {
    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(true)
    const { categoryId } = useParams()
     
    useEffect(() => {
        setLoading(true)

        const collectionRef = categoryId ?
        query(collection(firestoreDb, 'products'), where ('category', '==', categoryId)) :
        collection(firestoreDb, 'products')

        getDocs(collectionRef).then(QuerySnapshot => {
            const products = QuerySnapshot.docs.map(doc => {
                return {id: doc.id, ...doc.data() }
            })

            setProducts(products)
        }).finally(() => {
            setLoading(false)
        })



        return (() => {
            setProducts()
        })          
    }, [categoryId])
    
    return (
        <div className="ItemListContainer">
            {
                loading ? 
                    <h1></h1> :  
                products.length ? 
                    <ItemList products={products}/> : 
                    <h1>No se encontraron productos!</h1>
            }
        </div>
    )    
 
}

export default ItemListContainer
