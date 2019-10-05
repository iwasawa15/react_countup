import React, { useState, Fragment } from 'react';
import logo from './logo.svg';
import './App.css';
import Layout from './layout'

interface Props {
  default: number,
}

const App: React.FC<Props> = (props) => {
  const [counter, countUp] = useState(props.default);
  
  return (
    <div className="App">
      <Layout>
        <Fragment>
          <p>
            count: {counter}
          </p>
          <button onClick={() => countUp(counter + 1)}>push</button>
        </Fragment>
      </Layout>
    </div>
  );
}

export default App;
