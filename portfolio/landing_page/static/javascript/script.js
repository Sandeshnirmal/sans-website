
const navbar = document.getElementById("head");

let prevScrollPos = window.scrollY;

window.addEventListener("scroll", () => {
  const currentScrollPos = window.scrollY;

  if (prevScrollPos > currentScrollPos) {
    // Scrolling up
    navbar.style.visibility = "visible";
  } else {
    // Scrolling down
    navbar.style.visibility = "hidden";
  }

  prevScrollPos = currentScrollPos;

  console.log("works");
});

// const parallaxSections = document.querySelectorAll(".parallax-section");

// window.addEventListener("scroll", () => {
//   parallaxSections.forEach((section) => {
//     const speed = section.dataset.speed || 0.5; // Adjust the speed (lower value = slower movement)
//     const offset = window.scrollY * speed;
//     section.style.backgroundPositionY = `${offset}px`;
//   });
// });
