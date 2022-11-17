import { useState, useEffect } from 'react'

function Counter (){
  const [one, setOne] = useState(0)
  const [two, setTwo] = useState(0)
  const [three, setThree] = useState(0)
  
  const handleCountUp = (e) => {
    setOne(one + 1)
  }

  useEffect(()=>{
    if (one % 2) {
      alert('홀수입니다.')
    } else {
      alert('짝수입니다.')
    }
  }, [one, two])
  
  return (
    <>
      <div>{one}</div>
      <button onClick={handleCountUp}>Up!</button>
      <div>{two}</div>
      <button onClick={handleCountUp}>Up!</button>
      <div>{three}</div>
      <button onClick={handleCountUp}>Up!</button>
    </>
  )
}

function App() {
  return (
    <div>
      <Counter/>
    </div>
  );
}

export default App;

