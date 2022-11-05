// 콜라들을 직접 자바스크립트로 생성해서 붙여넣기

class ColaGenerator {
    constructor(){
        // 재사용성을 위해 class 사용. 
        //constructor는 언제 실행되나? -> 클래스 통해서 인스턴스 만들때 자동으로 실행됨. 
        this.itemList =document.querySelector(".list-item");
        //itemlist 라는 프로퍼티 안에 집어넣겠습니다
    }
// 인스턴스 만들어서 인스턴스 안의 setup 함수 실행
// 안에서 콜라팩토리 실행. 받아온 데이터를 바탕으로 li 만들어주게됨
    setup(){
        this.loadData((json) => {
            this.colaFactory(json);
        });
    }
    //setup 함수는 메서드의 일관성을 주기 위해 따로 만듦.

    // 두가지 방식으로 써볼것. 에이젝스 랑 fetch 함수
    // 1) 옛날방식인 에이젝스
    // loadData(callback){
        
        // const requestObj = new XMLHttpRequest();
        // 서버와 통신하기 위해 객체를 requestOBj 생성한다.
        // requestObj.open('GET','src/js/item.json') // 통신 시작. 오픈 
        // requestObj.onreadystatechange= () =>{
            // 이벤트리스너. 요청 시작돼서 이 요청에 변화가 있을때 콜백함수 실행
            //readyState가 변화하면 트리거
            // if(requestObj.readyState === 4 && requestObj.status === 200){
                // readyState 요청이 어떤 과정에 있습니다. 라는 것을 알려줌. 우리가 요청 줬는데 처리 끝났으면 4 라는 값을 서버에서줌
                //status => 요청 과정에서 처리 문제 있는지 없는지 상태 나타냄 요청을 처리하는 과정에서 200을 주는건 아무런 문제 없었음을 의미
                // callback(JSON.parse(requestObj.responseText));
                //콜백함수는 위에 setup에 있는 제이슨 익명함수!! 실행시킨다는 뜻
                //실행시킬때 전달하는건 우리가 불러오고 있는 json데이터
            //}
        //}

        // requestObj.send(null);
        //잘 받았다고 서버로 전송해주는것. 지금은 우리가 전달해준 데이터 없기 때문에 null 보냄
        
    // }

    // 2) fetch 활용하기 (fetch함수는 비동기로 api를 받아오는데 그 데이터를 promise 객체에 저장)
    async loadData(callback) {
        // async 함수 안에서만 await 사용할 수 있다. 둘은 항상 짝이다. 
        //promise 객체 저장할 response 라는 상수 만들어주고 여기에 fetch 함
        const response = await fetch('src/js/item.json'); //기다렷. 데이터 받아오는 await
        // 요청 끝났는지 확인해보는 절차 필요하다.
        if(response.ok){ //ok는 http 요청 메서드. http 프로토콜로 받는 상태코드가 200~299일경우
            callback(await response.json());
            //awiat 넣어서 기다려주라 함. 데이터 읽는 await
            // response.json() 응답본문을 읽으면서 객체형태로 파싱합니다. 
        } else {
            alert("통신 에러" + response.status);
            //status => 요청 과정에서 처리 문제 있는지 없는지 상태 나타냄 
        }
    }
    //loaddata 실행될때 인자로 colafactory 들어갈것임
    colaFactory(data){
        //data가 저 제이슨 데이터가 됨
        // 가상으로 메모리상에 fragment 만들어주고 요소들 한꺼번에 넣어준 후 마지막에 돔트리로 넣어주기
        const docFrag = document.createDocumentFragment();
        data.forEach((el)=>{
            const item = document.createElement("li");
            const itemTemplate = `
                <button type="button" class="btn-item" data-item="${el.name}" data-count="${el.count}" data-price="${el.cost}" data-img="${el.img}">
                <img src="src/images/${el.img}" alt="" class="img-item">
                <strong class="tit-item">${el.name}</strong>
                <span class="txt-price">${el.cost}원</span>
                </button>
            `;
            item.innerHTML = itemTemplate;
            docFrag.appendChild(item);
            // this.itemList.appendChild(item);
            // 이렇게 하면 돔이 계속 업데이트 되고있다. forEach 요소하나하나 돌리기때문에
            // 그래서 fragment 라는것이 더 효율적이라고 함 
        })
        this.itemList.appendChild(docFrag);
        // docFrag는 휘발되는건가? 변수를 다르게 하면 또다른 fragment가 만들어지는건지. 
    }
}

export default ColaGenerator;
// 추출한다.이 클래스 밖으로 빼겠다
// export 해줬으니까 콜라데이터 밖에서도 써줄수있음
// 한개가 아니면 default 대신 named => {name1,name2,...}