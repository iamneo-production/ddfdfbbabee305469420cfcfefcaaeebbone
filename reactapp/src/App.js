import './App.css';
import React,{useState} from 'react';

function App() {

  const [name,setName] = useState('');
  const[greeting,setGreeting] = useState('');

const handleChange = (e) =>{
  setName(e.target.value);
}

const handleSubmit = (e) => {
  e.preventDefault();
  setGreeting(`Hello,${name}`);
}
  return (
    <div className="App">
      <div className="contents">
        <h3>Hey!!! Greeting</h3>
        <form onSubmit={handleSubmit} data-testid="form">
          <label data-testid="label">Enter name :</label>
          <input type="text" value={name} onChange={handleChange}/>
          <button type="submit" data-testid="buttonElement">Say Hello</button>
          </form>
          {greeting && <h2>{greeting}</h2>}
    </div>
    </div>
  );
}

export default App;