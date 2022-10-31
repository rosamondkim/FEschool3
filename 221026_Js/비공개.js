// 클로저

function Person(){
    // 모듈 사용자 정의 혼합패턴
    let age = 30;
    // 비공개 프로퍼티

    function innerPersion(){}
    
    innerPersion.prototype.getAge = function(){
        return age;
    }
    return innerPersion;
}

const PersonFunc = Person();
const person = new PersonFunc();


//IIFE
//(function (){
//  console.log('IIFE') })();

//IIFE 이용한 모듈 사용자 정의 혼합패턴
const NewPerson = (
    function (){
        let age = 30;

        function innerPerson(){}
        innerPerson.prototype.getAge = function(){
            return age;
        }

        return innerPerson
    }
)();

const personWithSecret = new NewPerson();
console.log(personWithSecret.getAge());
console.log(personWithSecret.age);
