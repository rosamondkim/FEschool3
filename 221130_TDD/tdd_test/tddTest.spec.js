// 자스민 라이브러리 함수 describe 테스트할 유닛들의 모음
//descirbe 첫번째 인자: 설명 두번째인자: 콜백함수
describe( '자스민 테스트입니다', () =>{
    // it 함수 : 함수의 테스트 유닛 입니다.
    it('더하기1을하는 함수입니다.',()=>{
        const num = 30;

        // expect : 기대식, 실행할 함수의 결과값을 인자로 전달한다.
        // toBe 함수 : 매쳐 함수입니다. 내가 기대한 결과가 일치하는지 판단하는 함수
        expect(plusOne(num)).toBe(num+1);
        
    }) 
}
)