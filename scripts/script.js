ScrollReveal().reveal('.home-container', {
    delay: 500,
    distance: '50px',
    origin: 'bottom',
    duration: 1000,
    easing: 'ease-out',
  });
  
  ScrollReveal().reveal('.about-container', {
    delay: 500,
    distance: '50px',
    origin: 'bottom',
    duration: 1000,
    easing: 'ease-out',
  });
  
  ScrollReveal().reveal('.projects-container', {
    delay: 500,
    distance: '50px',
    origin: 'bottom',
    duration: 1000,
    easing: 'ease-out',
  });
  window.addEventListener("scroll", function() {
    const navbar = document.querySelector(".navbar");
    const aboutSection = document.querySelector("#about");
    const projectsSection = document.querySelector("#projects");
  
    // Check if the scroll position is within the About section
    if (window.scrollY >= aboutSection.offsetTop && window.scrollY < projectsSection.offsetTop) {
      navbar.classList.add("black-text"); // Add class to change text to black when inside About section
      navbar.classList.remove("default-text"); // Remove default text color
    } else if (window.scrollY >= projectsSection.offsetTop) {
      navbar.classList.add("default-text"); // Revert to default color in Projects section
      navbar.classList.remove("black-text"); // Remove black text color
    } else {
      navbar.classList.add("default-text"); // Default text color above the About section
      navbar.classList.remove("black-text"); // Remove black text color
    }
  });
  
