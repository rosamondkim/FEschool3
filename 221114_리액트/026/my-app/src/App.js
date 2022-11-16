// module.css를 사용하면 class명에 고유값을 추가해주어서 겹치지 않도록 합니다.

import React from "react";
import './app.css'
import Test from "./Components/Test"

function App(){
    return (
        <>
            <h1>hello world</h1>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Natus, nemo!</p>
            <Test/>
            <Test/>
        </>
    )
}

export default App;