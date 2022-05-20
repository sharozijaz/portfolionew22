// const aboutPage = document.getElementById("aboutBTN");
const socialIcons = document.querySelector(".hero__section-social");
gsap.registerPlugin(ScrollTrigger);
// gsap.from(".animation-y", {
//   duration: 1,
//   y: 100,
// });
// gsap.to(".animate", { duration: 2, y: 300, stagger: 0.23 });
// gsap.to(".hero__section-email", { duration: 2, x: 300 });
// gsap.to(".hero__section-links", { duration: 2, y: 300, stagger: 0.23 });

gsap.from(".text-slide", {
  scrollTrigger: ".text-slide", // start the animation when ".box" enters the viewport (once)
  x: -100,
});
gsap.from(".text-slide2", {
  scrollTrigger: ".text-slide2", // start the animation when ".box" enters the viewport (once)
  x: -100,
});
gsap.from(".text-slide3", {
  scrollTrigger: ".text-slide3", // start the animation when ".box" enters the viewport (once)
  x: -100,
});
gsap.from(".anime1", {
  scrollTrigger: ".anime1", // start the animation when ".box" enters the viewport (once)
  x: 100,
});
gsap.from(".anime2", {
  scrollTrigger: ".anime2", // start the animation when ".box" enters the viewport (once)
  x: -100,
});
gsap.from(".anime3", {
  scrollTrigger: ".anime3", // start the animation when ".box" enters the viewport (once)
  x: 100,
});
