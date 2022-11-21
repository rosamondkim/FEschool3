import React ,{useRef, useState} from 'react'

export default function App() {
  const inputName = useRef(null)
  const inputId = useRef(null)
  const [userInfo,setUserInfo] = useState([]) //빈 어레이로 초기화

  const [name,setName] = useState('')
  const [id,setId] = useState('')

  function handleInputName(){}
  function handleInputId(){}
  function handleSubmit(){}
  function getNum(){}

  return (
    <>
    <form>
    <input type="text" 
    placeholder='이름입력하세요'
    onChange={handleInputName}
    ref={inputName}
    />
    <input type="text" 
    placeholder='이름입력하세요'
    onChange={handleInputId}
    ref={inputId}
    />
    <button type='submit' onClick={handleSubmit}>버튼</button>
    </form> 
    <ul>
      {
          // userInfo 어레이니까 이거 순회를 돌면서 ...
          userInfo.map((value,index)=> (
              // 중괄호 있으면 구문이 들어가고 없으면 바로 리턴되는것 들어가야함
            <li key={index}>
              <h3>이름: {value.name}</h3>
              <strong>아이디값 : {value.id}</strong>
            </li>
          )
          )
      }
    </ul>
    <span>{getNum(userInfo)}</span>
    </>
  )
}

// 여기서 부하가 걸리는데 저장할 필요가 있는?없는? 작업은? => getNum
