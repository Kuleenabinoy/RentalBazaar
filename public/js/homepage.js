// JS for the Homepage.HTML 
const sliders = document.querySelector(".productCarousel");
var scrollOnClick;
var imgPadding = 20;

var scrollAmount = 0;

function sliderScrollLeft() {
    sliders.scrollTo({
        top: 0,
        left: (scrollAmount -= scrollOnClick),
        behavior: "smooth",
    });
    if (scrollAmount < 0) {
        scrollAmount = 0;
    }
}

function sliderScrollRight() {
    if (scrollAmount <= sliders.scrollWidth - sliders.clientWidth) {
        sliders.scrollTo({
            top: 0,
            left: (scrollAmount += scrollOnClick),
            behavior: "smooth",
        });
    }
}

