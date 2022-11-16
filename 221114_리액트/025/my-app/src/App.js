import { useState } from 'react'


// user.login ? <Notice> : <Login>
// true && <h1>hello world</h1> -> h1 출력
// false && <h1>hello world</h1> -> false 출력
// true || <h1>hello world</h1> -> true 출력
// false || <h1>hello world</h1> -> h1 출력

// // 예시
// newMail.length > 0 && <h1>읽지 않은 메일이 있습니다.</h1> -> h1 출력

function Contents({listName}){
  if (listName === 'about') {
    return (
      <div>about Lorem ipsum dolor sit amet, consectetur adipisicing elit. Placeat voluptatem sint magnam quam quo quis sed aliquam natus odio dolor voluptatibus quaerat cupiditate eos architecto ipsam provident repellat, nam doloremque?</div>
    )
  } else if (listName === 'product') {
    return (
      <div>prodcut Lorem ipsum dolor sit amet, consectetur adipisicing elit. Placeat voluptatem sint magnam quam quo quis sed aliquam natus odio dolor voluptatibus quaerat cupiditate eos architecto ipsam provident repellat, nam doloremque?</div>
    )
  } else if (listName === 'cart') {
    return (
      <div>cart Lorem ipsum dolor sit amet, consectetur adipisicing elit. Placeat voluptatem sint magnam quam quo quis sed aliquam natus odio dolor voluptatibus quaerat cupiditate eos architecto ipsam provident repellat, nam doloremque?</div>
    )
  } else if (listName === 'contact') {
    return (
      <div>contact Lorem ipsum dolor sit amet, consectetur adipisicing elit. Placeat voluptatem sint magnam quam quo quis sed aliquam natus odio dolor voluptatibus quaerat cupiditate eos architecto ipsam provident repellat, nam doloremque?</div>
    )
  }
  return (
    <div>404 페이지를 찾을 수 없습니다.</div>
  )
}

function Navbar(){
  const [listName, setListName] = useState('about')
  const handleChangeId = (e) => {
    setListName(e.target.id)
  }
  return (
    <>
      <nav>
        <ul>
          <li 
            id = "about" 
            style = {listName === 'about'? 
              {color:"red"} : {color:"black"}}
            onClick={handleChangeId}
          >
            About
          </li>
          <li 
            id="product"
            style = {listName === 'product'? 
              {color:"red"} : {color:"black"}}
            onClick={handleChangeId}
          >
              Product
          </li>
          <li 
            id="cart" 
            style = {listName === 'cart'? 
              {color:"red"} : {color:"black"}}
            onClick={handleChangeId}
          >
              Cart
          </li>
          <li 
            id="contact" 
            style = {listName === 'contact'? 
              {color:"red"} : {color:"black"}}
            onClick={handleChangeId}
          >
              Contact
          </li>
        </ul>
      </nav>
      <Contents listName={listName}/>
    </>
  )
}
export default function App() {
  return (
    <div>
      <Navbar></Navbar>
    </div>
  )
}
