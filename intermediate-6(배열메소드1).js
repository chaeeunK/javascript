/*
splice(n,m) : 특정 요소 지움 n부터m개
splice(n,m,x) : 특정 요소 지우고 추가
splice() : 삭제된 요소 반환
slice(n,m) : n부터 m까지 봔환
concat(arr2, arr3 ...) : 합쳐서 새배열 반환
forEach(fn) : 배열 반복
*/

let arr = ["Mike", "Tom", "Jane"];

arr.forEach((name, index) => {
    console.log(`${index+1}. ${name}`);
});

/*
indexOf / lastIndexOf : 해당 요소에 인덱스 반환 없으면 -1 반환
includes() : 포함하는지 확인
find(fn) / findIndex(fn) : 해당요소 찾기 indexOf와 비슷 하지만 첫번째 true 값만 반환하고 끝 없으면 undefined
*/

let Arr = [1,2,3,4,5];

const result = Arr.find((item) => {
    return item % 2 === 0;
});

console.log(result);


let userList = [
    {name : "Mike", age : 30},
    {name : "Jane", age : 27},
    {name : "Tom", age : 10},
];

const Result = userList.findIndex((user) => {
    if(user.age < 19){
    return true;
    }
    return false;
});

console.log(Result);

/*
filter(fn) : 만족하는 모든 요소를 배열로 반환
*/

let ARr = [1,2,3,4,5,6];

const REsult = ARr.filter((item) => {
    return item % 2 === 0;
});

console.log(REsult);

/*
reverse() : 역순으로 재정렬
map(fn) : 함수를 받아 특정 기능을 실행하고 새로운 배열을 반환
*/

let UserList = [
    {name : "Mike", age : 30},
    {name : "Jane", age : 27},
    {name : "Tom", age : 10},
];

let newUserList = UserList.map((user, index) => {
    return Object.assign({}, user, {
    id : index +1,
    isAdult: user.age > 19,
    });  
});

console.log(newUserList);



let ARR = ["안녕", "나는", "철수야"];

let RESult = ARR.join("-");

console.log(RESult);




const users = "Mike,Jane,Tom,Tony";
const RESUlt = users.split(",");
let str = "Hello, My name is Mike."
const RESULt = str.split("");

console.log(RESUlt);
console.log(RESULt);


let user = {
    name : "Mike",
    age : 30,
};

let USerList = ["Mike","Tom","Jane"];

console.log(typeof USer);
console.log(typeof USerList);

console.log(Array.isArray (USer));
console.log(Array.isArray (USerList));