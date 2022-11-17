import {useState,useEffect,} from 'react'
// hook이 굉장히 중요한 역할을 한다. use라는 ㅋ;워드 가진 애들이 중요한 역할함.ㅇ ㅣㄹ반함수가 아니게끔 하는 역할들을 함 
let test = 0;

function Counter (){
  const [count, setCount] = useState(0)
  const handleCountUp = (e) => {
    setCount(count + 1)
  }
  const handleTestCountUp = (e) => {
    test += 1
    console.log(test)
  }
// count가 변했을때 동작할 행동을 useEffect를 통해 구현함
// count 변경 됐을때 이 안에있는것이 실행되게 
  useEffect(()=>{
    if(count %2){
      alert("홀수입니다")
    } else {
      alert("짝수입니다")
    }
  },[count])
  
  return (
    <>
    <div>{count}</div>
    <button onClick={handleCountUp}>Up!</button>
    <div>{test}</div>
    <button onClick={handleTestCountUp}>Up!</button>
  </>
  )
}

function App() {
  return (
    <div className="App">
      <Counter/>
    </div>
  );
}

export default App;
