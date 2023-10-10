let slideMaximum, slideMinimum, slideCurrent;
let slider;
function Slide(dir)
{
    let slideTo = slideCurrent + dir;
    slideTo = slideTo<slideMinimum?slideMaximum:slideTo;
    slideTo = slideTo>slideMaximum?slideMinimum:slideTo;

    slideCurrent = slideTo;

    slideTo *= -100 / (slideMaximum+1);

    slider.style = "transform: translateX("+ slideTo + "%);";

}

function loadPage()
{
    slider = document.getElementById("ReferenceSlider");
    slideMinimum = 0;
    slideMaximum = slider.children.length-1;
    slideCurrent = 0;
}