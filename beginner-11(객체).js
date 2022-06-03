//객체

const superman = {
    name : 'clark',
    age : 30,
}

superman.hairColor = 'black';//추가
superman['hobby'] = 'football';//추가
delete superman.age;//삭제

//console.log(superman)


function makeObject(name, age){
    return { 
    name, // = name:name
    age,// = age:age
    hoggy : 'football'
    }
}

const Mike = makeObject('Mike',30);
console.log(Mike);

console.log('age' in Mike);//true
console.log('birthday' in Mike);//false


//객체 in
function isAdult(user){
  if(!('age' in user) || //user에 age가 없거나
     user.age < 20){ //20살 미만이면
    return false; //false 됨
    }
    return true;
}

const Jane = {
    name : "Jane",
    age : 30
};

const Chaen = {
    name : "Chaen"
};

console.log(isAdult(Chaen))


//객체 for ... in
const Kan = {
    name : "Kan",
    age : 30
};
for(x in Kan){
    console.log(Kan[x])
}