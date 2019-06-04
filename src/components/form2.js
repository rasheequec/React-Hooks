import React, {useState} from 'react'

function Form2(){

const [name, setName] = useState('')
const [country, setCountry] = useState('')

const nameHandle = e => { setName(e.target.value) }
const countryHandle = e => { setCountry(e.target.value) }

return(
    <div>
        <input type="text" onChange={nameHandle} value={name} placeholder="name"/><br/>
        <input type="text" onChange={countryHandle} value={country} placeholder="country"/>
         <h3>{`name ${name} country ${country}`}</h3>
    </div>
)
}
export default Form2