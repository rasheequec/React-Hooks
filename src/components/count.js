import React, {useState} from 'react'

function Count(){
    
    const [count, setCount] = useState(0)

    const addHandle = () => {
        setCount(count+1)
    }
    const substractHandle = () => {
        setCount(count-1)
    }
    const resetHandle = () => {
        setCount(0)
    }

    return(
        <div>
            <h4>{count}</h4>
            <button onClick={addHandle}>Increase count</button>
            <button onClick={substractHandle}>Decrease count</button>
            <button onClick={resetHandle}>Reset count</button>
        </div>
    )
}

export default Count