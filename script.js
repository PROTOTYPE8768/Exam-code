const burger = document.querySelector(".burger")
const HeaderNav = document.querySelector(".header__nav__mobile")
burger.addEventListener("click", () => {
    burger.classList.toggle("open");
    HeaderNav.classList.toggle("open");
});