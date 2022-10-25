function FoodPicker(foodNames) {
    this.menu = foodNames;
    // this.sayMenu = function () {
    //     console.log(this.menu[Math.floor(Math.random() * this.menu.length)]);
    // }
}

FoodPicker.prototype.sayMenu = function () {
    console.log(this.menu[Math.floor(Math.random() * this.menu.length)]);
}

let menuBot = new FoodPicker(['짜장면', '청국장', '김치찌게']);
let menuBot2 = new FoodPicker(['짜장면', '청국장', '김치찌게']);




// 실습2

