gsap.to ("#line-svg", {
    duration: 1,
    x: 12,
    y:14,
    delay: 1
});
let svg = document.querySelector("#line-svg");
svg.addEventListener("mousemove",(dets) => {
    console.log(dets.x,dets.y);
})