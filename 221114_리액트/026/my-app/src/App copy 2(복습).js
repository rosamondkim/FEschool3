import App from "../../../025/my-app/src/App"

//컴포넌트 데이터 만들기

// step 1
// const arr =[10,20,30,40,50]
// function App(){
//   return(
//     <div>
//       {/* {arr.map(v => <p>{v}</p>)} */}
//       {arr.map(v => <p key="{v.toString()}">{v}</p>)}
//     </div>
//   );
// }
// 키가 없다는 에러남 . 그래서 key값 주기 숫자도 key값으로 가능함 v.toString()


// step 2 조건부렌더링

// const value =1 
// function App(){
//   if(value === 1){
//     return <h1>hello 1</h1>
//   } else if (value ===2){
//     return <h1>hello 2</h1>
//   } else if (value ===3){
//     return <h1> hello 3</h1>
//   }
// }

// npm install styled-components
// npm i styled-reset
// import styled from "styled-components";

// const DivBlue = styled.div`
//   color: blue;
// `;

// const DivRed = styled.div`
//   color: red;
// `;

// function App(){
//   return (
//     <>
//       <DivBlue>hello</DivBlue>
//       <DivRed>hello</DivRed>
//     </>
//   )
// }

export default App;