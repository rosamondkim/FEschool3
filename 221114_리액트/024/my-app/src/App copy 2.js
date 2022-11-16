import React, { useState } from 'react';
// useState 사용해주려면 위 줄 써야함

function Resume(props) {
  const [like, setLike] = useState(0); //초기값 0
  let heart = like % 2 === 1 ? '❤️' : '' 

  //짝👏
  function handleClickLike() {
       // 통상적으로 handle을 붙여준다고 함
      // setLike(like + 1)
      // console.log(like);
    setLike(like + 1);
  }

  return(
      <div>
          <button onClick={handleClickLike}>like : {like}</button>
          <span>{heart ? heart : ''}</span>
      </div>
  )
}
// 중괄호 안에는 if,for 등 조건문,반복문은 못쓴다. 삼항연산자,map 써라!
function App() {
  return (
    <div>
      <Resume />
    </div>
  );
}

export default App;