import { useState } from 'react';

const Login = () => {
  const [id, setId] = useState("")
  const [pw, setPw] = useState("")

  const handleLoginSubmit = (e) =>{
    console.log('로그인 버튼을 클릭하셨습니다. 로그인 정보가 들어왔습니다.')
    e.preventDefault()
    console.log('막혔다!')
    alert(`id : ${id} pw : ${pw}`)
  }

  const handleIdInput = (e) => {
    console.log('아이디가 수정되었습니다.')
    // 실시간으로 정규표현식을 사용해서 이상한 문자열이 포함되진 않았는지
    // console.log(e)
    // console.log(e.target)
    // console.log(e.target.value)
    setId(e.target.value)
  }

  const handlePwInput = (e) => {
    console.log('패스워드가 수정되었습니다.')
    setPw(e.target.value)
  }

  return (
    <form action="" onSubmit={handleLoginSubmit}>
      <label>
        아이디 :
        <input type="text" onChange={handleIdInput}/>
      </label>
      <label>
        패스워드 :
        <input type="password" onChange={handlePwInput}/>
      </label>
      <button type="submit">로그인</button>
    </form>
  )
}

function App() {
  return (
    <div>
      <Login/>
    </div>
  );
}

export default App;