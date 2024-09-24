let slideIndex = 0;
const slides = document.querySelectorAll(".slide");
const prev = document.querySelector(".prev");
const next = document.querySelector(".next");

// Function to show slides
function showSlides() {
    slides.forEach((slide, index) => {
        slide.style.display = "none";
        slide.classList.remove("active");
    });
    slides[slideIndex].style.display = "block";
    slides[slideIndex].classList.add("active");
}

// Function to go to the next slide
function nextSlide() {
    slideIndex = (slideIndex + 1) % slides.length;
    showSlides();
}

// Function to go to the previous slide
function prevSlide() {
    slideIndex = (slideIndex - 1 + slides.length) % slides.length;
    showSlides();
}

// Event listeners for navigation buttons
prev.addEventListener("click", prevSlide);
next.addEventListener("click", nextSlide);

// Automatically change slides every 5 seconds
setInterval(nextSlide, 5000);

// Start slider on page load
showSlides();
