let page1 = document.querySelector(".page1")
let cursor= document.querySelector(".cursor");

page1.addEventListener("mousemove",(e)=>{
    gsap.to(cursor,{
        x:e.x,
        y:e.y,
        duration:1,
        ease:"back.out"
    })
})