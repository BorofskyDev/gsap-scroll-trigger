import './style.css';

gsap.registerPlugin(ScrollTrigger);

gsap.to('.square', {
  x: 700,
  duration: 3,
  scrollTrigger: {
    trigger: '.square',
    start: 'top 60%',
    end: 'top 40%',
    toggleActions: "restart pause resume complete",
    markers: {
      startColor: 'purple',
      endColor: 'fuchsia',
      fontSize: '3rem',
    },
  },
});
