import React, { useState } from 'react';
import './App.css';

function App() {
  const [name, setName] = useState('');
  const [greeting, setGreeting] = useState('');

  const handleChange = (event) => {
    setName(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setGreeting(`Hello, ${name}!`);
  };

  return (
    <div className="App">
      <h2>Hey!!! Greeting</h2>
      <form onSubmit={handleSubmit} data-testid="form">
        <label data-testid="label">Enter your name: </label>
        <input
          type="text"
          value={name}
          onChange={handleChange}
        />
        <button type="submit" data-testid="buttonElement">Say Hello</button>
      </form>
      {greeting && <h2>{greeting}</h2>}
    </div>
  );
}

export default App;
