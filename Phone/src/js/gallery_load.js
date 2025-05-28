//** 동적 경로 설정 불가능! **
const galleries = [
    require.context('../images/gallery/Download', false, /\.(png|jpe?g|gif|webp)$/),
    require.context('../images/gallery/KakaoTalk', false, /\.(png|jpe?g|gif|webp)$/),
    require.context('../images/gallery/Naver', false, /\.(png|jpe?g|gif|webp)$/),
    require.context('../images/gallery/DCIM', false, /\.(png|jpe?g|gif|webp)$/)
];
const dir = ["Download", "KakaoTalk", "Naver", "DCIM"];
export function load(num) {
    const div = document.getElementById("images");
    div.innerHTML = "";
    let profile = document.createElement("img");
    profile.src = "../images/photo_profile.png";
    div.appendChild(profile);
    //모든 이미지 로드
    if(num == 0) {
        let count = 0;
        galleries.forEach((images) => {
            images.keys().forEach((fileName) => {
                let img = document.createElement("img");
                img.src = images(fileName);
                img.addEventListener("click", () => {
                    localStorage.setItem("selectedImage", images(fileName));    //이미지 경로 임시 저장
                    history.back();
                });
                div.appendChild(img);
                count++;
            });
        });
        document.getElementById("menu-toggle").querySelector("span").textContent = `전체보기 ${count}`;
    }
    //특정 디렉토리의 이미지 로드
    else {
        let count = 0;
        galleries[num-1].keys().forEach((fileName) => {
            let img = document.createElement("img");
            img.src = galleries[num-1](fileName);
            div.appendChild(img);
            count++;
        });
        document.getElementById("menu-toggle").querySelector("span").textContent = `${dir[num-1]} ${count}`;
    }
}
document.addEventListener("DOMContentLoaded", () => {
    load(0);
});