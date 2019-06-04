import React, {useState} from 'react'

function Button(){

  console.log(useState('value')) 
  // returns an array with two values- [value, function()]
  //value - current value of the state
  //function() - function to update value of state

  const [activated, setActivated] = useState(false) //ES6 array destructuring
  
  const buttonText = activated ? 'Active button' : 'Inactive button'

  function clickHandle() {
      setActivated(!activated)
  }

  return (
      <button onClick={clickHandle}>
      {buttonText}
      </button>
  )
}

export default Button
