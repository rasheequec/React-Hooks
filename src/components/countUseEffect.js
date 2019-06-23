import React, {useState, useEffect} from 'react'

function UseeffectCount(){
    
    const [count, setCount] = useState(0)

    const addHandle = () => {
        setCount(count+1)
    }
    const substractHandle = () => {
        setCount(count-1)
    }

    useEffect(()=>{
        //componentDidMount
        console.log(`Im inside the use Effect function, The count value is ${count}`)
        //componentDidUpdate
        return () =>{
        console.log(`Iam removing anything that was set up above : ${count}`)
        }
    })
  

    return(
        <div>
            <h4>{count}</h4>
            <button onClick={addHandle}>Increase count</button>
            <button onClick={substractHandle}>Decrease count</button>
        </div>
    )
}

export default UseeffectCount