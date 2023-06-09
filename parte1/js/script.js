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



// function deactivateSearch() {
//     const searchBarContainer = document.getElementById("SearchBarContainer");
//     console.log(searchBarContainer)
//     searchBarContainer.classList.remove("active");

// }
// document?.addEventListener('click', function (event) {
//     const targetElement = event.target;
//     const searchBarContainer = document.getElementById("SearchBarContainer");
//     const searchButton = searchBarContainer.querySelector("button");
//     const input = searchBarContainer.querySelector("input");

//     // Verificar se o clique ocorreu fora do campo e do contêiner de busca
//     if (!(targetElement === searchBarContainer) && !(targetElement === input) && !(targetElement === searchButton)) {
//         console.log('Clique fora do campo');

//         // Desfazer a função
//         deactivateSearch();
//     }
// });
