// NAVBAR & DROPDOWN CONTROLLER
// ==============================

// elements
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');
const avatarWrapper = document.querySelector('.avatar-wrapper');
const avatar = document.querySelector('.avatar');

// ==============================
// HAMBURGER MENU (MOBILE)
// ==============================
hamburger.addEventListener('click', (e) => {
    e.stopPropagation();
    navMenu.classList.toggle('active');

    // close avatar dropdown if open
    avatarWrapper.classList.remove('active');
});

// ==============================
// AVATAR DROPDOWN
// ==============================
avatar.addEventListener('click', (e) => {
    e.stopPropagation();
    avatarWrapper.classList.toggle('active');

    // close menu if open
    navMenu.classList.remove('active');
});

// ==============================
// CLOSE WHEN CLICK OUTSIDE
// ==============================
document.addEventListener('click', () => {
    navMenu.classList.remove('active');
    avatarWrapper.classList.remove('active');
});

// ==============================
// PREVENT CLOSE WHEN CLICK INSIDE
// ==============================
navMenu.addEventListener('click', (e) => {
    e.stopPropagation();
});

avatarWrapper.addEventListener('click', (e) => {
    e.stopPropagation();
});

// ==============================
// OPTIONAL: CLOSE ON SCROLL
// ==============================
window.addEventListener('scroll', () => {
    navMenu.classList.remove('active');
    avatarWrapper.classList.remove('active');
});
