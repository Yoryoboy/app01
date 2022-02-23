import Item from "./Item"

const ItemList = ({ products, routing }) =>{
    return(
        <div>
                        {products.map(product => 
                             <Item product={product} key={product.id} routing={routing} />
                        )}

        </div>

    )
}

export default ItemList