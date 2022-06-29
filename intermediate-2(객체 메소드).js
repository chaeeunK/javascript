/*
Object.assign() : 객체 복제
Object.keys() : 키 배열 반환
Object.values() : 값 배열 반환
Object.entries() : 키/값 배열 반환
Object.fromEntries() : 키/값 배열 객체로
*/

let n = "name";
let a = "age";

const user = {
    [n] : "Mike",
    [a] : 30,
    [1 + 4] : 5,
};

//console.log(user);

function makeObj(key, val){
    return{
        [key] : val
    }
}

const obj = makeObj("나이",33);

console.log(obj);

const user2 = Object.assign({},user);
user2.name = "Tom";

console.log(user);
console.log(user2);


const result = Object.keys(user);

console.log(result);


const Result = Object.values(user);
console.log(Result);

const REsult = Object.entries(user);
console.log(REsult);

let arr = [
    ['mon','월'],
    ['tue','화'],
];
const RESult = Object.fromEntries(arr);
console.log(RESult);