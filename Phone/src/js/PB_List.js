import '../css/PB_List.css';
import user from '../jsons/personList.json';

document.addEventListener('DOMContentLoaded', () => {
    let div = document.getElementById("menu");
    user.forEach(obj => {
        let query = `
        <div class="infor">
            <a href="${"#"}"><img src="../images/${obj.image}" alt="${obj.image}" class="profile"></a>
            <ul>
                <li>${obj.name}</li>
                <li>${obj.phone}</li>
            </ul>
        </div>
        <hr>`
        div.innerHTML += query;
    });
});