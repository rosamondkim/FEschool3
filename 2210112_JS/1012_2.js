// this
function a(){
    console.log(this)
}
a();

function b(){
    console.log('hello world')
}
window.b()

let test = {
    one: 1,
    two: 2,
    three: function(){
        console.log(this)
    }
}
// 추가 예제
function sayName(){
    console.log(this.name)
}
var name= "hero";
let peter ={
    name: 'Peter Parker',
    sayName: sayName
}

let bruce = {
    name: 'bruce wayne',
    sayName: sayName
}

sayName();

// this 사용 예시
let 호텔= [{
    '이름': '하나호텔',
    '위치':'제주도 제주시 500',
    '방의개수': 50,
    '예약자수': 25,
    '남은방의개수': function(){return this.방의개수- this.예약자수}
},
{
'이름': '하나호텔2',
'위치':'제주도 제주시 500',
'방의개수': 30,
'예약자수': 25,
'남은방의개수': function(){return this.방의개수- this.예약자수}
},
{
    '이름': '하나호텔3',
    '위치':'제주도 제주시 500',
    '방의개수': 20,
    '예약자수': 25,
    '남은방의개수': function(){return this.방의개수- this.예약자수}
    },
{
    '이름': '하나호텔4',
    '위치':'제주도 제주시 500',
    '방의개수': 25,
    '예약자수': 25,
    '남은방의개수': function(){return this.방의개수- this.예약자수}
    }
]

//호텔[0]['방의개수'] - 호텔[0]['예약자수']
호텔[0]['남은방의개수']() 

// this 값을 사용자의 의도대로 조작
//call 잘 안씀
var peter = {
    name : 'Peter Parker',
    sayName : function(){    
          console.log(this.name);
      }
}
  
var bruce = {
    name : 'Bruce Wayne',
}
peter.sayName.call(bruce);
  // peter의 sayName을 bruce 

// apply (복수)
var peter = {
    name : 'Peter Parker',
    sayName : function(is, is2){    
            console.log(this.name+ ' is '+ is + ' or ' + is2);
            }
}

var bruce = {
    name : 'Bruce Wayne',
}

peter.sayName.apply(bruce, ['batman', 'richman']);
//sayname호출한 사람은 bruce임

//bind()
function sayName(){
    console.log(this.name);
}  
var bruce = {
    name: 'bruce',
    sayName : sayName
}  
var peter = {
    name : 'peter',
    sayName : sayName.bind(bruce)
}
sayName();
peter.sayName();
bruce.sayName();

  /* peter.sayName() 과 bruce.sayName() 의 결과 값운 뭘까? */

