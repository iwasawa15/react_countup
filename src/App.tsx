import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

const App: React.FC = () => {
  const [counter, CountUp] = useState(0);
  
  return (
    <div className="App">
      <header className="App-header">
        <p>
          count: {counter}
        </p>
        <button onClick={() => CountUp(counter + 1)}>push</button>
      </header>
    </div>
  );
}

export default App;
