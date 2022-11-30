class ViewManager {
    // 두가지 인자 초반에 전달받음
    constructor(textManager, options){
        if(textManager.consturctor !== textManager) {
            // throw Error : 사용자 정의 에러. 에러 메시지 반환하고 프로그램 종료합니다.
            throw Error('textManager 객체를 전달해야합니다')
        }

        if(!options.viewerEl || !options.btnEl || !options.inpTxt) {
            throw Error ('필요한 요소 중에 빈값이 존재합니다');

        }
        
            this.inpTxt = options.inpTxt ;
            this.viewerEl = options.viewerEl;
            this.textManager = textManager;

            options.btnEl.addEventListener('click',()=>{
                this.changeValue();

            })
    }

    changeValue(){
        this.textManager.
    }
}