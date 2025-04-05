document.addEventListener("DOMContentLoaded", () => {
    // Initially hide hero image and text
    gsap.set(".hero-img-section", { x: "-100%", opacity: 0, scale: 0 });
    gsap.set(".hero-text-section", { x: "100%", opacity: 0, scale: 0 });

    let tl = gsap.timeline();

    // Step 1: Logo zooms in from the center-bottom and pauses
    tl.fromTo(".logo", 
        { scale: 11, opacity: 0, x: "500%", y: "-200%", position: "absolute" },  
        { scale: 6, opacity: 1, y: "130%", duration: 1.7, ease: "power4.out" }  
    )
    .to(".logo", { 
        x: "+=15", y: "+=15", repeat: 5, yoyo: true, duration: 0.1  
    }, "-=0.5");  

    // Step 2: Hero Image & Text Appear from Opposite Directions
    tl.to(".hero-img-section", { 
        x: "0%", 
        opacity: 1, 
        scale: 1, 
        duration: 1, 
        ease: "power2.out" 
    }, "-=0.5")  // Slight overlap with logo shake

    .to(".hero-text-section", { 
        x: "0%", 
        opacity: 1, 
        scale: 1, 
        duration: 1.5,
        ease: "power2.out" 
    }, "-=0.7");  // <-- Missing comma issue fixed

    // Step 3: Move Everything to Final Position
    tl.to(".logo", { 
        scale: 1, 
        x: "40%", 
        y: "-35%", 
        duration: 1, 
        ease: "power2.out" 
    })
    .to(".hero-text-section", { 
        y: "0%", 
        duration: 1, 
        ease: "power2.out" 
    }, "-=1");

    // IMAGE SWITCHING FUNCTION
    gsap.set(".hidden-img", { y: "100%", opacity: 0, position: "absolute" }); // Make sure it's visible but positioned below
    gsap.set(".console", { y: "0%", opacity: 1 });

    function switchImages() {
        let tl = gsap.timeline();

        tl.to(".console", { 
            y: "-100%",  // Move first image up
            opacity: 0, 
            duration: 1, 
            ease: "power2.out" 
        })
        .to(".hidden-img", { 
            y: "-150%",  // Move second image into place
            opacity: 1,
            delay: 1,
            duration: 1, 
            ease: "power2.out" 
        }, "-=1");

        setTimeout(() => {
            let tl2 = gsap.timeline();
            tl2.to(".hidden-img", { 
                y: "0%",  // Move second image back down
                opacity: 0, 
                delay: 1,
                duration: 1,
                ease: "power2.out" 
            })
            .to(".console", { 
                y: "0%",  // Bring first image back
                opacity: 1,
                duration: 1, 
                ease: "power2.out" 
            });
        }, 7000); // Reverse after 5 seconds
    }

    // Run the switch every 9 seconds
    setInterval(switchImages, 10000);

    // HEADER & NAVBAR ANIMATIONS
    gsap.from(".header h1", {
        y: -120,           
        opacity: 0,      
        duration: 1,     
        delay: 2.6,      
        ease: "power2.out"
    });

    gsap.from(".navbar a", {
        y: -50,          
        opacity: 0,      
        stagger: 0.2,    
        duration: 1,
        delay: 3,      
        ease: "power3.out"
    });
});



    // Rotate Image on Scroll
    gsap.to(".game-ball-img", {
        rotation: -80,  // Full rotation
        scrollTrigger: {
            trigger: ".game-ball-img",
            start: "top bottom",
            end: "bottom top",
            scrub: 1,  // Smooth effect
        }
    });

    // Scale Text from 0 to 1 Behind Image
    gsap.fromTo(".game-ball-text", 
        { x:"100px", y:"-50px", scale: 0, opacity: 0 },  // Start small & invisible
        { x:"0", y:"0",scale: 1, opacity: 1,    // Fully appear
          scrollTrigger: {
            trigger: ".game-ball-img",
            start: "top center", 
            end: "bottom center",
            scrub: 1,
          }
        }
    );
