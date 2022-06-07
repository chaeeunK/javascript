//배열(array):순서가 있는 리스트
//배열은 문자 뿐만 아니라, 숫자, 객체, 함수 등도 포함할 수 있음
//length:배열의 길이
//push():배열 끝에 요소를 추가
//pop():배열 끝 요소 제거
//shift, unshift : 배열 앞에 제거 / 추가
//배열은 반복문을 위해 씀
//반복문 : for / for...of 


let days = ['mon', 'tue', 'wed'];

days[1]='화요일' //d인텍스를 이용해 수정 가능
days.push('thu');//뒤에 추가
days.unshift('sun');//앞에 추가

//for문

for(let index=0; index < days.length; index++){
    console.log(days[index]);
}


//for...of
for (let day of days){
    console.log(day);
}