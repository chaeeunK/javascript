/*
인수 전달 

function showName(name){
    console.log(name);
}
showName('Mike'); -> 'Mike'
showName('Mike', 'Tom'); -> ?

showName(); -> undefined

*/

/*
arguments
= 함수로 넘어 온 모든 인수에 접근
= 함수내에서 이용 가능한 지역 변수
= length / index
= Array 형태의 객체
= 배열의 내장 메서드 없음 (forEach, map)

function showName(name){
    console.log(arguments.length);
    console.log(arguments[0]);
    console.log(arguments[1]);
}

showName('Mike', 'Tom');
//2
//'Mike'
//'Tom'

*/

/*
나머지 매개변수(Rest paramenters)
es6를 사용할 수 있는 사양이면 나머지 매개변수 사용을 권장

function showName(...name){
    console.log(names);
}

showName(); -> []
showName('Mike'); -> ['Mike']
showName('Mike', 'Tom'); -> ['Mike', 'Tom']
*/


// 나머지 매개 변수
// 전달 받은 모든 수를 더해야함
function add(...numbers) {
    let result = 0;
    numbers.forEach((num)=>(result += num));
  //let result = numbers.reduce((prev, cur) => prev + cur);
  //console.log(result);
}

add(1,2,3);
add(1,2,3,4,5,6,7,8,9,10);


//user 객체를 만들어 주는 생성자 함수를 만든다
//나머지 매개변수는 마지막에 위치

function User(name, age, ...skills){
    this.name = name;
    this.age = age;
    this.skills = skills;
}

const user1 = new User('Mike', 30, 'html', 'css');
const user2 = new User('Tom', 20, 'JS', 'React');
const user3 = new User('Jane', 10, 'English');

// console.log(user1);
// console.log(user2);
// console.log(user3);

/*
전개 구문 : 배열

let arr1 = [1,2,3];
let arr2 = [4,5,6];

let Result = [...arr1, ...arr2];
console.log(Result); -> [1,2,3,4,5,6]

*/


//arr1 을 [4,5,6,1,2,3]dmfh

let arr1 = [1,2,3];
let arr2 = [4,5,6];
/*
arr2.reverse().forEach(num => {
    arr1.unshift(num);
}); 전개 구문으로 스면 아래처럼 간단하게 가능
*/

arr1 = [...arr2, ...arr1];

//console.log(arr1);


let user = {name : "Mike"};
let info = {age : 30};
let fe = ["JS", "React"];
let lang = ["Korean", "Engligh"];

/*
user = Object.assign({}, user, info, {
    skills:[],
});

fe.forEach((item) => {
    user.skills.push(item);
});
lang.forEach((item) => {
    user.skills.push(item);
});
*/
user = {
    ...user,
    ...info,
    skills : [...fe, ...lang],
};

console.log(user);