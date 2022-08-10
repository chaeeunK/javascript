/*****async******/

async function getName(){
  //return Promise.resolve("Tom");
    throw new Error("err..");
}

// getName().then((name) => {
//   console.log(name);
// });

getName().catch((err) => {
    console.log(err);
});



/*****await*****/

function getName(name){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
        resolve(name);
        }, 1000);
    });
}

async function showName(){
    const result = await getName("Mike");
    console.log(result);
}

    console.log("시작");
    showName();



/**********/

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
        // rej(new Error("err..."));
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

async function order(){
    try{
        const result = await Promise.all([F1(), F2(), F3()]);
        // const result2 = await F2(result1);
        // const result3 = await F3(result2);
        console.log(result);
    }catch(e){
        console.log(e)
    }
    console.log("종료");
}
order();