var sliderButtonPrev = document.querySelector(".prev-slider-btn");
var sliderButtonNext = document.querySelector(".next-slider-btn");
var activeSlider = document.querySelector(".active-slider");
var disactiveSlider = document.querySelector(".disactive-slider");


document.documentElement
    .classList.replace('no-js', 'js');

sliderButtonPrev.addEventListener("click", function (evt) {
    evt.preventDefault();   
        disactiveSlider.classList.add("active-slider");
    disactiveSlider.classList.remove("disactive-slider");
    activeSlider.classList.add("disactive-slider");
    activeSlider.classList.remove("active-slider");
});


sliderButtonNext.addEventListener("click", function (evt) {
    evt.preventDefault();   
        disactiveSlider.classList.add("active-slider");
    disactiveSlider.classList.remove("disactive-slider");
    activeSlider.classList.add("disactive-slider");
    activeSlider.classList.remove("active-slider");
});

