import React, { useState, Fragment, FC, Component } from 'react';
import logo from './logo.svg';
import './App.sass';
import Layout from './layout'
import { BrowserRouter, Route, Link, RouteComponentProps, Switch } from 'react-router-dom';

interface Props {
  default: number,
}

const App: React.FC<Props> = (props) => {
  const [counter, countUp] = useState(props.default);

  function count(){
    countUp(counter + 1)
  }
  
  return (
    <div className="App">
      <Layout>
        <BrowserRouter>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/firework">Firework</Link></li>
            <li><Link to="/hungry">Hungry</Link></li>
          </ul>
          <Route exact path='/' render={props => <Home count={count} counter={counter}/>} />
          <Route exact path='/firework' component={Firework} />
          <Route exact path='/hungry' component={Hungry} />   
        </BrowserRouter>
      </Layout>
    </div>
  );
}

interface HomeProps {
  count: () => void,
  counter: number
}

const Home: FC<HomeProps> = (props) => {
  function handleClick(e: React.MouseEvent<HTMLElement>){
    props.count();
  }

  return(
    <div>
      home画面だよ
      <p>
        count: {props.counter}
      </p>
      <button onClick={handleClick}>push</button>
    </div>
  )
}

const Firework = () => (
  <div>
    はーーなーーービーーーーー
  </div>
)

const Hungry = () => (
  <div>
    お腹すいたー
  </div>
)

export default App;
