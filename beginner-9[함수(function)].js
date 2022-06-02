//함수 작성

function showError(){
    alert('에러가 발생했습니다. 새로고침 해주세요.')
}

showError();


//매개변수가 있는 함수


let msg = `Hello`;//전역 변수 (global varable)
console.log('함수 호출 전')
console.log(msg)


function sayHello(name){
    if(name){
    msg += `, ${name}`;
    }
    console.log('함수 내부')
  //지역 변수 (local varable)
    console.log(msg);
}

sayHello('Chaen');
console.log('함수 호출 후')
console.log(msg)
//console.log(msg) 에러 msg를 함수 밖으로 꺼내면 에러가 안 난다.



//전역 변수와 지역 변수

let Msg = "welcome";
console.log(Msg)

function sayHello(name){
    let Msg = "Hello"
    console.log(Msg + ' ' + name);
}

sayHello('Chaeeun');
console.log(Msg)

//지역변수로 쓰는게 좋은 전역변수 많아지면 관리 힘듦



//OR
function sayHello(name = 'friend'){
    let msg = `Hello, ${name}`
    console.log(msg)
}

sayHello();//name이 없으면 프렌드가 뜸
sayHello('Chaen');


//return 으로 값 반환

function add(num1, num2){
    return num1 + num2;
}

const result = add(2,3);
console.log(result)


//return

function showError(){
    alert('에러가 발생했습니다.');
  return; //함수를 종료하는 목적으로도 사용
    alert('이 코드는 절대 실행되지 않습니다!')
}
const Result = showError();
console.log(Result);



/*
한번에 한작업에 집중
읽기 쉽고 어떤 동작인지 알 수 있게 네이밍

showError : 에러를 보여줌
getName : 이름을 얻어옴
createUserData : 유저데이터 생성
checkLogin : 로그인 여부 체크

이런식으로
*/