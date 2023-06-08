function openMenuMobile() {
    const sideBar = document.querySelector(".header-sideBar-mobile");
    sideBar.classList.remove("closed");
    sideBar.classList.add("open");
}
function closeMenuMobile() {
    const sideBar = document.querySelector(".header-sideBar-mobile");
    sideBar.classList.remove("open");
    sideBar.classList.add("closed");
}

function openDropdown() {
    const menu = document.querySelector(".footer-options.mobile");
    if (!menu.classList.contains("open")) {
        menu.classList.remove("closed");
        menu.classList.add("open");
    } else {
        menu.classList.remove("open");
        menu.classList.add("closed");
    }
}