// const car = {
//   wheels:4,
//   drive(){
//     console.log("drive..");
//   },
// };

let Bmw = function(color){
    this.color = color;
};

Bmw.prototype.wheels = 4;
Bmw.prototype.drive = function(){
    console.log("drive..");
};
Bmw.prototype.navigation = 1;
Bmw.prototype.stop = function(){
    console.log("STOP!");
};

// Bmw.prototype = {
//   constructor:Bmw,
//   wheels : 4,
//   drive(){
//     console.log("drive..");
//   },
//   navigation:1,
//   stop(){
//     console.log("STOP!");
//   },
// };

const x5 = new Bmw("red");
const z4 = new Bmw("blue");

//x5._proto_=car;
//z4._proto_=car;

/***********************/

const Audi = function(color){
    const c = color;
    this.getColor = function(){
    console.log(c);
    };
};

const A = new Audi("red");