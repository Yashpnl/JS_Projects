let arrayOfImages = [
    {
        dp: "https://images.unsplash.com/photo-1567808291548-fc3ee04dbcf0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGNhcnxlbnwwfHwwfHx8MA%3D%3D",
        story: "https://images.unsplash.com/photo-1485291571150-772bcfc10da5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjJ8fGNhcnxlbnwwfHwwfHx8MA%3D%3D",
    },
    {

        dp: "https://images.unsplash.com/photo-1514316454349-750a7fd3da3a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjN8fGNhcnxlbnwwfHwwfHx8MA%3D%3D",
        story: "https://images.unsplash.com/photo-1518306727298-4c17e1bf6942?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjh8fGNhcnxlbnwwfHwwfHx8MA%3D%3D",
    },
    {

        dp: "https://images.unsplash.com/photo-1507136566006-cfc505b114fc?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjd8fGNhcnxlbnwwfHwwfHx8MA%3D%3D",
        story: "https://plus.unsplash.com/premium_photo-1677591655703-e6f11ffdb1cf?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGNhcnxlbnwwfHwwfHx8MA%3D%3D"
    },
    {
        dp: "https://plus.unsplash.com/premium_photo-1664360971127-4afa228e90aa?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NjV8fGNhcnxlbnwwfHwwfHx8MA%3D%3D",
        story: "https://images.unsplash.com/photo-1606220838315-056192d5e927?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTR8fGNhcnxlbnwwfHwwfHx8MA%3D%3D",
    },
    {
        dp: "https://images.unsplash.com/photo-1517026575980-3e1e2dedeab4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NjZ8fGNhcnxlbnwwfHwwfHx8MA%3D%3D",
        story: "https://images.unsplash.com/photo-1598586958772-8bf368215c2a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NzB8fGNhcnxlbnwwfHwwfHx8MA%3D%3D",
    },
    {
        dp: "https://images.unsplash.com/photo-1614288532696-203f89dc0db4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OTR8fGNhcnxlbnwwfHwwfHx8MA%3D%3D",
        story: "https://images.unsplash.com/photo-1623006772851-a8bf2c47d304?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NzV8fGNhcnxlbnwwfHwwfHx8MA%3D%3D",
    },
    {
        dp: "https://images.unsplash.com/photo-1581235720704-06d3acfcb36f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nzl8fGNhcnxlbnwwfHwwfHx8MA%3D%3D",
        story: "https://images.unsplash.com/photo-1554294314-80a5fb7e6bd5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8ODd8fGNhcnxlbnwwfHwwfHx8MA%3D%3D",
    },
]

let clutter = ""
let stories = document.querySelector(".stories")
arrayOfImages.forEach(function (e, i) {
    clutter += `<div class="story">
        <img id="${i}" src="${e.dp}" alt="">
    </div>`
})

stories.innerHTML = clutter

stories.addEventListener("click", function (dets) {
    document.querySelector(".full_screen").style.display = "block"
    document.querySelector(".full_screen").style.backgroundImage = `url(${arrayOfImages[dets.target.id].story})`

    setTimeout(() => {
        document.querySelector(".full_screen").style.display = "none"
    }, 2000);
})