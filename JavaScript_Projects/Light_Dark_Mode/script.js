const buttons = document.querySelectorAll(".button")
const body = document.querySelector('body')


buttons.forEach(function (button) {
    button.addEventListener('click', function (e) {
        if (e.target.id === "white") {
            body.style.backgroundColor = e.target.id
        }
        if (e.target.id === "black") {
            body.style.backgroundColor = e.target.id
        }
    })

})