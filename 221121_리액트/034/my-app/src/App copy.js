import {useState, useMemo} from 'react'
// useMemo 추가

function 부하(){
  let s = 0
  for (let i = 0; i < 1000000000; i++) {
    s += i
  }
  return s
}

function App() {
  const [count,setCount] = useState(0)
  const result = useMemo(()=>{
    return 부하()
  },[])
  // 위 두줄 바뀜
  const handleCountUp = (e) => {
    setCount(count+1)
    console.log(count)
  }

  return (
    <div>
      <h1>계산결과 : {result} </h1>
      <div>{count}</div>
      <button onClick={handleCountUp}>Up!</button>
    </div>
  );
}
export default App;

// 이 경우 부하가 다시 렌더링된다.
// 부하가 너무 커서 숫자가 늦게 올라감
