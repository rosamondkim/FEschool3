import {createStore} from 'redux'
//권장하지 않는다 ㅇ즘은 리덕스 툴킷 사용하기 때문에

const plus = document.getElementById("plus");
const minus = document.getElementById("minus");
const number = document.getElementById("number");
const quantity = document.getElementById("quantity");
const totalPrice = document.getElementById("total");

const PRICE = 17500;
const countReducer =(state=0,action) => {
    
}
const store = createStore(countReducer)
    

let count = 0;

// UI Update - text
const updateResult = (c) => {
  number.innerText = count;
  quantity.innerHTML = c;
  totalPrice.innerHTML = c * PRICE;
};

// State Change
const addNumber = () => {
  count += 1;
  minus.disabled = false;
  updateResult(count);
};

// State Change
const substractNumber = () => {
  count -= 1;
  plus.disabled = false;
  updateResult(count);
};

// Init
number.innerHTML = count;
updateResult(count);


// Event
plus.addEventListener("click", addNumber);
minus.addEventListener("click", substractNumber);