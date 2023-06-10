window.addEventListener('load', function () {
    new Swiper("#mainBannerContainer.swiper-container", {
        slidesPerView: 1,
        spaceBetween: 20,
        loop: true,
        autoplay: {
            delay: 3000,
            disableOnInteraction: false
        },
    });
})
window.addEventListener('load', function () {
    new Swiper("#product-list-1-container-desktop", {
        slidesPerView: 5,
        spaceBetween: 25,
        loop: true,
        navigation: {
            nextEl: "#product-list-1.swiper-button-next",
            prevEl: "#product-list-1.swiper-button-prev",
        },
    });
    new Swiper("#product-list-2-container-desktop", {
        slidesPerView: 5,
        spaceBetween: 25,
        loop: true,
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
    });

});

window.addEventListener('load', function () {
    function handleWindowSizeChange() {
        const windowWidth = window.innerWidth;
        const product1 = document.querySelector("#product-list-1-container-desktop");
        const product2 = document.querySelector("#product-list-2-container-desktop");

        if (windowWidth <= 1024) {
            if (product1 && product2) {
                product1.id = "product-list-1-container-mobile";
                product2.id = "product-list-2-container-mobile";
                new Swiper("#product-list-1-container-mobile", {
                    slidesPerView: 3,
                    spaceBetween: 25,
                    loop: true,
                    navigation: {
                        nextEl: "#product-list-1.swiper-button-next",
                        prevEl: "#product-list-1.swiper-button-prev",
                    },
                });
                new Swiper("#product-list-2-container-mobile", {
                    slidesPerView: 3,
                    spaceBetween: 25,
                    loop: true,
                    navigation: {
                        nextEl: ".swiper-button-next",
                        prevEl: ".swiper-button-prev",
                    },
                });
            }
        } else {
            if (product1 && product2) {
                product1.id = "product-list-1-container-desktop";
                product2.id = "product-list-2-container-desktop";
            }
        }
    }

    window.addEventListener("resize", handleWindowSizeChange);
    handleWindowSizeChange();
})
