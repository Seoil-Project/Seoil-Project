import '../css/PB_Edit1.css';
import './Clock.js';

document.addEventListener('DOMContentLoaded', () => {

  // URL에서 id 값 추출
  const urlParams = new URLSearchParams(window.location.search);
  const id = parseInt(urlParams.get("id"));
  if (!id) return;

  // localStorage에서 사용자 정보 가져오기
  const users = JSON.parse(localStorage.getItem("userList"));
  if (!users) return alert("사용자 정보가 없습니다.");
  const user = users.find(u => u.id === id);
  if (!user) return alert("해당 ID의 사용자를 찾을 수 없습니다.");
  
  // 이미지 경로 불러오기 (앨범에서 선택한 경우)
  const selectedImage = localStorage.getItem("selectedImage");
  const profile = document.querySelector(".profile-pic img");
  profile.classList.add("loading");

  const img = new Image();
  img.src = `../images/${selectedImage ? selectedImage : user.image}`;
  //전부 로드되면 표시
  img.onload = () => {
      profile.src = img.src;
      profile.classList.remove("loading");
  };
  // input 요소에 사용자 정보 삽입
  const nameInput = document.getElementById("name");
  const phoneInput = document.getElementById("hp");
  const emailInput = document.getElementById("email");

  if (nameInput) nameInput.value = user.name;
  if (phoneInput) phoneInput.value = user.phone;
  if (emailInput) emailInput.value = user.email;

  // 완료 버튼 클릭 시 localStorage에 저장
  const doneButton = document.querySelector(".add-btn a");
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
        phone: phoneInput.value,
        email: emailInput.value,
        image: ((selectedImage) ? selectedImage : user.image)
      };

      const newUsers = users.map(u => u.id === user.id ? updatedUser : u);
      localStorage.setItem("userList", JSON.stringify(newUsers));
      alert("정보가 저장되었습니다.");
      window.location.href = "PB_Dtail1.html?id=" + user.id;
    });
  }
  localStorage.removeItem("selectedImage");
});
