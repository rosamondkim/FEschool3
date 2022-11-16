// import './App.css';

function App() {
  return (
    <Hello name="licat"/>
  );
}

function Hello(props) {
    const name = props.name;

  return(
    <div>
      <h1>안녕, {name} 1호</h1>
      <h1>안녕, {name} 2호</h1>
      <h1>안녕, {name} 3호</h1>
      <h1>안녕, {name} 4호</h1>
      <h1>안녕, {name} 5호</h1>
      <h1>안녕, {name} 6호</h1>
      <h1>안녕, {name} 7호</h1>
      <h1>안녕, {name} 8호</h1>
      <h1>안녕, {name} 9호</h1>
      <h1>안녕, {name} 10호</h1>
    </div>
  )
}

export default App;
