// Select the menu button
const menuButton = document.getElementById("menuButton");

// Select the navigation menu
const navLinks = document.querySelector(".nav-links");


// Open and close mobile menu
menuButton.addEventListener("click", function () {

    navLinks.classList.toggle("active");

});


// Contact form
const contactForm = document.getElementById("contactForm");


contactForm.addEventListener("submit", function (event) {

    // Prevent page refresh
    event.preventDefault();

    // Display message
    alert("Thank you! Your message has been submitted.");

    // Clear the form
    contactForm.reset();

});