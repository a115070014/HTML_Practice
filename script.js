/** 
 * 世新大學 網頁設計講義 第五周實做範例
 * script.js - JavaScript 網頁凍袋互動邏輯
 * /
 
// 1. ⾴⾯主題切換功能 (⽇間/深⾊模式)
function toggleTheme() {
const body = document.body;
const themeBtn = document.getElementById("theme-btn");
// 判斷當前 body 是否帶有 dark-mode class
if (body.classList.contains("dark-mode")) {
body.classList.remove("dark-mode");
themeBtn.innerHTML = "🌙 切換深⾊模式";
} else {
body.classList.add("dark-mode");
themeBtn.innerHTML = "☀ 切換亮⾊模式";
}
}
// 2. 智慧問候語功能 (結合時間判斷與隨機挑選)
function showSmartGreeting() {
const msgElement = document.getElementById("welcome-ms
g");
const currentHour = new Date().getHours();
let timeGreeting = "";
// 依據時間判斷時段
if (currentHour >= 5 && currentHour < 12) {
timeGreeting = "早安！";
} else if (currentHour >= 12 && currentHour < 18) {
timeGreeting = "午安！";
} else {
timeGreeting = "晚上好！";
}
const quotes = [
"程式碼改變世界，今天也是充實的⼀天！",
第五週：利⽤ JavaScript 產⽣動態效果
第 19 ⾴ / 共 28 ⾴
"遇到 Bug 不要慌，F12 是你的好朋友！",
"⼀步⼀腳印，網⾴設計其實超有成就感！",
"保持好奇⼼，持續打造專屬你的數位作品集！"
];
const randomQuote = quotes[Math.floor(Math.random() * q
uotes.length)];
// 更新網⾴上的⽂字內容
msgElement.innerHTML = `<strong>${timeGreeting}</strong
> ${randomQuote}`;
msgElement.style.color = "#2980b9";
}