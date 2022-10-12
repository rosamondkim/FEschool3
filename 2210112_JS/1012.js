// 생성자함수


function Book(책이름,책가격,저자,출판일){
    this.책이름 = 책이름
    this.책가격 = 책가격
    this.저자 = 저자
    this.출판일 = 출판일
}

// let data = Book('css',10,'민승','22.12.30')
// console.log(data)

let data = new Book('css',10,'민승','22.12.30')
console.log(data)
let book1 = new Book('html',20,'유정','23.12.30')
console.log(data)
let book2 = new Book('js',30,'희수','24.12.30')
console.log(data)

// 콜백함수 callback function (나중에 부르는 함수)

function sum(x,y,콜백함수){
    콜백함수(x + y);
    return x + y
}
sum(10,20,console.log)

function documentWrite(s){
    document.write('콜백함수',s)
}

sum(10,20,documentWrite)

// https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/map
// 구문 : arr.map(callback(currentValue[, index[, array]])[, thisArg])

function 제곱(x){
    return x**2
    // x -> x**2 (화살표함수로 바꿔보자)
}


let arr =[10,20,30,40,50]
arr.map(제곱)

// 콜백함수. 아규먼트로 함수 전달 하는 것 

function 두배(x){
    console.log(x**2)
}

let arr2= [10,20,30,40,50]
arr2.map(x=> x**2)

//문제: 화살표 함수 사용해서 map 과 동일한 기능 하는 forEach문을 완성해주세요

let result =[]
arr2.forEach(e=>{
    result.push(e**2)
})
console.log(result)

// map
let m = new Map();
m.set('하나',1)
    .set('둘',2)
    .set('셋',3)
    .set('넷','트루')
    .set([1,2],'리얼리?')
    // 점 찍어서 연결시키는것 메서드체이닝 이라고 부름

console.log(m);
console.log(m.get('하나'));
console.log(m.get(true)); //이건 object에서 불가능함
console.log(m.get[1,2]);
/* 출력x [1,2] 식별할 수 있는게 없다. 
새로은 [1,2] 를 가리키고 있다. 두개 다 다른 객체임!
*/

// map에 값이 key값 있는지 확인하기
m.has('하나') //true
m.has('열'); //false

//map 값 제거하기
m.delete('하나');
//크기 구하기
m.size

let data2 = {'one':1 , 'two':2}
let data2= new Map([['one',1],['two',2]])
let data2 = new Map(Object.entries({'one':1,'two':2}))

//직접 순회 가능
let data = {'one':1, 'two':2}
for (const i of data) { // X 작동되지 않습니다!
    console.log(i)
}

let data = {'one':1, 'two':2}
for (const i of Object.entries(data)) {
    console.log(i) // object는 이렇게 해야 작동됨. 
}

let m = new Map();
// 그러면 map으로 해보자

m.set('하나', 1) // 메서드 체이닝
    .set('둘', 2)
    .set('셋', 3)
    .set('넷', 4)

for (const i of m) {
    console.log(i)
}

for (const [i, j] of m) {
    console.log(i, j)
}

m.keys()
m.values()
m.entries()


// map-object 형변환
let 맵= new Map(Object.entries({'one':1,'two':2}))
오브젝트 = Object.fromEntries(맵)


// set
// 집합, 합집합, 교집합, 차집합

let s = new Set('abceddddd')

console.log(s)
console.log(s.size)

// 문제
회사게시판 =['이호준', '이호준', '이호준', '김은하', '김은하', '이준근']



// 문제 1 : 몇 명이 게시판에 게시물을 썼나요?
let set = new Set(회사게시판);
set.size;
// 문제 2 : 각각 몇 개의 게시물을 작성하였나요?
for (const i of set){
    console.log(i,회사게시판.filter(e=>e === i).length)
}

// 또 다른 풀이 (동기분 코드)
let map = new Map();
for (const i of 회사게시판){
    map.set(i,(map.get(i) || 0)+1);
    // 순회 돌면서 해당 key 값 업데이트 해줌
}
// 위 코드 풀이
map.set('이호준', (map.get('이호준') ||  0) + 1)
// => map.set('이호준', 1)
map.set('이호준', (map.get('이호준') ||  0) + 1)
// => map.set('이호준', 2)
map.set('이호준', (map.get('이호준') ||  0) + 1)
// => map.set('이호준', 3)
map.set('김은하', (map.get('김은하') ||  0) + 1)
// => map.set('김은하', 1)

let  s= new Set('abcdefff');
s.size;
s.add('f');

// set 순환하기
for (let variable of s){
    console.log(variable);
}

// 값이 배열인 경우
여기 코드 다시한번 해보기

//합집합,교집합 등 외우기

