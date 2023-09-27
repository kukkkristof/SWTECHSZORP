var sliderPosition = 0;
var sliderMinimum = 0;
var sliderMaximum;
function SlideLeft()
{
    if(sliderPosition != sliderMinimum) {
        sliderPosition += 100;
    }
    else
    {
        sliderPosition = document.getElementById("ReferenceSlider").children.length * -100 +100;
    }
    document.getElementById("ReferenceSlider").style.left = sliderPosition + "%";
    document.getElementById("ReferenceSlider").style.filter = "blur(0.2vw)";
    setTimeout(()=>{
        document.getElementById("ReferenceSlider").style.filter = "blur(0vw)"
    }, 500);
}

function SlideRight()
{
    if(sliderPosition-100 != sliderMaximum) {
        sliderPosition -= 100;
    }
    else
    {
        sliderPosition = 0;
    }
    document.getElementById("ReferenceSlider").style.left = sliderPosition + "%";
    document.getElementById("ReferenceSlider").style.filter = "blur(0.2vw)";
    setTimeout(()=>{
        document.getElementById("ReferenceSlider").style.filter = "blur(0vw)"
    }, 500);
}

function drawChocolateWave()
{
    sliderMaximum = document.getElementById("ReferenceSlider").children.length * -100;
    var canvas = document.getElementById("ChocolateFlow");
    var ctx = canvas.getContext("2d");
    var width = ctx.canvas.width;
    var height = ctx.canvas.height;

    ctx.beginPath();
    ctx.lineWidth = 3;
    ctx.fillStyle = "rgb(255, 222, 173)";

    var x = 0;
    var y = 0;
    var amplitude = 40;
    var frequency = 10;
    ctx.moveTo(x, y);
    while (x < width) {
        y = height/2 + amplitude * Math.sin(x/frequency);
        ctx.lineTo(x, y);
        x = x + 1;
    }
    ctx.lineTo(width, 0)
    ctx.fill();
    ctx.restore();
}