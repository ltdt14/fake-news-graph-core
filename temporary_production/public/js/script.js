var timer;
var updateSlider = function () {
    slider = document.getElementById("timestep")
    step = parseInt(slider.value)
    img = document.getElementById("graph-img")
    img.src = "/presentation_graph/step" + step + ".png";
    img.reload();
}
var timerFunc = function () {
    slider = document.getElementById("timestep");
    img = document.getElementById("graph-img");
    step = parseInt(slider.value)
    console.info(step);
    if (step < 34) {
        slider.value = step + 1;
        img.src = "/presentation_graph/step" + (step + 1) + ".png"
        img.reload();
    }
    else
        clearInterval(timer)
}