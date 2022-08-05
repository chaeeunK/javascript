/*
const pr = new Promise((resolve, reject) => {
  //code
});
resolve 성공
reject 실패

new Promise 는 state 와 result 를 프로퍼티로 받는다

pr.then(
    function(result){}, - 이행 되었을때 실행
    function(err){} -거부되었을때 실행
);


예시)
const pr = new Promise((resolve, reject) => {
    setTimeout(()=>{
        resolve('OK')
    }, 3000)
});

pr.then(
    function(result){
        console.log(result + '가지러 가자.');
    },
    function(err){
        console.log('다시 주문해주세요..');
    }
);

------------------
pr.then(
    function(result){}
    ).catch(
    function(err){}
    ).finally(
    function(){
        console.log("---주문끝---")
    }
)

캐치문을 쓰는게 더 좋음

*/

/*
const pr = new Promise((resolve, reject) => {
    setTimeout(()=>{
        resolve("OK");
    },1000);
});

console.log("시작");
pr.then((result)=>{
    console.log(result);
    }).catch((err)=>{
    console.log(err);
    }).finally(()=>{
    console.log("끝");
});
*/


//콜밸 함수
/*
const f1 = (callback) => {
    setTimeout(function(){
        console.log("1번 주문 완료");
        callback();
    }, 1000);
};

const f2 = (callback) => {
    setTimeout(function(){
        console.log("2번 주문 완료");
        callback();
    }, 3000);
};

const f3 = (callback) => {
    setTimeout(function(){
        console.log("3번 주문 완료");
        callback();
    }, 2000);
};

console.log('시작');
f1(function(){
    f2(function(){
        f3(function(){
        console.log('끝');
        });
    });
});
*/

//윗 내용을 프로미스 함수로 만들기

const F1 = () => {
    return new Promise((res, rej) => {
        setTimeout(()=>{
            res("1번 주문 완료");
        },1000);
    });
};

const F2 = (message) => {
    console.log(message);
    return new Promise((res, rej) => {
        setTimeout(()=>{
            res("2번 주문 완료");
        },2000);
    });
};

const F3 = (message) => {
    console.log(message);
    return new Promise((res, rej) => {
        setTimeout(()=>{
            res("3번 주문 완료");
        },3000);
    });
};

/*
console.log("시작");
F1()
    .then((res) => F2(res))
    .then((res) => F3(res))
    .then((res) => console.log(res))
    .catch(console.log)
    .finally(()=>{
        console.log("끝");
    });
*/

//Promise.all
Promise.all([F1(), F2(), F3()]).then((res) => {
    console.log(res);
});

//race 도 all 과 동일
//all은 모든 동작을 실행하지만 race는 하나라도 완료되면 끝남