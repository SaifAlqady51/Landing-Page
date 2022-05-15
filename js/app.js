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
const ulNavList = document.querySelector('#navbar__list');
const sections = document.querySelectorAll('section');
const bar = document.querySelector('.page__header');

// Just for styling small screens
const navMenu = document.querySelector('.navbar__menu');
const toggleButton = document.querySelector('.toggle')

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


const buildNavbar = () => {
    sections.forEach(function(section,i)  {

        //initialize variables
        let LI = document.createElement('li');
        let Link = document.createElement('a');

        // working on anchor tags
        Link.setAttribute('href',`#${section.id}`);
        Link.setAttribute('class', 'menu__link')
        Link.innerText = `Section ${i+1}`;

        //appending element to each other
        LI.appendChild(Link);
        ulNavList.appendChild(LI);
    })
}

buildNavbar();

// Add button for small screens

function button(){
    toggleButton.addEventListener('click',() =>{
        navMenu.classList.toggle('active')
    }) 
}
button()

// Add class 'active' to section when near top of viewport

function addClassToSection(){
    //loop over section and save each one in a variable
    for(let i = 0; i < sections.length;i++){
        let sec = sections[i];

        //check section position on window screen
        if(sec.getBoundingClientRect().top >= -400 && sec.getBoundingClientRect().top < 150){
            sec.classList.add('your-active-class');
        }else{
            sec.classList.remove('your-active-class');
        }
    }
}

// Add class 'active' to the anchor tag 

function addClassToAnchor(link){
        let activeLink = document.getElementsByClassName('active');

        // remove active class in the previous anchor tag
        if(activeLink.length  === 1){
            activeLink[0].classList.remove('active')
        }

        //add active class to the clicked anchor
        link.classList.add('active')
}


// Scroll to anchor ID using scrollTO event

function clickAnchor(event){
    event.preventDefault();

    // scroll to speific section with the href attribute
    document.querySelector(this.getAttribute('href')).scrollIntoView({behavior:'smooth'});
    // remove the toggle bar list in small screens
    navMenu.classList.remove('active')
}




// Hide navbar functions
const showNav = () =>{
    bar.style.display = 'block';
}

const hideNav = () => {
    //do not hide the navbar when the window screen is on top
    if(document.body.scrollTop <= 600){
        showNav();
    }else{
        bar.style.display = 'none';
    }
}
showNav();
/**
 * End Main Functions
 * Begin Events
 * 
*/



// Scroll to section on link click


const links = [...document.getElementsByClassName('menu__link')];
links.forEach(link =>{
    link.addEventListener('click',clickAnchor);
});
// set Anchor as active

links.forEach(link =>{
    link.addEventListener('click',() =>{
        addClassToAnchor(link);
    })

})

// Set sections as active

window.addEventListener('scroll', () =>{
    addClassToSection();
})

// Hide navBar 

let timer;
document.onscroll = () =>{
    showNav();
    clearTimeout(timer);
    timer = setTimeout(() =>{
        hideNav();
    },3000)
}

