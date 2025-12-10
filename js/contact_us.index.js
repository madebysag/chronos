const hamburger = document.querySelector("header .hamburger > img")
const closeHamburger = document.querySelector("nav .close > img")

const navElement = document.querySelector("nav.nav-mobile")
const navLinks = document.querySelectorAll("nav > div > div > a")


const menuBtn = [hamburger, closeHamburger, ...navLinks]
menuBtn.forEach(element => {
    element.addEventListener("click", e => {
        navElement.classList.toggle("active")
    })
});