import '../css/PB_Dtail1.css';
import './Clock.js';

document.addEventListener('DOMContentLoaded', () => {
    const toggleBtn = document.getElementById("menu-toggle");
    const menuBox = document.getElementById("dropdown-menu");

    toggleBtn.addEventListener("click", () => {
        const isVisible = menuBox.style.display === "block";
        menuBox.style.display = isVisible ? "none" : "block";
    });

    document.addEventListener("click", (e) => {
        if (!toggleBtn.contains(e.target) && !menuBox.contains(e.target)) {
            menuBox.style.display = "none";
        }
    });

    const urlParams = new URLSearchParams(window.location.search);
    const id = parseInt(urlParams.get("id"));
    if (!id) return;

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
    console.log(userList);

    // 프로필 이미지
    const profile = document.querySelector(".profile-pic img");
    profile.src = `../images/${user.image}`;

    // 텍스트 정보
    document.querySelector(".user-name p").textContent = user.name;
    document.querySelector(".user-hp p").textContent = user.phone;
    document.querySelector(".profile-email p").textContent = user.email;

    // 메뉴 링크 설정
    const editLink = menuBox.querySelector('a[data-type="edit"]');
    if (editLink) editLink.href = `./PB_Edit1.html?id=${id}`;

    const deleteBtn = menuBox.querySelector('a[data-type="delete"]');
    if (deleteBtn) {
        deleteBtn.addEventListener('click', (e) => {
            e.preventDefault();
            if (!confirm("정말로 삭제하시겠습니까?")) return;

            const updatedList = userList.filter(u => u.id !== id);
            localStorage.setItem("userList", JSON.stringify(updatedList));
            alert("삭제가 완료되었습니다.");
            window.location.href = "./PB_List.html";
        });
    }

    // 전화 버튼 기능
    const callBtn = document.getElementById("call-button");
    if (callBtn) {
        callBtn.addEventListener("click", () => {
            window.location.href = `PB_Call.html?id=${id}`;
        });
    }
});
