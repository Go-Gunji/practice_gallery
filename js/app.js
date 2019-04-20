// 主人公データの作成
let album = [
    {src: "img/ジョセフジョースター.jpg", msg: "ジョセフ・ジョースター"},
    {src: "img/ジョナサンジョースター.jpg", msg: "ジョナサン・ジョースター"},
    {src: "img/空条承太郎.jpeg", msg: "空条承太郎"},
    {src: "img/東方仗助.jpg", msg: "東方仗助"},
    {src: "img/ジョルノ2.jpeg", msg: "ジョルノ・ジョバァーナ"}    
];

// 最初に表示しておく画像
let mainImage = document.createElement("img");
mainImage.setAttribute("src", album[0].src);
mainImage.setAttribute("alt", album[0].msg);

// メイン画像のコメント
let mainMsg = document.createElement("p");
mainMsg.innerText = mainImage.alt;

// HTMLに反映
let mainFrame = document.querySelector("#gallery .main");
mainFrame.insertBefore(mainImage, null);
mainFrame.insertBefore(mainMsg, null);

// サムネイル画像の表示
let thumbFlame = document.querySelector("#gallery .thumb");
for (let i = 0; i < album.length; i++) {
    let thumbImage = document.createElement("img");
    thumbImage.setAttribute("src", album[i].src);
    thumbImage.setAttribute("alt", album[i].msg);
    thumbFlame.insertBefore(thumbImage, null);
}

// クリックした画像をメインにする
thumbFlame.addEventListener("click", function(event) {
    if (event.target.src) {
        mainImage.src = event.target.src;
        mainImage.innerText = event.target.alt;
    }
});