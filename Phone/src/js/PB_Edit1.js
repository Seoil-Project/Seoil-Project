import '../css/PB_Edit1.css';
import users from '../jsons/personList.json';
import './Clock.js';

export function image_update(image) {
    const profile = document.getElementsByClassName("profile-pic")[0];
    if (!profile) return;
    profile.querySelector("img").src = image;
}
document.addEventListener('DOMContentLoaded', () => {
    //image 경로 전달 받기
    const selectedImage = localStorage.getItem("selectedImage");
    if (selectedImage) {
        image_update(selectedImage);
        localStorage.removeItem("selectedImage");
        return;
    }

    //url id값 찾기
    let url = location.href.split('?');
    if(url.length <= 1) return;
    let id = url[1].split('=')[1];

    const profile = document.getElementsByClassName("profile-pic")[0];
    let user = users.find(e => e.id === parseInt(id));
    profile.querySelector("img").src = `../images/${user.name}.png`;

    let p = document.getElementsByClassName("info")[0].querySelectorAll("p");
    let idx = 0;
    [user.name, user.phone, `${user.name.replace(/(\s*)/g, "")}@example.com`].forEach((ele) => {
        p[idx++].textContent = ele;
    });
});