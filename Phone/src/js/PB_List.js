import '../css/PB_List.css';
import user from '../jsons/personList.json'; // JSON 파일 import
import './Clock.js';

document.addEventListener('DOMContentLoaded', () => {
    // localStorage에 userList가 없으면 JSON 데이터로 초기화
    if (!localStorage.getItem("userList")) {
        localStorage.setItem("userList", JSON.stringify(user));
    }

    // localStorage에서 사용자 리스트 가져오기
    const userList = JSON.parse(localStorage.getItem("userList"));

    let div = document.getElementById("menu");

    userList.forEach(obj => {
        let query = `
        <div class="infor">
            <a href="./PB_Dtail1.html?id=${obj.id}">
                <img src="../images/${obj.name}.png" alt="${obj.name}" class="profile">
            </a>
            <ul>
                <li>${obj.name}</li>
                <li>${obj.phone}</li>
            </ul>
        </div>
        <hr>`;
        div.innerHTML += query;
    });
});
