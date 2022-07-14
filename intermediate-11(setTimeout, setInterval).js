/*
setTimeout
일정 시간이 지난 후 함수를 실행

setInterval
일정 시간 간격으로 함수를 반복

*/

let num = 0;

function showTime() {
    console.log(`안녕하세요. 접속하신지 ${num++}초가 지났습니다.`);
    if(num > 5){
        clearInterval(tId);
    }
}

const tId = setInterval(showTime, 1000);