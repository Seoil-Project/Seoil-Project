//json 객체 가져오기
import users from '../jsons/personList.json';

//항목 추가(id는 마지막 값+1)
users.push({id:10, name:"dawd", phone:"010-2342-5325"});

let id = 1;
//특정 id의 user 정보 가져오기
let user = users.find(e => e.id === parseInt(id));
//user 정보 수정
user.name = "홍길동";
user.phone = "010-1111-1111";

id = 2;
//id와 일치하는 인덱스 가져오기
let idx = users.findIndex(e => e.id === parseInt(id));
//해당 인덱스부터 1개의 요소 삭제
users.splice(idx, 1);

console.log(users);