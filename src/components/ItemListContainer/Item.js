import { Link } from 'react-router-dom'

const Item = ({product}) =>{
    return(
        <div className="Item card m-2" style={{width: '18rem'}}>
             <img className="card-img-top" src={product.img}/>
             <div className="card-body">
                 <h5 className="card-title">{product.name}</h5>
                 <p className="card-text">{product.description}</p>
                 <button className='Option'><Link to={`/detail/${product.id}`}>Ver detalle</Link></button>
                 

             </div>
        </div>
    )

}

export default Item