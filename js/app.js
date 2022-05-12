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
const navList = document.querySelector('#navbar__list');
const sections = Array.from(document.querySelectorAll('section'));
const bar = document.querySelector('.page__header');



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

function createList() {
    for(const section of sections){
        const LI = document.createElement('li');
        LI.innerHTML = `<a href="#${section.id}" data-nav="${section.id}">${section.dataset.nav}</a>`

        navList.appendChild(LI)
    }
}
createList()




// Add class 'active' to section when near top of viewport



function addActiveClass(){
    sections.forEach(function(active){
        if(
            active.getBoundingClientRect().top >= -400 &&
            active.getBoundingClientRect().top <= 150
            )
        {
            active.classList.add('your-active-class')
        }
        else{
            active.classList.remove('your-active-class')
        }
    })
}



// Scroll to anchor ID using scrollTO event


function scrollToAnchorIs(e){
    e.preventDefault();
    if(e.target.dataset.nav){
        document.getElementById(`${e.target.dataset.nav}`).scrollIntoView({behavior:'smooth'})
    }}


// on window scroll


// Hide navbar functions
function showNav(){
    bar.style.display = 'block'
}

function hideNav(){
    if(document.body.scrollTop <= 600){
        showNav()
    }else{
        bar.style.display = 'none';
    }
}
showNav()
/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 


// Scroll to section on link click
navList.addEventListener('click',(e) => {
    scrollToAnchorIs(e)
})
// Set sections as active

window.onscroll = () =>{addActiveClass()}



// Hide navBar 

let timer;
document.onscroll = () =>{
    showNav()
    clearTimeout(timer)
    timer = setTimeout(() =>{
        hideNav()
    },3000)
}
