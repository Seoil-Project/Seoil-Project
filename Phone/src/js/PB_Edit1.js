import '../css/PB_Edit1.css';
import './Clock.js';

export function image_update(image) {
  const profile = document.getElementsByClassName("profile-pic")[0];
  if (!profile) return;
  profile.querySelector("img").src = image;
}

document.addEventListener('DOMContentLoaded', () => {
  // 이미지 경로 불러오기 (앨범에서 선택한 경우)
  const selectedImage = localStorage.getItem("selectedImage");
  if (selectedImage) {
    image_update(selectedImage);
    localStorage.removeItem("selectedImage");
  }

  // URL에서 id 값 추출
  const urlParams = new URLSearchParams(window.location.search);
  const id = parseInt(urlParams.get("id"));
  if (!id) return;

  // localStorage에서 사용자 정보 가져오기
  const users = JSON.parse(localStorage.getItem("userList"));
  if (!users) return alert("사용자 정보가 없습니다.");
  const user = users.find(u => u.id === id);
  if (!user) return alert("해당 ID의 사용자를 찾을 수 없습니다.");

  // 프로필 이미지 변경
  const profile = document.querySelector(".profile-pic img");
  if (profile) {
    profile.src = `../images/${user.name}.png`;
  }

  // input 요소에 사용자 정보 삽입
  const nameInput = document.getElementById("name");
  const phoneInput = document.getElementById("phone");
  const emailInput = document.getElementById("email");

  if (nameInput) nameInput.value = user.name;
  if (phoneInput) phoneInput.value = user.phone;
  if (emailInput) emailInput.value = `${user.name.replace(/\s+/g, "")}@example.com`;

  // 완료 버튼 클릭 시 localStorage에 저장
  const doneButton = document.querySelector(".title a");
  if (doneButton) {
    doneButton.addEventListener("click", (e) => {
      e.preventDefault();
      if (!nameInput || !phoneInput || !emailInput) return;

      // 확인 창 추가
      const confirmed = confirm("수정하시겠습니까?");
      if (!confirmed) return;

      const updatedUser = {
        id: user.id,
        name: nameInput.value,
        phone: phoneInput.value
      };

      const newUsers = users.map(u => u.id === user.id ? updatedUser : u);
      localStorage.setItem("userList", JSON.stringify(newUsers));
      alert("정보가 저장되었습니다.");
      window.location.href = "PB_Dtail1.html?id=" + user.id;
    });

  }
});
