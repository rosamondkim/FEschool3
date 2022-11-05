import ColaGenerator from "./components/colaGenerator.js";
import Vendingmachine from "./components/vendingmachine.js";
// 저기서 export 해준걸 여기서 import 해와서 써줄 수 있음

const colaGenerator = new ColaGenerator();
const vendingmachine = new Vendingmachine();
// 여기서 만든 클래스를 인스턴스화 할 수 있따.


// (async() => {
//     // await 프로미스 객체 반환 될때까지 기다림
//     await colaGenerator.setup();
//     // 이렇게 쓰면 탑레벨에서 작동하지 않눈다,, 어싱크가 이 코드상에 없어서
//     // 그래서 억지로 async 만들어주고 즉시실행함수로?? 
//     vendingmachine.setup();
// })();
// 이거 근데 왜 안해줌?

await colaGenerator.setup();
vendingmachine.setup();

// index에서는 안붙어도 된다? => 알아보자
//어웨이트 사용하려면 셋업이라는 메서드 자체가 어싱크여야한다.
