import '../css/PB_List.css';
import users from '../jsons/personList.json'; // JSON 파일 import
import './Clock.js';
import './preload.js';

//image와 email정보 자동 추가
users.forEach(user => {
    user["image"] = `${user.name.replace(" ", "")}.png`;
    user["email"] = `${user.name}@example.com`;
});
document.addEventListener('DOMContentLoaded', () => {
    // localStorage에 userList가 없으면 JSON 데이터로 초기화
    if (!localStorage.getItem("userList")) {
        localStorage.setItem("userList", JSON.stringify(users));
    }
    // localStorage에서 사용자 리스트 가져오기
    const userList = JSON.parse(localStorage.getItem("userList"));

    let div = document.getElementById("menu");
    userList.forEach(obj => {
        let infor = document.createElement("div");
        let a = document.createElement("a");
        let img = document.createElement("img");
        let name = document.createElement("span");

        infor.classList.add("infor");
        a.href = `./PB_Dtail1.html?id=${obj.id}`;
        img.src = `../images/${obj.image}`
        img.alt = obj.name;
        img.classList.add("profile");
        name.textContent = obj.name;

        a.appendChild(img);
        infor.appendChild(a);
        infor.appendChild(name);
        div.appendChild(infor);
        div.appendChild(document.createElement("hr"));
    });
});
