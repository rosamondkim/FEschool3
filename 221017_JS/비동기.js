# promise


let p = new Promise(function(resolve,reject){
    // 비동기적으로 실행될 code 작성
    resolve('hello world')
    }).then(메세지 =>{
        alert(메세지)
        return 메세지.split(' ')[0]
    }).then(메세지 => {
        alert(메세지)
        return 메세지[0]
    }).then(메세지 => {
        alert(메세지)
        return 메세지 
    }).catch(메세지 =>{
        alert('catch 실행')
    })

    new Promise((resolve, reject) => {
        //code
    })
    .then(result => result)
    .then(result => result)
    .catch(err => err)
    .finally(result => result)


    // 실전예제

    fetch('http://test.api.weniv.co.kr/mall')
    .then(data=>data.json())
    .then(data=>console.log(data))

 // 1. 추가 then을 사용하여 7개의 항목 productName만 출력해보세요.(console.log)

 //데이터 추출은 Map 써라!!!!

fetch('http://test.api.weniv.co.kr/mall')
.then(data=>data.json())
.then((data)=>{
    data.map((i) =>
console.log(i.productName)
)})
// 2. 추가 then을 사용하여 7개의 항목 중 price가 10000원 이상 되는 product를 출력하는 코드를 작성해주세요.(console.log)

fetch('http://test.api.weniv.co.kr/mall')
.then(data=>data.json())
.then((data) =>{
    data.filter((x)=>x.price >= 10000);
    return data
})

// 3. 추가 then을 사용하여 7개의 항목의 productName과 price를 각각 h2와 p태그로 생성하여(DOM) 화면에 출력해주세요.

// 4. error 처리를 해주세요. 

fetch('http://test.api.weniv.co.kr/mall')
    .then(productData=>productData.json())
    .then(productData=>productData)
    .then(productData => {
        console.log(productData.map(item => item.productName));
        return productData;
    })
    .then(productData => {
        console.log(
                productData
                    .map(item => item.price)
                    .filter(item => item >= 10000)
            )
        return productData;
    })
    .then(productData => {
        const main = document.createElement("main");
        productData.forEach(item => {
            const ProductCard = document.createElement("article");
            const productName = document.createElement("h2");
            const productPrice = document.createElement("p");

            productName.textContent = `상품명 : ${item.productName}`;
            productPrice.textContent = `가격 : ${item.price}`;

            ProductCard.appendChild(productName);
            ProductCard.appendChild(productPrice);

            main.appendChild(ProductCard);
        })
        document.body.appendChild(main);
    })
    .catch(error => {
        alert('에러!')
        // error page로 리다이렉트
        console.log(error);
    })