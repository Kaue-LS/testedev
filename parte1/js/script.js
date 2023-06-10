function openDropdown() {
    const menu = document.querySelector(".footer-options.mobile");
    if (!menu.classList.contains("open")) {
        menu.classList.remove("closed");
        menu.classList.add("open");
    } else {
        menu.classList.remove("open");
        menu.classList.add("closed");
    }
    console.log(menu.className)
}

