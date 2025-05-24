import '../css/PB_Dtail1.css';
import users from '../jsons/personList.json';

document.addEventListener('DOMContentLoaded', () => {
    const toggleBtn = document.getElementById("menu-toggle");
    const menuBox = document.getElementById("menu-box");
    
    toggleBtn.addEventListener("click", () => {
        if (menuBox.style.display === "block") {
            menuBox.style.display = "none";
        } else {
            menuBox.style.display = "block";
        }
    });
    
    // 메뉴 바깥 클릭 시 닫기
    document.addEventListener("click", (e) => {
        if (!toggleBtn.contains(e.target) && !menuBox.contains(e.target)) {
            menuBox.style.display = "none";
        }
    });

    //id에 맞는 정보로 json 참조하여 변경
    let id = location.href.split('?')[1].split('=')[1];
    
    //id값 그대로 PB_Edit에 전달
    let m = menuBox.getElementsByClassName("menu-item")[0].querySelector("a").href = `./PB_Edit1.html?id=${id}`;
    console.log(m);
    //delte 구현 시 수정
    //menuBox.getElementsByClassName("menu-item")[1].querySelector("a").href = `./PB_Edit1.html?id=${id}`;
    
    let profile = document.getElementsByClassName("profile-pic")[0];
    //전달 받은 id와 일치하는 유저 정보
    let user = users.find(e => e.id === parseInt(id));
    profile.querySelector("img").src = `../images/${user.name}.png`;
    let p = document.getElementsByClassName("info")[0].querySelectorAll("p");
    let idx = 0;
    [user.name, user.phone, `${user.name.replace(/(\s*)/g, "")}@example.com`].forEach((ele) => {
        p[idx++].textContent = ele;
    });
});