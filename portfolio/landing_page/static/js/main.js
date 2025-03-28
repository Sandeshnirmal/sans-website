
document.addEventListener("DOMContentLoaded", () => {
    // Initially hide the console and text
    gsap.set(".console, .hero-text-section", { x:"-50",y:"-50", opacity: 0, scale: 0 });

    let tl = gsap.timeline();

    // Step 1: Logo zooms in from the center-bottom and pauses
    tl.fromTo(".logo", 
        { scale: 7, opacity: 0, x: "500%", y: "-200%", position: "absolute" },  // Start from lower center
        { scale: 4, opacity: 1, y: "130%", duration: 1.5, ease: "power4.out" }  // Move near center
    )
      .to(".logo", { 
        x: "+=15", y: "+=15", repeat: 5, yoyo: true, duration: 0.1  
    }, "-=0.5") 
    // .to(".logo", { delay: 0.5 });  // Pause for 0.5s

    // Step 2: Console & Text Appear Behind Logo
    tl.to(".console, .hero-text-section", { 
        opacity: 1, 
        scale: 1, 
        duration: 1, 
        ease: "power2.out" 
    }, );  // Start fading in while logo shakes

    // Step 3: Move Everything to Final Position
    tl.to(".logo", { 
        scale: 1, 
        x: "40%", 
        y: "-35%", 
        duration: 1, 
        ease: "power2.out" 
    })
    .to(".console", { 
        y: "0%", 
        duration: 1, 
        ease: "power2.out" 
    }, "-=1")
    .to(".hero-text-section", { 
        y: "0%", 
        duration: 1, 
        ease: "power2.out" 
    }, "-=1");

    // Floating effect for the console
    gsap.to(".console", {
        y: -500, // Smaller floating movement for better realism
        duration: 3,
        repeat: -1,
        yoyo: true,
        ease: "power2.out"
    });
});


tl.to(".console", {
    boxShadow: "0px 30px 50px rgba(0, 0, 0, 0.5)", 
    duration: 1,
    ease: "power2.out"
})
.to(".console", {
    boxShadow: "0px 50px 70px rgba(0, 0, 0, 0.7)",
    duration: 1,
    repeat: -1,   // Infinite pulse effect
    yoyo: true    // Reverse back and forth
});




gsap.from(".header h1", {
    y: -120,           // Start lower
    opacity: 0,      // Fade in
    duration: 1,     
    delay: 1,      // Starts after the logo animation
    ease: "power2.out"
});

gsap.from(".navbar a", {
    y: -50,          // Slide in from top
    opacity: 0,      // Fade in
    stagger: 0.2,    // Each link appears one after another
    duration: 1,
    delay: 0.8,      
    ease: "power3.out"
});