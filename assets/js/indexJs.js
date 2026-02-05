// # TODO
const coverBg = document.querySelector(".cover");

window.addEventListener("scroll", () => {
const scrolled = window.scrollY;
coverBg.style.setProperty("--bg-y", scrolled * 0.5 + "px");
});