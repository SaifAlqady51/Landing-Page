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
const sections = document.querySelectorAll('section');
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


sections.forEach(function(section,i)  {
    let LI = document.createElement('li');
    let Link = document.createElement('a');
    Link.setAttribute('href',`#${section.id}`);
    Link.innerText = `Section ${i+1}`
    LI.appendChild(Link);
    navList.appendChild(LI);
})




// Add class 'active' to section when near top of viewport

window.addEventListener('scroll', () =>{
    for(let i = 0; i < sections.length;i++){
        let sec = sections[i];
        if(sec.getBoundingClientRect().top >= -400 && sec.getBoundingClientRect().top < 150){
            sec.classList.add('your-active-class');
        }else{
            sec.classList.remove('your-active-class');
        }
    }
})


// Scroll to anchor ID using scrollTO event


let scrollToAnchorID = () => {
    let links = document.querySelectorAll('a')
    for(let j = 0 ;j < links.length;j++){
        links[j].addEventListener('click',function(event){
        event.preventDefault();
        window.scrollTo({top:sections[j].offsetTop, behavior:'smooth'})
        })
    }

}
scrollToAnchorID();

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



// Set sections as active



// Hide navBar 

let timer;
document.onscroll = () =>{
    showNav()
    clearTimeout(timer)
    timer = setTimeout(() =>{
        hideNav()
    },3000)
}
