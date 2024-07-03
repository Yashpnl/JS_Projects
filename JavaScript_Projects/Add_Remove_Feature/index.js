let isStatus = document.querySelector("h4")

let userimage = document.querySelector("img")

let btn = document.querySelector("#add")

let check = 0
// let removeFriend = document.querySelector("#remove")

btn.addEventListener("click", function () {
    if (check == 0) {
        btn.innerHTML = "Remove"
        isStatus.innerHTML = "Friends"
        userimage.src = "./model.jpg"
        isStatus.style.color = "green"
        check = 1
    }
    else {
        btn.innerHTML = "Add"
        isStatus.innerHTML = "Stranger"
        userimage.src = "./placeholder.jpg"
        isStatus.style.color = "red"
        check = 0
    }
})


// removeFriend.addEventListener("click", function () {
//     isStatus.innerHTML = "Stranger"
//     userimage.src = "./placeholder.jpg"
//     isStatus.style.color = "red"
// })