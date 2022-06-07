//method:객체 프로퍼티로 할당 된 함수


let boy = {
    name : "Mike",
    showName : function() {
        console.log(this.name)
    }
};

let man = boy;
boy = null;

man.showName(); //에러


let Boy = {
    name : 'Mike',
    sayThis : () => {
        console.log(this);
    }
};
boy.sayThis();

//객체 메소드를 작성할때는 화살표 함수로 작성하지 않는게 좋다