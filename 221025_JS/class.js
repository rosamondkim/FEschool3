// 생성자 함수를 class 문법으로 전환
class Me {
    constructor(name,address,phoneNum){
        this.name = name;
        this.address = address;
        this.phoneNum=phoneNum;
    }
    
    //메서드 등록할때는 펑션 키워드 필요 없음
    canSwim(){
        console.log('민승이가 헤엄친다')
    }
    teaching(student){
        student.levelup();
    }
}

class Student{
    constructor(level) {
        this.level = level 
    };

    levelUp(){
        this.level++;
    }
}

const me = new Me()

