// Only For Specific one element

// var ele1 = document.querySelector("#ele1")
// var eleImage = document.querySelector("#ele1 img")

// ele1.addEventListener("mousemove", function (details) {
//     eleImage.style.left = details.x + "px"
//     eleImage.style.top = details.y + "px"
// })

// ele1.addEventListener("mouseenter", function (details) {
//     eleImage.style.opacity = 1
// })

// ele1.addEventListener("mouseleave", function (details) {
//     eleImage.style.opacity = 0
// })


// For All

var element = document.querySelectorAll(".elem")

element.forEach(function (val) {
    val.addEventListener("mouseenter", function () {
        val.childNodes[3].style.opacity = 1
    })
    val.addEventListener("mouseleave", function () {
        val.childNodes[3].style.opacity = 0
    })
    val.addEventListener("mousemove", function (details) {
        val.childNodes[3].style.left = details.x + "px"
    })
})