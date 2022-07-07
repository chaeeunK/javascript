/*
sort() : 배열 재정렬, 배열 자체가 변경되니 주의
*/

let arr = [27,8,5,13];
// function fn(a,b){
//   return a - b;
// }
//arr.sort(fn); 아래 식과 동일

arr.sort((a,b) =>{
    return a-b;
});
//console.log(arr);

//https://lodash.com/
//함수 라이브러리 짱 많이 씀


/*
arr.reduce()
인수로 함수를 받음
(누적 계산값, 현재값) => {return 계산값};
*/
let Arr = [1, 2, 3, 4, 5]
const result = Arr.reduce((prev, cur) => {
    return prev + cur;
},0);

//console.log(result);

let userList = [
    {name : "Mike", age : 30},
    {name : "Tom", age : 10},
    {name : "Jane", age : 27},
    {name : "Sue", age : 26},
    {name : "Harry", age : 43},
    {name : "Steve", age : 60},
];

let Result = userList.reduce((prev, cur) => {
    /*
    if(cur.age > 19){
        prev.push(cur.name);
    }
    return prev; 
    */
  //성인만 나오게

  //return (prev += cur.age); 
  //나이 합

    if(cur.name.length ===3){
    prev.push(cur.name);
    }
    return prev;
  //글자수가 3글자인 이름만

}, []);

console.log(Result);