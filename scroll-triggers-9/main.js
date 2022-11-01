import './style.css'

gsap.registerPlugin(ScrollTrigger)

const tl=gsap.timeline()

tl.to(".box", {x: 500, dureaction: 5})
  .to(".box", {y: 500, duration: 5})

  .to(".box", {rotate:90, repeat:2, ease: "bounce"})

tl.addLabel("rotate", 8)
tl.play("rotate")

// ScrollTrigger.create({
//   animation: tl,
//   trigger: ".box", 
//   start: "top center"
// })