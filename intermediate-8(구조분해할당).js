//구조 분해 할당 구문은 배열이나 객체의 속성을 분해해서 그 값을 변수에 담을 수 있게 하는 표현식

//배열 구조 분해
let [x,y] = [1,2];
console.log(x);
console.log(y);

let users = ['Mike', 'Tom', 'Jane'];
let [user1, user2, user3] = users;
console.log(user1);
console.log(user2);
console.log(user3);


let str = "Mike-Tom-Jane";
let [User1, User2, User3] = str.split('-');
console.log(User1);
console.log(User2);
console.log(User3);


//배열 구조 분해 : 기본값
let [a=3, b=4, c=5] = [1,2];
console.log(a);
console.log(b);
console.log(c);


//일부 반환값 무시
let [USer1, ,USer2] = ['Mike','Tom','Jane','Tony'];
console.log(USer1);
console.log(USer2);


//객체 구조 분해
let user = {name: 'Mike', age: 30};
//let {name, age} = user; 아래와 똑같이 쓸 수 있다
let {name: userName, age:userAge} = user;
console.log(userName);
console.log(userAge);

//기본값
let User = {name:'Mike', age:30};
let {name, age, gender = 'male'} = User;
console.log(gender);