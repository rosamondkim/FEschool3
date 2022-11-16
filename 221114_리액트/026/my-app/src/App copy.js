import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  span {
    color: red;
  }
`

function Two() {
  return (
    <section>
      <h2>hello two</h2>
      <span>hello</span>
    </section>
  )
}

function One() {
  return (
    <section>
      <h2>hello one</h2>
      <span>hello</span>
    </section>
  )
}

function App() {
  return (
    <>
      <GlobalStyle/>
      <h1>hello world</h1>
      <span>hello world</span>
      <One/>
      <Two/>
    </>
  );
}

export default App;
