const name = "chaeeun";
const age = 24;

const name1 = "chaen" //큰 따옴표
const name2 = 'chaen' //작은 따옴표
const name3 = `chaen` //억음부호 (백틱)

const message = "i'm a girl!";
const message2 = "i\'m a girl!"
/*작은 따옴표를 써야하는 문장을 작은 따옴표로 감쌀 때, \ 를 써주면 문자로 인식함*/

const message3 = `My name is ${name}`;
const message4 = `나는 ${20+4}살 입니다.`;
/* ``(백틱)은 문자열 내용을 변수로 사용할때 편리함 */

console.log(message3)
console.log(message4)

const PI = 3.14;

console.log(1+2)
console.log(10-3)
console.log(3*2)
console.log(6/3)
console.log(6%4)

const x = 1/0;
console.log(x)//Infinity

const y = name/2;
console.log(y) //NaN 숫자가 아님


const a = true;
const b = false;

console.log(name == 'chaeeun')//true
console.log(age > 40) //falst

let AGE; //선언만 하고 할당 안 하면~
console.log(AGE) //undefinde
let user = null;//유저는 없다

//typeof (타입오브) 연산자
console.log(typeof 3) //number
console.log(typeof name) //string(문자)
console.log(typeof true) //boolean
console.log(typeof "xxx") //string(문자)
console.log(typeof null) //object(객체형)
console.log(typeof undefined) //undefinde


//문자도 더하기 쓸 수 있음
const z = "나는";
const Z = "입니다.";

console.log( z+ name + Z );//나는chaeeun입니다.
console.log( z + age + "살" + Z );//나는 24살입니다.