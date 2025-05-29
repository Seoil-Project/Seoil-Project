import '../css/PB_Insert.css';
import './Clock.js';

document.addEventListener("DOMContentLoaded", () => {
  const nameInput = document.getElementById("name");
  const phoneInput = document.getElementById("hp");
  const emailInput = document.getElementById("email");
  const addButton = document.querySelector(".add-btn span");

  // 이미지 경로 불러오기 (앨범에서 선택한 경우)
  const selectedImage = localStorage.getItem("selectedImage");
  if(selectedImage) {
    const profile = document.getElementsByClassName("profile-pic")[0];
    if(!profile) return;
    profile.querySelector("img").src = `../images/${selectedImage}`;
  }

  addButton.addEventListener("click", (e) => {
    e.preventDefault();

    if (!confirm("저장하시겠습니까?")) return;

    const name = nameInput.value.trim();
    const phone = phoneInput.value.trim();
    const email = emailInput.value.trim();

    if (!name) {
        alert("이름을 입력해주세요.");
        nameInput.focus();
        return;
      }
      
      if (!phone) {
        alert("전화번호를 입력해주세요.");
        phoneInput.focus();
        return;
      }
      
      if (!email) {
        alert("이메일을 입력해주세요.");
        emailInput.focus();
        return;
      }

    const userList = JSON.parse(localStorage.getItem("userList")) || [];

    const newId = userList.length > 0 ? Math.max(...userList.map(u => u.id)) + 1 : 1;

    const newUser = {
      id: newId,
      name,
      phone,
      email,
      image: `../images/${(selectedImage) ? selectedImage : `default_profile.png`}`
    };

    userList.push(newUser);
    
    localStorage.setItem("userList", JSON.stringify(userList));

    alert("새 사용자가 추가되었습니다.");
    window.location.href = "PB_List.html";
  });
  localStorage.removeItem("selectedImage");
});
