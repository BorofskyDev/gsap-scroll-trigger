import './style.css';

gsap.registerPlugin(ScrollTrigger);

const tl = gsap.timeline({
  scrollTrigger: {
    trigger: ".box",
    markers: true,
    start: "top 80%",
    end: "top 30%",
    scrub: 5,
  }
})

tl.to(".box", {x: 500, duration: 5})
  .to(".box", {y:200, duration: 2})
  .to(".box", {x: 0, duration: 7})


