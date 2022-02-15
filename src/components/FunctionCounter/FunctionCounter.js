import {useState, useEffect} from 'react'

const FunctionCounter = (props) => {

    const [count, setCount] = useState (0)

    useEffect(() => {
        console.log('componente se monto')
        setCount(count + 1)
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

    return (
        <>
        <h3>Function Counter</h3>
        <h3>{count}</h3>
        <button onClick={decrement}>-</button>
        <button onClick={increment}>+</button>
        </>
    )

}

export default FunctionCounter