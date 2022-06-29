/*
const a = Symbol(); : new를 붙이지 않음
Symbol : 유일성 보장

property key : 심볼형
const id = Symbol('id');
const user = {
    name : 'Mike',
    age : 30,
    [id] : 'myid'
}
>user
{name: "Mike", age:30, Symbol(id):"myid"}
>user[id] ->"myid"

객체 메소드와 포인(for(let a in user){}...)은 심볼형을 건너 뛴다
*/

/*
Symbol.for() : 전역 심볼
하나의 심볼만 보장받을 수 있음
없으면 만들고, 있으면 가져오기 때문
Symbol 함수는 매번 다른 Symbol 값을 생성하지만,
Symbol.for 매소드는 하나를 생성한 뒤 키를 통해 같은 Symbol을 공유

const id1 = Symbol.for('id');
const id2 = Symbol.for('id');

id1 === id2; -> true
*/

// 다른 개발자가 만들어 놓은 객체
const user = {
    name: "Mike",
    age: 30,
};

//내가 작업
//user.showName = function(){}; 이렇게x
const showName = Symbol("show name");
user[showName] = function(){
    console.log(this.name);   
};

user[showName]();


// 사용자가 접속하면 보이는 메세지
for(let key in user){
    console.log(`His ${key} is ${user[key]}.`)
}