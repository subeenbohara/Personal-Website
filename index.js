// Typewriter Effect
const textElement = document.querySelector('.home h1');
const text = "Hi, I am Subeen Bohara";
let index = 0;

function typeWriter() {
    if (index < text.length) {
        textElement.textContent += text.charAt(index);
        index++;
        setTimeout(typeWriter, 100); // Adjust typing speed here
    }
}

document.addEventListener('DOMContentLoaded', () => {
    typeWriter();
});

// Smooth Scrolling
const navLinks = document.querySelectorAll('.nav__link');
navLinks.forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        const targetSection = document.querySelector(targetId);
        targetSection.scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Slideshow
let slideIndex = 0;
showSlides();

function showSlides() {
    const slides = document.querySelectorAll('.mySlides');
    slides.forEach(slide => slide.style.display = "none");
    
    slideIndex++;
    if (slideIndex > slides.length) { slideIndex = 1 }
    
    slides[slideIndex - 1].style.display = "block";
    setTimeout(showSlides, 3000); // Change slide every 3 seconds
}

// Mobile Navigation
const toggleButton = document.querySelector('.nav__toggle');
const navList = document.querySelector('.nav__list');

toggleButton.addEventListener('click', () => {
    navList.classList.toggle('nav__active');
    navList.style.display = navList.style.display === 'flex' ? 'none' : 'flex'; // Toggle display
});

// Read More/Less Functionality
document.querySelectorAll('.read-more-button').forEach(button => {
    button.addEventListener('click', () => {
        const moreContent = button.previousElementSibling.querySelector('.travelogue__more-content');
        if (moreContent.style.display === 'block') {
            moreContent.style.display = 'none';
            button.textContent = 'Read More';
        } else {
            moreContent.style.display = 'block';
            button.textContent = 'Read Less';
        }
    });
});

// Function to add/remove box-shadow based on scroll position
function toggleNavbarShadow() {
    const navbar = document.querySelector('.nav');
    if (window.scrollY > 50) { // Change this value based on when you want the shadow to appear
        navbar.classList.add('box-shadow'); // Add shadow class
    } else {
        navbar.classList.remove('box-shadow'); // Remove shadow class
    }
}

// Listen for scroll events to toggle shadow
window.addEventListener('scroll', toggleNavbarShadow);
