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

function Home(){
  return <div>home</div>
}
function Cart(){
  return <div>cart</div>
}
function ProductDetail(){
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
function Question(){
  return <div>Question</div>
} 

function Coupon(){
  const location = useLocation()
  const params = useParams()
  console.log(location)
  console.log(params)
  // 호준님이 자주 하는 방식, location을 split 해서 쓴다고 하심
  const 채팅방번호 = location.pathname.split('/')[2]
  return <p>{채팅방번호}번 게시물에 오신것을 환영. 여기는 쿠폰</p>
}

function Notice(){
  // 깔끔한 방식
  const location = useLocation()
  const {num} = useParams()
  console.log(location)
  return <p>{num}번 게시물 Notice</p>
}

function App() {
  return (
<BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/products/:id" element={<ProductDetail />}/>
        <Route path="/cart" element={<Cart />}/>
        <Route path="/users/*" element={<Outlet />}>
          <Route path="coupon" element={<Coupon />}/>
          <Route path="question" element={<Question />}/>
          <Route path="notice" element={<Notice />}/>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}


export default App;