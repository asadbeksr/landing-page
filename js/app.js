/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
 */
// References:

// https://knowledge.udacity.com/questions/348497
// https://developer.mozilla.org/en-US/docs/Web/API/Element/scrollIntoView
// https://knowledge.udacity.com/questions/553036

/**
 * Define Global Variables
 * 
 */
const sections = document.querySelectorAll('section');
const navbarList = document.getElementById("navbar__list");
/**
 * End Global Variables
 * Start Helper Functions
 * 
 */



/**
 * End Helper Functions
 * Begin Main Functions
 * 
 */

// build the nav and Scroll to section on link click
function buildNav() {
  for (section of sections) {
    const liElem = document.createElement('li');
    const anchor = document.createElement('a');
    anchor.textContent = section.id;
    anchor.innerHTML = section.dataset.nav
    anchor.setAttribute("class", "menu__link")
    liElem.appendChild(anchor);
    navbarList.appendChild(liElem);
    // scroll on a click
    scroll(liElem, section)
  }
}



// Add class 'a// Add class 'active' to section when near top of viewport
function sectionActive() {
  sections.forEach(section => {
    const sectionPosition = section.getBoundingClientRect();
    if (sectionPosition.top <= 150 && sectionPosition.bottom >= 150) {
      section.classList.add('your-active-class');
    }
    else {
      section.classList.remove('your-active-class')
    }
  });
};

/**
 * End Main Functions
 * Begin Events
 * 
 */
function scroll(clickTarget, scrollTarget) {
  clickTarget.addEventListener("click", (e) => {
    e.preventDefault();
    scrollTarget.scrollIntoView({
      behavior: "smooth"
    })
  })
}

window.addEventListener('scroll', () => {
  sectionActive();
});

// Build menu 
buildNav();



