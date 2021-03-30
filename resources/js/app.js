import 'slick-carousel'
import 'slick-carousel/slick/slick.css'

const topCarousel = () => {
    const baseOptions = {
        infinite: true,
        slidesToScroll: 1,
        autoplay: true,
        arrows: false,
    }
    const options = {
        ...baseOptions,
        slidesToShow: 3,
        responsive: [{
                breakpoint: 1300,
                settings: {
                    ...baseOptions,
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 800,
                settings: {
                    ...baseOptions,
                    slidesToShow: 1,
                }
            }
        ]
    }
    $('.top-carousel').slick(options);
    const rightArrow = () => $('.top-carousel').slick('slickNext');
    const leftArrow = () => $('.top-carousel').slick('slickPrev');
    $('.arrow-right').on('click', rightArrow);
    $('.arrow-left').on('click', leftArrow);
};
const middleCarousel = () => {
    const baseOptions = {
        infinite: true,
        autoplay: false,
        arrows: false,
        speed: 2000,
    }
    const options = {
        ...baseOptions,
        slidesToShow: 6,
        slidesToScroll: 2,
        responsive: [{
                breakpoint: 1300,
                settings: {
                    ...baseOptions,
                    slidesToShow: 3,
                    slidesToScroll: 3,
                }
            },
            {
                breakpoint: 1024,
                settings: {
                    ...baseOptions,
                    slidesToShow: 2,
                    slidesToScroll: 2,
                }
            },
            {
                breakpoint: 640,
                settings: {
                    ...baseOptions,
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            }
        ]
    }
    $('.middle-carousel').slick(options);
    const rightArrow = () => $('.middle-carousel').slick('slickNext');
    const leftArrow = () => $('.middle-carousel').slick('slickPrev');
    $('.middle-arrow-right').on('click', rightArrow);
    $('.middle-arrow-left').on('click', leftArrow);
}

$(topCarousel);
$(middleCarousel);
$('.hamburger').on('click', () => {
    $('.menu-overlay').removeClass('hidden');
    $('.sidebar').addClass('-translate-x-72');
});
$('.menu-overlay').on('click', () => {
    $('.menu-overlay').addClass('hidden');
    $('.sidebar').removeClass('-translate-x-72');
});
