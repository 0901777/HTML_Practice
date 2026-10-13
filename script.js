// 1.頁面主題切換公能 (日間／深色模式)
function toggleTheme() {
    const body = document.body;
    const themeBtn = document.getElementById("theme-btn");

    if (body.classList.contains("dark-mode")) {
    body.classList.remove("dark-mode");
    themeBtn.innerHTML = "🌙 切換深⾊模式";
    } else {
        body.classList.add("dark-mode");
        themeBtn.innerHTML = "☀ 切換亮⾊模式";
    }
}