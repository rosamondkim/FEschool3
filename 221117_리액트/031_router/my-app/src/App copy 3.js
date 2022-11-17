import { BrowserRouter, Routes, Route, Link, useLocation, Outlet, useParams } from "react-router-dom";
// 최종 목표
// https://www.studyin.co.kr/
// https://www.studyin.co.kr/login
// https://www.studyin.co.kr/study/6
// https://www.studyin.co.kr/study/6/chat
// https://www.studyin.co.kr/study/6/memo
// https://www.studyin.co.kr/notice
// https://www.studyin.co.kr/notice/recruit
// https://www.studyin.co.kr/notice/business

// step 1
// https://www.studyin.co.kr/
// https://www.studyin.co.kr/login
// https://www.studyin.co.kr/study
// https://www.studyin.co.kr/notice

// step 2
// https://www.studyin.co.kr/study/6 를 들어갔을 때에
{/* <p>6번 게시물에 오신것을 환영합니다. 여기서 fetch를 통해 백엔드로부터 6번 게시물을 요청하셔야 합니다.</p> */}

// 방법 1 
// function Test (){
//   const location = useLocation()
//   const {test} = useParams()
//   console.log(location)
//   console.log(test)
//   return hello
// }

function Index(){
  return <div>index</div>
}
function Login(){
  return <div>login</div>
}
function Study(){
  return <div>study</div>
}
function StudyDetail(){
  // console.log(props)
  // props 찍으면 아무것도 안들어옴. 이전 버전에서는 props로 처리했음
  const location = useLocation()
  // const params = useParams() => 이렇겍 받아도 된다
  const {num} = useParams()
  console.log(location) //객체 구조분해할당을 통해서 넘ㄱㅅ으니까
  console.log(num) // num값 

  // 예를 들어 fetch('www.test.abc/${num}) 이런식으로 데이터 가지고 와서 아래에다가 데이터를 뿌려주면 blog 형식이 완성되는것입니다.
  return <div>
    <p>{num}번 게시물에 오신것을 환영합니다. 여기서 fetch를 통해 백엔드로부터 {num}번 게시물을 요청하셔야 합니다.</p>
  </div>
}
function Notice(){
  return <div>notice</div>
} 

function Chat(){
  const location = useLocation()
  const params = useParams()
  console.log(location)
  console.log(params)
  // 호준님이 자주 하는 방식, location을 split 해서 쓴다고 하심
  const 채팅방번호 = location.pathname.split('/')[2]
  return <p>{채팅방번호}번 게시물에 오신것을 환영. 여기는 채팅방</p>
}

function Memo(){
  // 깔끔한 방식
  const location = useLocation()
  const {num} = useParams()
  console.log(location)
  return <p>{num}번 게시물 메뮤</p>
}

function App() {
  return (
    <BrowserRouter>
      <Route>
        <Route path="/" element={<Index />}/>
        <Route path="/login" element={<Login />}/>
        <Route path="/study" element={<Study />}/>
        <Route path="/study/:num" element={<StudyDetail />}/>
        <Route path="/study/:num/memo" element={<Memo />}/> 
        <Route path="/notice/:num/*" element={<Outlet />}/>
          <Route path="/study/:num/chat" element={<Chat />}/>
          <Route path="/study/:num/memo" element={<Memo />}/> 
        </Route>
        <Route path="/notice" element = {<Notice/>}/>
    </BrowserRouter>
  );
}


export default App;