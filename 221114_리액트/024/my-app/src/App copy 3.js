import { useState } from 'react';

function Resume({ name, hobby, intro }) {
    const [like, setLike] = useState(0); //μ΄κΈ°κ° 0
    // 369 μ§
  let clap = '';
    for (let i of String(like)){
      if(i === '3'){
        clap = "ππ»"
      } else if (i ==='6'){
        clap = "ππ»"
      } else if (i ==='9'){
        clap = "ππ»"
      }
    }

 // '123123'.match(/[369]/g)
  // ['3', '3']
  // let heart = String(like).match(/[369]/g)? 'μ§π' : '';

  // 123123'.split("").filter(v => v === '3' || v === '6' || v === '9')
  // ['3', '3']
  // let heart = String(like).split("").filter(v => v === '3' || v === '6' || v === '9').length? 'μ§π' : '';
    
    function handleClickLike() {
        //handleμ λΆμ¬μ£Όλκ² μμ
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
            {/* λ³μκ° λ³κ²½μ΄ λλ€κ³  ν΄λ λ λλ§μ΄ μ§νλμ§ μμμ λ²νΌμ 'β‘ 0'μΌλ‘ λ¬λ€. */}
            <button onClick={handleClickLike}>like : {like}</button>
            <span>{clap ? clap : ''}</span>
        </section>
    );
}

function App() {
    return (
        <main>
            <Resume name="λ―ΌμΉ" hobby="μ½λ©" intro="μλνμΈμ. μ΄κ±°μ¨ 369 λμ΄μλλΉ" />
        </main>
    );
}

export default App;
 