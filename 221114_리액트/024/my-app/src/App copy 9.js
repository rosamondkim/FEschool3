function App() {
  return (
    <Hello name="licat"/>
  );
}

function Hello(props) {
    const name = props.name;
  const num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
  
  const numComponentsArray = num.map(v => <p key={v.toString()}>안녕,{name} {v}호</p>)

  // key를 인덱스로 잡는 것은 권장하지 않습니다.
  // const numComponentsArray = num.map((v, i) => <p key={i}>안녕,{name} {v}호</p>)

  console.log(numComponentsArray)

  return(
    <div>
      {/* 콤마를 없애고 요소를 밖으로 꺼내줍니다. 이것을 리스트로 렌더링 한다고 얘기합니다. */}
      {/* {['hello', 'world', 3, 4, 5]} */}

      {numComponentsArray}
      {/* 드물지만 이런경우가 생길 수 있으므로 권장하지 않는다는 얘기입니다. */}
      {/* {numComponentsArray.concat(numComponentsArray)} */}

      {/* <h1>안녕, {name} 1호</h1>
      <h1>안녕, {name} 2호</h1>
      <h1>안녕, {name} 3호</h1>
      <h1>안녕, {name} 4호</h1>
      <h1>안녕, {name} 5호</h1>
      <h1>안녕, {name} 6호</h1>
      <h1>안녕, {name} 7호</h1>
      <h1>안녕, {name} 8호</h1>
      <h1>안녕, {name} 9호</h1>
      <h1>안녕, {name} 10호</h1> */}
    </div>
  )
}

export default App;