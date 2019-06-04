import React from 'react';
import Button from './components/button'
import InputField from './components/inputField';
import Count from './components/count';
import Form1 from './components/form1';
import Form2 from './components/form2';
import UseeffectCount from './components/countUseEffect';

function App() {
  
  return (
    <div className="App">
     <h1>React Hooks</h1>
     <Button/><br />
     <InputField/><br /><br />
     <Count/>
     <Form1/>
     <Form2/>
     <UseeffectCount/>
     
    </div>
  );
}

export default App;

//refer Button component for useState notes