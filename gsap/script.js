// gsap.to(".box",{
//     x:100,
//     delay:1,
//     duration:3,
//     borderRadius:"50%",
//     backgroundColor:"blue",
//     repeat:-1,
//     yoyo:true
// })

// gsap.from(".page1 .box",{
//     opacity:0,
//     scale:0,
//     rotate:360,
//     backgroundColor:"blue",
//     duration:2,
//     delay:0.4
// })

// gsap.from(".page2 .box",{
//     opacity:0,
//     scale:0,
//     rotate:360,
//     backgroundColor:"blue",
//     duration:2,
//     delay:0.4,
//     // scrollTrigger: ".page2 .box"
//     scrollTrigger:{
//         trigger: ".page2 .box",
//         scroller:"body",
//         markers:true,
//         start:"top 50%",
//         end:"top 30%",
//         scrub:3
//     }
// })

// gsap.from(".page2 h1",{
//     opacity:0,
//     x:300,
//     delay:0.2,
//     duration:2,
//     scrollTrigger:{
//         scroller:"body",
//         trigger:".page2 h1",
//         markers:true,
//         start:"top 50%"

//     }

// })
// gsap.from(".page2 h2",{
//     opacity:0,
//     x:300,
//     delay:0.2,
//     duration:2,
//     scrollTrigger:{
//         scroller:"body",
//         trigger:".page2 h2 ",
//         markers:true,
//         start:"top 50%"
//     }

// })


gsap.to(".page2 h1",{
    transform: "translate(-200%)",
    scrollTrigger:{
        trigger:".page2",
        scroller:"body",
        markers:true,
        start: "top 0%",
        end:"top -150%",
        scrub:5,
        pin:true
    }
})