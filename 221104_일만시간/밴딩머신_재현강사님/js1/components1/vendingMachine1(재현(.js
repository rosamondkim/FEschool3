// 밴딩머신의 실제적인 기능들 넣어주기

class Vendingmachine{
    constructor(){
        //밴딩머신 부분에서 가져윰
        const vMachine = document.querySelector(".vending-machine")
        // vMachine을 constructor에서만 쓰고 더이상 사용하지 않아서 이것만 const로 선언

        this.balance = vMachine.querySelector(".txt-balance")
        this.itemList = vMachine.querySelector(".list-item")
        this.inputCostEl = vMachine.querySelector(".inp-put");
        this.btnPut = vMachine.querySelector(".btn-put");
        this.btnReturn = vMachine.querySelector(".btn-return");
        this.btnGet = vMachine.querySelector(".btn-get");
        this.stagedList = vMachine.querySelector(".list-item-staged");

        //마이인포부분에서 가져옴
        const myinfo = document.querySelector(".my-info");
        this.myMoney = myinfo.querySelector(".txt-mymoney");
        this.gotList = myinfo.querySelector(".list-item-staged");
        this.txtTotal = myinfo.querySelector(".txt-total");
    }
    setup(){
        this.bindEvents();
    }

    //선택한 음료수 목록 장바구니에 생성
    stagedItemGenerator(target){
        const stagedItem = document.createElement("li");
        // 여기에도 dataproperty 넣어줄거임. 획득버튼 눌렀을때 동일한 정보 그려줘야하기때문에
        stagedItem.dataset.item = target.dataset.item;
        stagedItem.dataset.price = target.dataset.price;
        stagedItem.innerHTML = `
            <button type="button" class="btn-staged">
            <img src="./src/images/${target.dataset.img}" alt="" class="img-item">
            <strong class="txt-item">${target.dataset.item}</strong>
            <span class="num-counter">1</span>
            </button>
        `;
        this.stagedList.appendChild(stagedItem);
    }

    bindEvents(){
        /*  
         * 1. 입금 버튼 기능
         * 입금액을 입력하고 입금 버튼을 누르면 소지금 == 소지금 - 입금액, 잔액 == 기존 잔액 + 입금액이 됩니다.
         * 입금액이 소지금 보다 많다면 실행을 중단하고 "소지금이 부족합니다." 라고 쓰인 경고창을 띄웁니다.
         * 입금액 인풋창은 초기화됩니다.
         * */

        this.btnPut.addEventListener('click',(event)=>{
            // function 키워드 쓰게되면 target 잡힘. 화살표 함수 써서 insatance잡힘
            const inputCost = parseInt(this.inputCostEl.value);
            const myMoneyVal = parseInt(this.myMoney.textContent.replaceAll(",",""));
            // mymoney안에 있는 텍스트노드에 접근. 쉼표 빼고 대체
            // parseInt 통해서 정수로 변경하기때문에 원 무시함
            const balanceVal = parseInt(this.balance.textContent.replace(",",""));

            if(inputCost){
                // 입금액이 소지금보다 적다면
                if(inputCost <= myMoneyVal && inputCost >0 ){
                    this.myMoney.textContent = new Intl.NumberFormat().format(myMoneyVal - inputCost) + "원";
                    // this.myMoney.textContent = toLocaleString()랑 동일함
                    //intl 그 나라만의 표기법으로 금액 표시해주는 intl(internationalization) 객체
                    this.balance.textContent = new Intl.NumberFormat().format((balanceVal ? balanceVal : 0) + inputCost) + ' 원';
                } else {
                    alert("소지금이 부족합니다ㅠㅠ");
                }
                this.inputCostEl.value = null;
                //"" 똑같이 동작함
            }
        })
        /*
            * 2. 거스름돈 반환 버튼 기능
            * 반환 버튼을 누르면 소지금 == 소지금 + 잔액이 됩니다.
            * 반환 버튼을 누르면 잔액 창은 초기화됩니다.
        */ 
    
        this.btnReturn.addEventListener("click",(event)=>{
            const balanceVal = parseInt(this.balance.textContent.replaceAll(",",""));
            const myMoneyVal = parseInt(this.myMoney.textContent.replaceAll(",",""));

            if(balanceVal){
                this.myMoney.textContent = new Intl.NumberFormat().format(balanceVal + myMoneyVal) + "원";
                this.balance.textContent = "원";
            }
        })

        /*
         * 3. 자판기 메뉴 기능
         * 아이템을 누르면 잔액 == 잔액 - 아이템 가격이 됩니다.
         * 아이템 가격보다 잔액이 적다면 "잔액이 부족합니다. 돈을 입금해주세요" 경고창이 나타납니다.
         * 아이템이 획득가능 창에 등록됩니다.
         * 아이템 버튼의 data-count 값이 -1 됩니다.
         * 만약 data-count 값이 0 이라면 부모 li에 sold-out 클래스를 붙여줍니다.
        */

        // ul로 이벤트위임 해주면 안되나? => 이벤트위임 치명적 단점. 접근성이 안좋음. 요소 하나하나에 이벤트 걸려있어야함 (스크린리더)
        const btnsCola = this.itemList.querySelectorAll("button");

        console.log(btnsCola);
        // length 0 나옴. fetch 받아오기 전에 실행되기 때문에
        // json은 비동기 통신. 콜라 만들고있는데 콜라에 이벤트 줘버림..
        // await 프로미스 객체 반환 될때까지 기다림

        btnsCola.forEach((item)=>{
            item.addEventListener('click',(event)=>{
                const targetEl = event.currentTarget;
                const balanceVal= parseInt(this.balance.textContent.replaceAll(",",""));

                let isStaged = false; // 이미 선택되었는가?의 상태 저장

                const targetElPrice = parseInt(targetEl.dataset.price);
                const stagedListItem = this.stagedList.querySelectorAll("li");

                // 입금된 금액이 음료수 값보다 많거나 같을 경우
                if(balanceVal >= targetElPrice){
                    this.balance.textContent =new Intl.NumberFormat().format(balanceVal - targetElPrice) + "원";
                    
                    // forEach 문을 사용할 경우 반복의 종료가 불가능하다 (return,break작동 안함). 모든 원소를 순환할 필요가 없다면 비효율적.
                    for(const item of stagedListItem){
                        // 클릭한 음료수가 내가 이미 선택한 아이템인지 탐색
                        if(item.dataset.item === target.dataset.item){
                            // 내가 클릭한 상품과 내가 담은 상품이 같을 경우
                            item.querySelector(".num-counter").textContent++ ;
                            isStaged = true;
                            break;
                        }
                    };
                    // 해당 아이템 처음 선택했을 경우
                    if(!isStaged){
                        this.stagedItemGenerator(targetEl);
                    }
                    // 콜라의 갯수를 줄인다.
                    targetEl.dataset.count--;

                    // 상품 소진되면 품절 표시
                    if(parseInt(targetEl.dataset.count) === 0){
                        targetEl.parentElement.classList.add('sold-out');
                        const warning = document.createElement("em");
                        warning.textContent = '해당상품은 품절입니다';
                        warning.classList.add('ir');
                        //em 요소를 btn 요소의 앞에 배치합니다.
                        targetEl.parentElement.insertBefore(warning,targetEl);
                    }
                
                // 입금된 금액이 음료수 값보다 적을 경우
                } else{
                    alert("잔액부족. 돈입금고고");
                }
            })
        })

        /**
         * 4. 획득 버튼 기능
         * 획득 버튼을 누르면 선택한 음료수 목록이 획득한 음료 목록으로 이동합니다.
         * 획득한 음료의 금액을 모두 합하여 총금액을 업데이트 합니다.
        */
        this.btnGet.addEventListener("click",(event)=>{
            let isGot = false;
            let totalPrice = 0;

            // 내가 고른 음료수 목록과 이미 구입한 목록 비교
            for(const itemStaged of this.stagedList.querySelectorAll("li")){
                for(const itemGot of this.gotList.querySelectorAll("li")){
                    let itemGotCount = itemGot.querySelector(".num-counter");
                    
                    // 획득한 아이템이 이미 획득한 음료 리스트에 존재하는지 확인
                    if(itemStaged.dataset.item == itemGot.dataset.item){
                        // 획득한 음료 리스트의 아이템 갯수 업데이트
                        itemGotCount.textContent = parseInt(itemGotCount.textContent) + parseInt(itemStaged.querySelector(".num-counter").textContent);
                        isGot = true;
                        break;
                    }
                }
                // 처음 획득하는 음료수라면
                if(!isGot){
                    this.gotList.appendChild(itemStaged);
                }
            }

            //stagedList 목록의 내용을 초기화
            this.stagedList.innerHTML = null;

            //획득한 음료 리스트를 순환하면서 총 금액 계산합니다.
            this.gotList.querySelectorAll("li").forEach((itemGot)=>{
                totalPrice += itemGot.dataset.price + parseInt(itemGot.querySelector(".num-counter").textContent);
            });
            this.txtTotal.textContent = `총금액 : ${new Intl.NumberFormat().format(totalPrice)}원`;
        });
    }
    
}

export default Vendingmachine;


