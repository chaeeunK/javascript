//alert - 알려줌
// prompt - 입력 받음
//confirm - 확인 받음

const name = prompt("이름을 입력하세요.");
//아무것도 입력 안 하면 null 뜸

alert("환영합니다." + name + "님");
alert(`안녕하세요, ${name}님. 환영합니다.`);

const NAME = prompt("예약일을 입력해주세요","2022-05-");
//prompt는 두개의 인수를 가질 수 있다


const isAdult = confirm("당신은 성인입니까?");
//console.log(isAdult) - 확인 누르면 true, 취소 누르면 false


//단점 : 스크립트 일시 정지, 스타일링이 안됨(그래도 많이 사용됨)