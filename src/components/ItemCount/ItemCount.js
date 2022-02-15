import {useState, useEffect} from 'react'

function ItemCount ({stock, initial}) {

    const [count, setCount] = useState (0)

    useEffect(() => {
        setCount(parseInt(initial))
        return () => {
            console.log('me voy a desmontar')
            setCount(0)
        }
      }, [])
    
    console.log('voy a renderizar');

    const decrement = () => {
        if(count > 0) {
            setCount(count - 1)
        }
    }

    const increment = () => {
        setCount(count + 1)
    }

    const onAdd  = () => {

        if(count <= stock) {
            alert('productos agregados al carrito: ' + count)
            setCount(0)
        }else {
            alert ('no hay suficiente stock')
            setCount(0)
        }

    }


    return (
        <>
        <h3>Seleccione cantidad de productos para agregar</h3>
        <h3>{count}</h3>
        <button onClick={decrement}>-</button>
        <button onClick={increment}>+</button>
        <button onClick={onAdd}>Agregar al Carrito</button>
        </>
    )

}



export default ItemCount