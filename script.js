const button = document.getElementById("themeButton");

button.addEventListener("click", () => {
  document.body.classList.toggle("light-mode");
});

const statusList = [
  "現在サイト改造中...",
  "AIで遊んでます",
  "Minecraftやってます",
  "深夜テンションで開発中",
  "サブPCを酷使しています"
];

const statusText = document.getElementById("statusText");

setInterval(() => {
  const random = Math.floor(Math.random() * statusList.length);
  statusText.textContent = statusList[random];
}, 4000);