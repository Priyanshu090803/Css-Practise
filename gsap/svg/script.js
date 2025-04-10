let path=`M 10 100 Q 500 100 1000 100`
let finalPath="M 10 100 Q 500 100 1000 100"
let string= document.querySelector(".string");

string.addEventListener("mousemove",(e)=>{
   path=`M 10 100 Q ${e.x} ${e.y} 1000 100`;
   gsap.to("svg path",{
    attr:{d:path},
    duration:0.5,
    ease: "power3.out"
   })
})
string.addEventListener("mouseleave",(e)=>{
    gsap.to("svg path",{
        attr:{d:finalPath},
        duration:1.5,
        ease:"elastic.out(2,0.2)"
    })
})