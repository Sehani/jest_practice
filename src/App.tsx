import "./App.css";
import React, { useState } from 'react';


function App() {
  const [ buttonColor, setButtonColor ] = useState('red');
  const newButtonColor = buttonColor === 'red' ? 'blue' : 'red' ;
  const [disabled,setdisabled] = useState(false);
  return (
    <div>
      <button 
      style={{ backgroundColor: buttonColor}}
      onClick={() => setButtonColor(newButtonColor)}
      disabled={disabled}
      >
         Change to {newButtonColor} 
      </button>
      <input 
      type="checkbox"
      id="enable-button-checkbox"
      defaultChecked={disabled}
      onChange={(e) => setdisabled(e.target.checked)}
    />
    </div>
  );
}

export default App;
