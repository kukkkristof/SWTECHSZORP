let slideMaximum, slideMinimum, slideCurrent;
let slider;
function Slide(dir)
{
    let slideTo = slideCurrent + dir;
    slideTo = slideTo<slideMinimum?slideMaximum:slideTo;
    slideTo = slideTo>slideMaximum?slideMinimum:slideTo;

    slideCurrent = slideTo;

    slideTo *= -100 / (slideMaximum+1);

    slider.style.transform = "translateX("+ slideTo + "%)";

}

function SlideTo(slide)
{
    slideCurrent = slide;
    let slideTo = slide * (-100 / (slideMaximum+1));
    slider.style.transform = "translateX("+ slideTo + "%)";
}

slider = document.getElementById("Slider");

slideMinimum = 0;
slideMaximum = slider.children.length-1;
slider.style.width = (slideMaximum+1) * 100 + "%";
slideCurrent = 0;


const slideshow = document.querySelector(".slideshow");
const members = document.querySelectorAll(".member");

for (var i = 0; i < 4; i++) {
    members.forEach((member) => {
        slideshow.appendChild(member.cloneNode(true));
    });
}