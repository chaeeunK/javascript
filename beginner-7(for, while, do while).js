/* 
for(let i = 0; i < 10; i++){
    반복할 코드~
}초기갑; 조건; 코드 실행 후 작업;
(조건이 true이면 실행)
*/


for(let i = 0; i <10; i++){
    console.log(i)
}



//while문
let i = 0;


while(i<10){
    console.log(i);
    i++;
}


//do..while
/*
do{
//코드
i++;
}while(i<10)
*/

//break

while(true){
    let answer = confirm('계속할까요?');
    if(!answer){
    break;
    }
}


//continue
//짝수만

for(let i = 0; i<10; i++){
    if(i%2){
    continue;
    }
    console.log(i)
}


//명확한 횟수가 정해져있으면 for문 아니면 while문 많이 사용