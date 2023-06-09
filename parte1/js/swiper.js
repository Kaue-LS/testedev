window.addEventListener('load', function () {
    new Swiper(".swiper-container", {
        // Defina as opções do Swiper aqui
        slidesPerView: 1, // Define o número de slides visíveis por vez (ajuste conforme necessário)
        spaceBetween: 20, // Define o espaçamento entre os slides (ajuste conforme necessário)
        loop: true, // Ativa o loop do slider
        autoplay: {
            delay: 3000, // Defina o intervalo de tempo entre as transições em milissegundos
            disableOnInteraction: false // Permite que o autoplay continue mesmo quando o usuário interage com o Swiper
        },
        navigation: {
            nextEl: ".swiper-button-next", // Elemento para o botão "Próximo"
            prevEl: ".swiper-button-prev", // Elemento para o botão "Anterior"
        },
        pagination: {
            el: ".swiper-pagination", // Elemento para a paginação
            clickable: true, // Permite a interação com a paginação
        },
    });
})
