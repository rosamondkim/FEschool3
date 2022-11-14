import React, { useState } from 'react';

function Resume(props) {
  const [like, setLike] = useState(0);
  const [message, setMessage] = useState('hello');
  // const [a, b] = useState(0);
  // const 내맘대로 = useState(0);
  // 내맘대로[0], 내맘대로[1];

  function handleClickLike() {
    // setLike(like + 1);
    // console.log(like);
    setLike(like + 1);
  }

  function handleMouseOver(){
    console.log('hello')
    setMessage('world')
  }

  return(
      <div>
          <button onClick={handleClickLike}>like : {like}</button>
          <button onMouseOver={handleMouseOver}>마우스 오버해보세요.</button>
          <p>{message}</p>
      </div>
  )
}

function App() {
  return (
    <div>
      <Resume />
    </div>
  );
}

export default App;