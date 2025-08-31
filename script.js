const body = document.querySelector("body")

function generetedStars() {
    if (document.querySelectorAll(".star").length > 100) return;
    const star = document.createElement("div")
    star.classList.add("star")
    star.style.top = `${Math.random() * 100}%`
    star.style.left = `${Math.random() * 100}%`
    body.appendChild(star)
    setTimeout(() => { star.remove() }, 5000)
}
setInterval(() => { generetedStars() }, 100)

