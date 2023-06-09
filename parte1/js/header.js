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



function changeIcon(url) {
    const iconUser = document.querySelector(".user-button")
    const image = iconUser.querySelector('img')
    image.src = url
}

function activeSearch() {
    const searchBarContainer = document.getElementById("SearchBarContainer");
    if (!searchBarContainer.classList.contains("active")) {
        searchBarContainer.classList.add("active");
    } else {
        searchBarContainer.classList.remove("active");
    }
}