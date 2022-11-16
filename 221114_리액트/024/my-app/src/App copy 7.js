// React의 이벤트는 카멜케이스 사용한다
// JSX 사용하여 함수로 이벤트 핸들러를 전달합니다
// DOM 문자열로 이벤트 전달합니다. 

// # 2. 리액트에서 지원하는 이벤트 종류

// - `onClick`
// - `onChange`
// - `onInput`
// - `onFocus`
// - `onMouse`
// - `onLeave`

function App() {
  const handleOnMouseEnter = () => {
    console.log("안녕하세요!");
  };

  const handleOnMouseLeave = () => {
    console.log("안녕히가세요!");
  };

  return (
    <div>
      <p 
        onMouseEnter={handleOnMouseEnter} 
        onMouseLeave={handleOnMouseLeave}
      >
        여기에 마우스를 올려보세요!
      </p>
    </div>
  );
}

export default App;