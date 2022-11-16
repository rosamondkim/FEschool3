function One(props){
  console.log('one시작')
  console.log(props.children[0])
  console.log('one끝')
  return (
    <div>
      {props.children}
    </div>
  )
}

function Two(props){
  console.log('Two시작')
  console.log(props)
  console.log('Two끝')
  return (
    <div>
      {props.children}
    </div>
  )
}

function Three(props){
  console.log('Three시작')
  console.log(props)
  console.log('Three끝')
  return (
    <div>
      hello
    </div>
  )
}
function Four(props){
  console.log('four시작')
  console.log(props)
  console.log('four끝')
  return (
    <div>
      hello
    </div>
  )
}

function Five(){
  return (
    <div>
      <p>hello</p>
      <Six/>
    </div>
  )
}

function Six(){
  return (
    <div>
      return <div>hello</div>
    </div>
  )
}

function App() {
  return (
    <div>
      <h1> app - h1</h1>
      <p>app - p</p>
      <One>
        <h2> app &gt; One h2</h2>
        <p>app &gt;One - p p</p>
      </One>
      <Two>
        <p>app &gt;Two - p p </p>
      </Two>
      <Three/>
      <Four></Four>
    </div>
  );
}
export default App;
