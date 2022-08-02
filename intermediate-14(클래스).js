//Class = ES6에 추가된 스펙
//class 는 new 없이 실행할 수 없다


const User = function(name,age){
    this.name = name;
    this.age = age;
  // this.showName = function(){
  //   console.log(this.name);
  // };
};

User.prototype.showName = function(){
    console.log(this.name);
};

const mike = new User("Mike",30);

class User2 {
    constructor(name, age){
        this.name = name;
        this.age = age;
    }
    showName(){
        console.log(this.name);
    }
}

const tom = new User2("Tom",19);


//class 상속

class Car{
    constructor(color){
        this.color = color;
        this.wheels = 4;
    }
    drive(){
        console.log("drive..");
    }
    stop(){
        console.log("STOP!");
    }
}

class Bmw extends Car{
    constructor(color){
        super(color);
        this.navigation = 1;
    }
    park(){
        console.log("PARK");
    }
    stop(){
        super.stop();
        console.log("OFF");
    }
}

//const z4 = new Bmw("blue");