import { useState } from 'react';
// import './App.css';
 
export const Input=() =>{
  const [email, setEmail] = useState('');
  return (
    <div className="App">
      <h1>Input Box</h1>
 
      <small><a href="https://www.cluemediator.com/" target="_blank" title="Clue Mediator" data-testid="powered-by" rel="noopener noreferrer">Input</a></small>
 
      <input
        type="text"
        placeholder="Enter email"
        data-testid="text-input"
        value={email}
        onChange={e => setEmail(e.target.value)}
      />
 
      {email && !(/\S+@\S+\.\S+/).test(email) && <span className="error" data-testid="error-msg">Please enter a valid email.</span>}
    </div>
  );
}

