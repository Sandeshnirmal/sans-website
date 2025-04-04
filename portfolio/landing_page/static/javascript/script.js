
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



