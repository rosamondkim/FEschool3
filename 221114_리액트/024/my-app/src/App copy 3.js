import { useState } from 'react';

function Resume({ name, hobby, intro }) {
    const [like, setLike] = useState(0); //초기값 0
    // 369 짝
  let clap = '';
    for (let i of String(like)){
      if(i === '3'){
        clap = "👏🏻"
      } else if (i ==='6'){
        clap = "👏🏻"
      } else if (i ==='9'){
        clap = "👏🏻"
      }
    }

 // '123123'.match(/[369]/g)
  // ['3', '3']
  // let heart = String(like).match(/[369]/g)? '짝👏' : '';

  // 123123'.split("").filter(v => v === '3' || v === '6' || v === '9')
  // ['3', '3']
  // let heart = String(like).split("").filter(v => v === '3' || v === '6' || v === '9').length? '짝👏' : '';
    
    function handleClickLike() {
        //handle을 붙여주는게 예의
        setLike(like + 1);
        console.log(like);
    }

    function handleMouseOver(){
      console.log("hello");
    }

    return (
        <section>
            <h2>{name}</h2>
            <p>{hobby}</p>
            <p>{intro}</p>
            {/* 변수가 변경이 된다고 해도 렌더링이 진행되지 않아서 버튼은 '♡ 0'으로 뜬다. */}
            <button onClick={handleClickLike}>like : {like}</button>
            <span>{clap ? clap : ''}</span>
        </section>
    );
}

function App() {
    return (
        <main>
            <Resume name="민승" hobby="코딩" intro="안녕하세요. 이거슨 369 놀이입니당" />
        </main>
    );
}

export default App;
 