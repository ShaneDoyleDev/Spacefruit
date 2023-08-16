// page sections
const heroSection = document.querySelector("#hero-section");

// navbar
const navbar = document.querySelector(".navbar");
const navbarMenu = document.querySelector(".navbar-menu");
const navbarHamburger = document.querySelector(".navbar-hamburger");
const navbarCloseBtn = document.querySelector(".navbar-menu-close-btn");
const navbarMenuItems = document.querySelectorAll(".navbar-menu-item");
const navbarMenuLinks = document.querySelectorAll(".navbar-menu-link");

// testimonials
const testimonials = document.querySelectorAll(".testimonial");
const paginationDots = document.querySelectorAll(".pagination-dot");
const paginationRightArrow = document.querySelector(".pagination-right-arrow");
const paginationLeftArrow = document.querySelector(".pagination-left-arrow");

// modal
const modal = document.querySelector(".modal");
const backdrop = document.querySelector(".backdrop");
const modalContent = document.querySelector(".modal-content");
const modalForm = document.querySelector(".modal-form");
const modalFormMessage = document.querySelector(".form-message");

// buttons
const contactBtn = document.querySelector(".contact-btn");
const ctaBtn = document.querySelector(".btn-cta");
const modalCloseBtn = document.querySelector(".modal-close-btn");

// global variables
/**
 * Timer to manage the duration of the window resize event.
 * @type {number}
 */
let resizeTimer;

/**
 * Index representing the currently displayed testimonial.
 * @type {number}
 */
let currentTestimonial = 1;

/**
 * Add smooth scrolling behavior to sections when their corresponding nav link is clicked.
 */
navbarMenuLinks.forEach((menuLink) => {
  menuLink.addEventListener("click", (event) => {
    event.preventDefault();
    const targetSection = document.querySelector(menuLink.getAttribute("href"));
    if (targetSection) {
      targetSection.scrollIntoView({ behavior: "smooth" });
    }
  });
});
