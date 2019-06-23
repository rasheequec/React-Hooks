import React, {useState, useEffect} from 'react'

function UseeffectCount(){
    
    const [count, setCount] = useState(0)

    const addHandle = () => {
        setCount(count+1)
    }
    const substractHandle = () => {
        setCount(count-1)
    }

    // useEffect(()=>{
    //     //componentDidMount
    //     console.log(`Im inside the use Effect function, The count value is ${count}`)
    //     //componentDidUpdate
    //     return () =>{
    //     console.log(`Iam removing anything that was set up above : ${count}`)
    //     }
    // })
  

    //componentdidmount and componentwillunmount same behaviour, added an empty array as second argument
    useEffect(()=>{
        //componentDidMount
        console.log(`Im inside the use Effect function, will run on only mounting. The count value is ${count}`)
        //componentDidUpdate
        return () =>{
        console.log(`Iam removing anything that was set up above and only run when unmounted : ${count}. Count value will be the initial value as it loads as componentdidmount`)
        }
    },
    []
    )


    return(
        <div>
            <h4>{count}</h4>
            <button onClick={addHandle}>Increase count</button>
            <button onClick={substractHandle}>Decrease count</button>
        </div>
    )
}

function UseeffectCount2() {

    const [visible, setVisible] = useState(false)
    return(
        <div>
            <button onClick= {()=> {setVisible(!visible)}}>Click here</button>
            {visible && <UseeffectCount/>}
        </div>
    )
}

export default UseeffectCount2