import React, {useState} from 'react'

function Form1(){

const [state, setState] = useState({
    name: '',
    country: ''
})

const nameHandle = e => {
  setState({
      ...state, name: e.target.value
  })
}
const countryHandle = e => {
  setState({
      ...state, country: e.target.value
  })
}

return(
    <div>
        <input type="text" onChange={nameHandle} placeholder="name"/><br/>
        <input type="text" onChange={countryHandle} placeholder="country"/>
         <h3>{`name ${state.name} country ${state.country}`}</h3>
    </div>
)
}
export default Form1