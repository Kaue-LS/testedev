function loadComponent(url, targetId) {
    fetch(url)
        .then(response => response.text())
        .then(html => {
            document.getElementById(targetId).innerHTML = html;

        })
        .catch(error => console.error('Erro ao carregar o componente:', error));
}

loadComponent('../header.html', 'header');
loadComponent("../banner.html", "mainBanner");
loadComponent("../productList.html", "product-list");
loadComponent("../video.html", "video");
loadComponent("../collection.html", "collection");
loadComponent("../productList-2.html", "product-list-2");
loadComponent('../newsletter.html', 'newsletter');
loadComponent('../footer.html', 'footer');
loadComponent("../talkToUs.html", "talkToUs");
