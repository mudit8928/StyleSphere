var path = `M15 75 Q 581.5 75 1165 75`;
var finalpath = 'M15 75 Q 581.5 75 1165 75';
let svg = document.querySelector("#string");
svg.addEventListener("mousemove",(dets) => {
    path = `M15 75 Q ${dets.x} ${dets.y-80} 1165 75`;
    gsap.to("svg path",{
        attr: {d : path},
        duration: .2,
        ease: "power3.out",
    })
})
svg.addEventListener("mouseleave",() => {
    gsap.to("svg path",{
        attr: {d : finalpath},
        duration: .3,
        ease: "elastic.out(1.5,0.5)",
    });
})
let left = document.querySelector("#left-btn")
left.addEventListener("click",() => {
    console.log("left-clicked")
});
let right = document.querySelector("#right-btn")
right.addEventListener("click",() => {
    console.log("right-clicked");
})