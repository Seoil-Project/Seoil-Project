import '../css/PB_Edit1.css';
import users from '../jsons/personList.json';
import './Clock.js';

document.addEventListener('DOMContentLoaded', () => {
    let id = location.href.split('?')[1].split('=')[1];

    let profile = document.getElementsByClassName("profile-pic")[0];
    let user = users.find(e => e.id === parseInt(id));
    profile.querySelector("img").src = `../images/${user.name}.png`;
    let p = document.getElementsByClassName("info")[0].querySelectorAll("p");
    let idx = 0;
    [user.name, user.phone, `${user.name.replace(/(\s*)/g, "")}@example.com`].forEach((ele) => {
        p[idx++].textContent = ele;
    });
});