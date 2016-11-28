var openMenuIcon = document.getElementById("nav-menu-icon");
var closeMenuIcon = document.getElementById("close-menu");
var navList = document.getElementById("nav-list");

openMenuIcon.addEventListener("click", openMenu);
closeMenuIcon.addEventListener("click", closeMenu);

function openMenu() {
    navList.style.height = "100vh";
}

function closeMenu() {
    navList.style.height = "0";
}
