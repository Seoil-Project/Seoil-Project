import '../css/Album.css';
import './Clock.js';
import './gallery_load.js';
import { load } from './gallery_load.js';

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

    //각 메뉴 클릭 시 해당하는 디렉토리 내의 이미지들로 갱신
    const menuItem = menuBox.querySelectorAll(".menu-item");
    menuItem.forEach((element, i) => {
        element.querySelector("a").href = "javascript:void(0)";        //a 태그 빈 경로
        element.addEventListener("click", () => {
            load(i);
            if(menuBox.style.display === "block") menuBox.style.display = "none";
        });
    });
})