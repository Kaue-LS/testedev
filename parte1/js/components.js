// Função para carregar um arquivo HTML e atribuir à div correspondente
function loadComponent(url, targetId) {
    fetch(url)
        .then(response => response.text())
        .then(html => {
            document.getElementById(targetId).innerHTML = html;
        })
        .catch(error => console.error('Erro ao carregar o componente:', error));
}

loadComponent('../header.html', 'header');
loadComponent('../footer.html', 'footer');
loadComponent('../newsletter.html', 'newsletter');
loadComponent("../talkToUs.html", "talkToUs")