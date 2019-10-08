import React, { FC } from 'react';

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

export default Home;