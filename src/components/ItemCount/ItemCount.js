import {useState} from 'react'

function ItemCount ({stock = 25, initial = 1, onAdd}) {

    const [quantity, setQuantity] = useState (initial);

    

    const increment = () => {
        if(quantity < stock) {
            setQuantity(quantity + 1)
        }
    }

    const decrement = () => {
        if(quantity > 0) {
            setQuantity(quantity - 1)
        }
    }

   
    return (
       <div align="center">
           <table>
               <tbody>
                   <tr>
                       <td align="left"><button className="option" onClick={()=> decrement()}>-</button></td>
                       <td align="center" style={{fontsize : '20px'}}>{quantity}</td>
                       <td align="right"><button className="Option" onClick={()=> increment()}>+</button></td>
                   </tr>
                   <tr>
                       <td align="center" colSpan="5"><button className="Option" onClick={()=>onAdd(quantity)}>Agregar al carro</button></td>
                   </tr>
               </tbody>
           </table>

       </div>
    )

}



export default ItemCount