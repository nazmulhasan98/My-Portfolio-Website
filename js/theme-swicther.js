// Theme switcher logic
const themeIcon = document.querySelector('.t-icon');
const themeCss = document.querySelectorAll('.theme-css');

themeIcon.addEventListener("click", () => {
    document.querySelector('.theme-swicther').classList.toggle("active");
});

function themeChange(color) {
    localStorage.setItem("kerriTheme", color);
    changeColor();
}

function changeColor() {
    themeCss.forEach(style => {
        if (localStorage.getItem("kerriTheme") === style.getAttribute("title")) {
            style.removeAttribute("disabled");
        } else {
            style.setAttribute("disabled", "true");
        }
    });
}

if (localStorage.getItem("kerriTheme") !== "") {
    changeColor();
}

// Remove theme switcher when scrolling
window.addEventListener("scroll", () => {
    document.querySelector('.theme-swicther').classList.remove("active");
});
