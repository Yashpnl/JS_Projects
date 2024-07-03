let container = document.querySelector(".container")
let loveIcon = document.querySelector("i")

container.addEventListener("dblclick", function () {
    loveIcon.style.transform = 'translate(-50%, -50%) scale(1)'
    loveIcon.style.opacity = '1'
    setTimeout(function () {
        loveIcon.style.opacity = '0'
    }, 1000)
    setTimeout(function () {
        loveIcon.style.transform = 'translate(-50%, -50%) scale(0)'
    }, 1000)
})