//함수 선언문


showError();

function showError() {
    console.log("error");
}


//화살표 함수
let ShowError = () => {
    console.log("error");
};

const sayHello = (name) => {
    const msg = `Hello, ${name}`;
    console.log(msg);
};

const add = (num1, num2) => num1 + num2;