const hamburgerMenu = document.querySelector("#hamburgerMenu");
const menuItems = document.querySelectorAll(".menuItem");
const hamburger = document.querySelector("#hamburger");
const closeIcon = document.querySelector("#closeIcon");
const menuIcon = document.querySelector("#menuIcon");

function toggleMenu() {
    if (hamburgerMenu.classList.contains("showMenu")) {
        hamburgerMenu.classList.remove("showMenu");
        hamburgerMenu.classList.add("hideMenu");
        closeIcon.style.display = "none";
        menuIcon.style.display = "block";
    } else {
        hamburgerMenu.classList.add("showMenu");
        hamburgerMenu.classList.remove("hideMenu");
        closeIcon.style.display = "block";
        menuIcon.style.display = "none";
    }
}

hamburger.addEventListener("click", toggleMenu);

menuItems.forEach(
    function(menuItem) {
        menuItem.addEventListener("click", toggleMenu);
    }
)