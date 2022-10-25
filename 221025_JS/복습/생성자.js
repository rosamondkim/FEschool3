function Factory(food){
    this.food = food;
    const chosenFood =food[Math.floor(Math.random()*food.length)];
    }

Factory.prototype.choice= function(){
    return (`이번에는 ${chosenFood} 드세요`);
}

let whatToEat = new Factory(['김밥','짜파게티','떡볶이','소고기','초밥','삼겹살'])
console.log(whatToEat.choice());
