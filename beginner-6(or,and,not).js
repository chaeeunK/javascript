// || or
// && and
// ! not

//----or----
//이름이 tom이거나 성인이면 통과

const NAME = "chaen";
const AGE = 24;

if(NAME == 'tom' || AGE > 19){
    console.log('통과');
}

//----and----
//이름이 chaen 이고 성인이면 통과

if(NAME == 'chaen' && AGE > 19){
    console.log('통과');
}else{
    console.log('돌아가~')
}


//----not----
//나이를 입력 받아서 성인이 아니면 돌아가라

const age = prompt('나이가 어떻게..?');
const ISAdult = age > 19;

if(!ISAdult){
    console.log('돌아가');
}

//우선순위
//남자이고, 이름이 TOM 이거나 성인이면 통과

const gender = 'f';
const name = 'Jane';
const isAdult = true;

//if(gender == 'M' && name == 'Mike' || isAdult){
if(gender == 'M' && (name == 'Mike' || isAdult)){
    console.log('통과')
}else{
    console.log('돌아가')
}

//or 가 and 보다 우선순위가 높다