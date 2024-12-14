// Toggle Mobile Menu
const menuBtn = document.querySelector('.menu-btn');
const navLinks = document.querySelector('.nav-links');

menuBtn.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

// Scroll Reveal Animation
const sections = document.querySelectorAll('.scroll-section');

const revealOnScroll = () => {
    sections.forEach((section) => {
        const sectionTop = section.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        if (sectionTop < windowHeight - 100) {
            section.classList.add('visible');
        }
    });
};

window.addEventListener('scroll', revealOnScroll);

// Smooth Scroll for Anchors
const anchorLinks = document.querySelectorAll('a[href^="#"]');

anchorLinks.forEach((link) => {
    link.addEventListener('click', (event) => {
        event.preventDefault();
        const targetId = link.getAttribute('href').slice(1);
        const targetSection = document.getElementById(targetId);
        targetSection.scrollIntoView({
            behavior: 'smooth',
        });
    });
});

// Parallax Effect
window.addEventListener('scroll', function () {
    const parallax = document.querySelectorAll('.parallax');
    let scrollPosition = window.pageYOffset;
    parallax.forEach(function (element) {
        let speed = element.getAttribute('data-speed');
        let yPos = -(scrollPosition * speed / 100);
        element.style.transform = 'translate3d(0px, ' + yPos + 'px, 0px)';
    });
});

// Text Fade-In Animation
const textElements = document.querySelectorAll('.fade-in-left, .fade-in-right, .fade-in-up');

const revealTextOnScroll = () => {
    textElements.forEach((element) => {
        const elementTop = element.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        if (elementTop < windowHeight - 100) {
            element.classList.add('visible');
        }
    });
};

window.addEventListener('scroll', revealTextOnScroll);

// Change Navbar on Scroll
const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
    if (window.scrollY > 0) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});
