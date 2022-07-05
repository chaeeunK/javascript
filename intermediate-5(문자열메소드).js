/*
length : 문자열 길이
[n] : 특정 위치에 접근
toUpperCase() : 대문자
toLowerCase() : 소문자
indexOf(text) : 문자를 인수로 받아 몇번째인지 알려줌
slice(n,m) : n~m 문자열 반환
substring(n,m) : n~m 문자열 반환(n,m위치 바껴도 가능, 음수는 0으로 인식)
substr(n,m) : n부터 시작 m개를 가져옴
trim() : 앞 뒤 공백 제거
repeat(n) : 문자열을 n번 반복
문자열도 비교 가능
"a"<"c" -> true
"a".codePointAt(0); -> 97
String.fromCodePoint(97) -> "a"
영어는 대문자보다 소문자가 큼
*/

let list = [
    "01. 들어가며",
    "02. JS의 역사",
    "03. 자료형",
    "04. 함수",
    "05. 배열",
];

let newList = [];

for(let i=0;i<list.length;i++){
    newList.push(list[i].slice(4));   
}

//console.log(newList);


//금칙어 : 콜라
/* 이렇게 하면 인덱스를 불러와서 하는것
function hasCola(str){
    if(str.indexOf('콜라') > -1){
        console.log("금칙어가 있습니다.");
    }else{
        console.log("통과")
    }
}

hasCola("와 사이다가 짱이야!");
hasCola("무슨소리, 콜라가 최고!");
hasCola("콜라");
*/

//includes는 문자열을 포함하는지 안 하는지로 판단
function hasCola(str){
    if(str.includes('콜라')){
        console.log("금칙어가 있습니다.");
    }else{
        console.log("통과")
    }
}

hasCola("와 사이다가 짱이야!");
hasCola("무슨소리, 콜라가 최고!");
hasCola("콜라");