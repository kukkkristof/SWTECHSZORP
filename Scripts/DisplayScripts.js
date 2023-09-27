var sliderPosition = 0;
var sliderMinimum = 0;
function SlideLeft()
{
    if(sliderPosition != sliderMinimum) {
        sliderPosition += 100;
        document.getElementById("ReferenceSlider").style = "left: " + sliderPosition + "%;re";

    }
}

function SlideRight()
{
    if(sliderPosition-100 != document.getElementById("ReferenceSlider").children.length * -100) {
        sliderPosition -= 100;
        document.getElementById("ReferenceSlider").style = "left: " + sliderPosition + "%;re";
    }
}

function drawChocolateWave()
{
    var canvas = document.getElementById("ChocolateFlow");
    var ctx = canvas.getContext("2d");
    var width = ctx.canvas.width;
    var height = ctx.canvas.height;

    ctx.beginPath();
    ctx.lineWidth = 3;
    ctx.fillStyle = "rgb(255, 222, 173)";

    var x = 0;
    var y = 0;
    var amplitude = 10;
    var frequency = 6;
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