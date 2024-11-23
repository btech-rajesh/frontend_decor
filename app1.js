// Select the header element
const header = document.querySelector('header');

// Add scroll event listener
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        header.classList.add('scrolled'); //on scrolling it changes its class
    } else {
        header.classList.remove('scrolled'); //when we at top it will reflect as a before
    }
});
