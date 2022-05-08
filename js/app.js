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


/**
 * Comments should be present at the beginning of each procedure and class.
 * Great to have comments before crucial code sections within the procedure.
*/

/**
 * Define Global Variables
 * 
*/

const navBar = document.querySelector('#navbar__list')
const LIS = document.getElementsByTagName('li')
const sections = document.querySelectorAll('section')




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

// build the nav
function addLi(){
    for(let i = 1;i <= sections.length;i++){
        const LI  = document.createElement('li')
        LI.setAttribute('id',`section-${i}`)
        LI.innerText = `section ${i}`

        navBar.appendChild(LI)
    }
}
addLi()

// Add class 'active' to section when near top of viewport

// li.addEventListener('click',function(){
//     console.log('click')
// })


// Scroll to anchor ID using scrollTO event

for(let i = 0 ; i < 3;i++){
    LIS[i].addEventListener('click',function(){
        sections[i].scrollIntoView({behavior:"smooth"})
    })
}

// on window scroll



/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 

// Scroll to section on link click

// Set sections as active
