document.addEventListener('DOMContentLoaded', () => {
    const carousels = document.querySelectorAll('.carousel');

    carousels.forEach(carousel => {
        const inner = carousel.querySelector('.carousel-inner');
        const prevButton = carousel.querySelector('.prev');
        const nextButton = carousel.querySelector('.next');

        let offset = 0;
        let slideWidth = inner.querySelector('img').clientWidth;
        const totalSlides = inner.children.length;
        const visibleSlidesDesktop = 4;

        const updateSlideWidth = () => {
            slideWidth = inner.querySelector('img').clientWidth;
        };

        const updateVisibleSlides = () => {
            return window.innerWidth <= 768 ? 1 : visibleSlidesDesktop;
        };

        nextButton.addEventListener('click', () => {
            if (offset > -(slideWidth * (totalSlides - updateVisibleSlides()))) {
                offset -= slideWidth;
                inner.style.transform = `translateX(${offset}px)`;
            }
        });

        prevButton.addEventListener('click', () => {
            if (offset < 0) {
                offset += slideWidth;
                inner.style.transform = `translateX(${offset}px)`;
            }
        });

        window.addEventListener('resize', () => {
            updateSlideWidth();
            offset = 0;
            inner.style.transform = `translateX(${offset}px)`;
        });
    });
});