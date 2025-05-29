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
    let a = document.createElement("a");
    let profile = document.createElement("img");
    profile.src = "../images/photo_profile.png";
    profile.style.boxSizing = "border-box";
    profile.style.padding = "20px 20px";
    a.appendChild(profile);
    div.appendChild(a);
    //모든 이미지 로드
    if(num == 0) {
        let count = 0;
        galleries.forEach((images) => {
            images.keys().forEach((fileName) => {
                let a = document.createElement("a");
                let img = document.createElement("img");
                a.href = "javascript:void(0)";
                img.src = images(fileName);
                img.addEventListener("click", () => {
                    localStorage.setItem("selectedImage", fileName.substring(2));    //이미지 경로 임시 저장
                    history.back();
                });
                a.appendChild(img);
                div.appendChild(a);
                count++;
            });
        });
        document.getElementById("menu-toggle").querySelector("span").textContent = `전체보기 ${count}`;
    }
    //특정 디렉토리의 이미지 로드
    else {
        let count = 0;
        galleries[num-1].keys().forEach((fileName) => {
            let a = document.createElement("a");
            let img = document.createElement("img");
            a.href = "javascript:void(0)";
            img.src = galleries[num-1](fileName);
            a.appendChild(img);
            div.appendChild(a);
            count++;
        });
        document.getElementById("menu-toggle").querySelector("span").textContent = `${dir[num-1]} ${count}`;
    }
}
document.addEventListener("DOMContentLoaded", () => {
    load(0);
});