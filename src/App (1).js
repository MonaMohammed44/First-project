import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import Form from './components/Form/Form'; // Correct if `Form.jsx` is in the specified path



function App() {
  let [state , setState]=useState(0);
  return (
    <div className="App">
      <h1>{state}</h1>
      <button onClick={()=>{setState(state++)}}>+</button>
      <Form/>
     </div>
    );
}

export default App;
