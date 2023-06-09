window.addEventListener('load', function () {
    window.addEventListener('scroll', function () {
        const slides = document.querySelectorAll('.banner');
        const scrollPosition = window.scrollY;
        slides.forEach((slide) => {
            const slideText = slide.querySelector(".bannerText");
            if (scrollPosition > 200) {
                slideText.classList.add('visible');
            } else {
                slideText.classList.remove('visible');
            }
        });
    });
});