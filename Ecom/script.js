let hamburgurIcon = document.querySelector(".hamburgur ")
let container = document.querySelector(".container");
let closeIcon = document.querySelector(".navbar span")

hamburgurIcon.addEventListener("click",()=>{
    container.classList.add("menu-open")
})

closeIcon.addEventListener("click",()=>{
    container.classList.remove("menu-open")
})