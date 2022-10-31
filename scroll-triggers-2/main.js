import './style.css';

gsap.registerPlugin(ScrollTrigger);

gsap.to('.square', {
  // x: "700",
  duration: 3,
  scrollTrigger: {
    trigger: ".square",
    start: "top 30%",
    end: () => `+=${document.querySelector(".square").offsetHeight}`,
    markers: true,
    toggleClass: "red"
    // markers: {
    //   startColor: "purple",
    //   endColor: "fuchsia",
    //   fontSize: "4rem",
    //   indent: 200
    // }
  }
});
