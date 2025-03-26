

document.addEventListener("DOMContentLoaded", function () {
    const hamburger = document.querySelector(".hamburger");
    const navLinks = document.querySelector(".nav-links");

    // Toggle menu on click
    hamburger.addEventListener("click", function () {
        navLinks.classList.toggle("active");
    });
});
