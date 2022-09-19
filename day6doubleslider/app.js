const sliderContainer = document.querySelector(".slider-container");
const slideRight = document.querySelector(".right-slide");
const slideLeft = document.querySelector(".left-slide");
const upButton = document.querySelector(".up-button");
const downButton = document.querySelector(".down-button");
// Getting the number of all slides
const slidesLength = slideRight.querySelectorAll("div").length;

// Setting the first slide index as zero
let activeSlideIndex = 0;

slideLeft.style.top = `-${(slidesLength - 1) * 100}vh`;
// adding event listener to up and down button on click event
// with each click a function will be call with different arguments

upButton.addEventListener("click", () => changeSlide("up"));
downButton.addEventListener("click", () => changeSlide("down"));

const changeSlide = (direction) => {
    const sliderHeight = sliderContainer.clientHeight;
    // if direction is up then we will increase the index
    if (direction === "up") {
        activeSlideIndex++;
        // if the index is greater than the number of slides then we will set the index to zero
        if (activeSlideIndex > slidesLength - 1) {
            activeSlideIndex = 0;
        }
    } else if (direction === "down") {
        // if direction is down then we will decrease the index
        activeSlideIndex--;
        // if the index is less than zero then we will set the index to the last slide
        if (activeSlideIndex < 0) {
            activeSlideIndex = slidesLength - 1;
        }
    }

    // setting the position of the slides
    // here negative values is to take the slider up
    // and positive values is to take the slider down
    slideRight.style.transform = `translateY(-${
        activeSlideIndex * sliderHeight
    }px)`;
    slideLeft.style.transform = `translateY(${
        activeSlideIndex * sliderHeight
    }px)`;
};