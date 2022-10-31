class Sausage{
    constructor(name1,name2){
        this.name1 = name1;
        this.name2 = name2;
    }
    taste(){
        console.log(`${this.name1}와 ${this.name2}맛이 난다!`)
    }
} 
const sausage = new Sausage('차즈','칠리')
sausage.taste()

class FiresSausage extends Sausage{
    constructor(name1,name2,name3){
        super(name1,name2);
        this.name3 = name3;
    }

    fireTaste(){
        super.taste();
        console.log(`${this.name3}맛도 난다~`);
    }
}


const firesSausage = new FiresSausage('치즈','칠리','불');
firesSausage.fireTaste(); 