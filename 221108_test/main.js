const hrs = document.querySelector(".timer-hrs")
const min = document.querySelector(".timer-min")
const sec = document.querySelector(".timer-sec")

const startBtn = document.querySelector(".start-btn")
const resetBtn = document.querySelector(".reset-btn")

// hrs.innerText = "02"

// startBtn.addEventListener("click",()=>{
//     startBtn.classList.toggle("pause-btn");
//     setInterval(() => {
//         let hrs
//     }, 1000);
// })

// [타이머 기능]
// 1. 시간/분/초 입력할 수 있습니다.
// 2. Start를 누르면 타이머가 1초 단위로 감소합니다.
// 3. Pause를 누르면 타이머가 멈춥니다.
// 4. 다시 Start를 누르면 재시작됩니다.
// 5. 0초가 되면 초기화 됩니다.
// 6. Reset을 누르면 초기화 됩니다.