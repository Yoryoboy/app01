

const ItemDetail = ({ product }) => {
    return (
        <div className="card m-2" style={{width: '18rem'}}>
             <img className="card-img-top" src={product?.img}/>
             <div className="card-body">
                 <h5 className="card-title">{product?.name}</h5>
                 <p className="card-text">Categoria: {product?.category}</p>
                 <p className="card-text">Descripcion: {product?.description}</p>
                 <p className="card-text">Precio: {product?.price}</p>
                 <a href="#" className="btn btn-primary">Ver</a>
             </div>
        </div>
    )
}

export default ItemDetail