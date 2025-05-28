import '../css/PB_Dtail1.css';
import './Clock.js';

document.addEventListener('DOMContentLoaded', () => {
    const toggleBtn = document.getElementById("menu-toggle");
    const menuBox = document.getElementById("menu-box");
    
    toggleBtn.addEventListener("click", () => {
        menuBox.style.display = (menuBox.style.display === "block") ? "none" : "block";
    });

    // 메뉴 바깥 클릭 시 닫기
    document.addEventListener("click", (e) => {
        if (!toggleBtn.contains(e.target) && !menuBox.contains(e.target)) {
            menuBox.style.display = "none";
        }
    });

    // URL에서 id 값 추출
    const urlParams = new URLSearchParams(window.location.search);
    const id = parseInt(urlParams.get("id"));
    if (!id) return;

    // localStorage에서 userList 불러오기
    const userList = JSON.parse(localStorage.getItem("userList"));
    if (!userList) {
        alert("사용자 정보가 없습니다.");
        return;
    }

    const user = userList.find(e => e.id === id);
    if (!user) {
        alert("해당 ID의 사용자를 찾을 수 없습니다.");
        return;
    }

    // 메뉴 링크에 id값 넣기 (수정은 링크 유지)
    menuBox.querySelector('a[data-type="edit"]').href = `./PB_Edit1.html?id=${id}`;

    // 삭제 기능: 클릭 이벤트로 처리
    const deleteBtn = menuBox.querySelector('a[data-type="delete"]');
    deleteBtn.addEventListener('click', (e) => {
        e.preventDefault(); // 링크 동작 막기
        const confirmed = confirm("정말로 삭제하시겠습니까?");
        if (!confirmed) return;

        // 삭제 진행
        const updatedList = userList.filter(user => user.id !== id);
        localStorage.setItem("userList", JSON.stringify(updatedList));
        alert("삭제가 완료되었습니다.");
        window.location.href = "./PB_List.html"; // 목록 페이지로 이동
    });

    // 프로필 이미지 및 정보 표시
    const profile = document.querySelector(".profile-pic img");
    profile.src = `../images/${user.image}`;
    
    const infoTexts = document.querySelectorAll(".info p");
    const email = `${user.name.replace(/\s+/g, "")}@example.com`;

    [user.name, user.phone, email].forEach((text, i) => {
        if (infoTexts[i]) infoTexts[i].textContent = text;
    });
    
    const callBtn = document.getElementById("call-button");
    if (callBtn) {
      callBtn.addEventListener("click", () => {
        window.location.href = `PB_Call.html?id=${id}`;
      });
    }
});
