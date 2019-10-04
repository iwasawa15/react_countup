import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

interface Props {
  default: number,
}

const App: React.FC<Props> = (props) => {
  const [counter, countUp] = useState(props.default);
  
  return (
    <div className="App">
      <header className="App-header">
        <p>
          count: {counter}
        </p>
        <button onClick={() => countUp(counter + 1)}>push</button>
      </header>
    </div>
  );
}

export default App;
