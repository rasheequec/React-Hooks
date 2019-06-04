import React, {useState} from 'react'

function InputField(){
    
const [textfield, setTextfield] = useState(false)

function clickHandle(){
    setTextfield(!textfield)
}

return(
    <div>
    <button onClick={clickHandle}>Click here to open a text field</button><br /><br />
    {textfield ? <input type="text"/> : ''}
    </div>
    
)
}

export default InputField