const btn = document.querySelector(".btn");
const container = document.querySelector(".container");
const shareMenu = document.querySelector(".share-menu")
if (btn) {
    btn.addEventListener("click", clickBtn);
} else {
   console.warn("Button element not found");
}

function clickBtn() {
    container.classList.toggle("is-open");
    const isExpanded = true;
    const isHidden = !isExpanded;
    if (container.classList.contains("is-open")) {
        btn.setAttribute("aria-expanded", isExpanded.toString());
        shareMenu.setAttribute("aria-hidden", isHidden.toString())
    } else {
        btn.setAttribute("aria-expanded", isExpanded.toString());
        shareMenu.setAttribute("aria-hidden", isHidden.toString())
   }
}