const mobileMenu = document.querySelector(".mobile-menu");

document.getElementById("mobile-button").addEventListener("click", () => {
    mobileMenu.setAttribute("aria-hidden", false);
});

document.getElementById("close-button").addEventListener("click", () => {
    mobileMenu.setAttribute("aria-hidden", true);
});