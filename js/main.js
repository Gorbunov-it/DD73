const nav__burger = document.querySelector(".nav__burger");
const nav__menu = document.querySelector(".nav__menu");
const body__ = document.querySelector("body");

nav__burger.addEventListener("click", () => {
  nav__burger.classList.toggle("active");
  nav__menu.classList.toggle("active");
  body__.classList.toggle("lock");
});
