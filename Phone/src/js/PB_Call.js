import '../css/PB_Call.css';
import './Clock.js';
import './Timer.js';

document.addEventListener("DOMContentLoaded", () => {
    // URL에서 id 추출
    const urlParams = new URLSearchParams(window.location.search);
    const id = parseInt(urlParams.get("id"));
    if (!id) return;

    // localStorage에서 userList 가져오기
    const userList = JSON.parse(localStorage.getItem("userList"));
    if (!userList) return alert("사용자 정보가 없습니다.");

    // 해당 사용자 찾기
    const user = userList.find(u => u.id === id);
    if (!user) return alert("해당 사용자를 찾을 수 없습니다.");

    // 이름 출력
    const nameElement = document.querySelector("nav h1");
    if (nameElement) nameElement.textContent = user.name;

    // 이미지 출력
    const imgElement = document.querySelector("nav img");
    if (imgElement) {
        //로딩중
        imgElement.classList.add("loading");
        const img = new Image();
        img.src = `../images/${user.image}`;
        //전부 로드되면 표시
        img.onload = () => {
            imgElement.src = `../images/${user.image}`;
            imgElement.classList.remove("loading");
        };
    }

    // 종료 버튼 클릭 → 상세페이지 이동
    const endButton = document.querySelector("main > img[alt='통화종료']");
    if (endButton) {
        endButton.addEventListener("click", () => {
            window.location.href = `PB_Dtail1.html?id=${id}`;
        });
    }
});