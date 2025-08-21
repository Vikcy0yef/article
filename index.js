const btn = document.querySelector(".btn");
const container = document.querySelector(".container");
const shareMenu = document.querySelector(".share-menu")
btn.addEventListener("click", clickBtn);
function clickBtn() {
    container.classList.toggle("is-open");
    if (container.classList.contains("is-open")) {
        btn.setAttribute("aria-expanded", "true");
        shareMenu.setAttribute("aria-hidden", "false")
    } else {
        btn.setAttribute("aria-expanded", "false");
        shareMenu.setAttribute("aria-hidden", "true")
   }
}