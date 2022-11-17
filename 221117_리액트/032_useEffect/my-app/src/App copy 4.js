import {useState,useEffect} from 'react'

export default function App() {
  const [수업여부,set수업여부] = useState('수업중');
  const [잔고,set잔고] = useState(100000)

  const handleZoomOut = (e) =>{
    set수업여부('수업종료')
  }
  useEffect(()=>{
  //감시할 변수는 대괄호(수업여부) . 그리고 밑에 코드 실행하고싶음
  if(수업여부 === '수업종료' && 잔고 >= 20000){
    alert('카페로 출발!')
    set잔고(90000)
    // 위 코드처럼 쓰면 set잔고가 렌더링 하게 된다
    //useEffect로 멈춰줘야함

  } 
},[수업여부])

  return (
    <div>
      <button onClick ={handleZoomOut}>ZoomOut</button>
      <p>{수업여부}</p>
      <p>{잔고}</p>
    </div>
  )
}
