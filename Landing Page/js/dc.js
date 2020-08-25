/* toggles a drop down menu for the navigation bar */
function toggle() {
    var header = document.getElementById("navbar__list")
    header.classList.toggle('active')
}

/**
 * Define Global Variables
 * 
*/
const topNav = document.getElementById('navbar');
const sections = document.querySelectorAll('section');
const navItems = document.getElementsByClassName("links");
const scrollToTop = document.getElementById("button");

function sectionActive () {
    for (const section of sections) {
        const rect = section.getBoundingClientRect();

        if (rect.top <= 150 && rect.bottom >= 150) {
            const id = section.getAttribute("id");
            document.querySelector(`.${id}`).classList.add("active");
            section.classList.add("your-active-class");
        } 
        else {
            const id = section.getAttribute("id");
            document.querySelector(`.${id}`).classList.remove("active");
            section.classList.remove("your-active-class");
        }
    }
}

// build the navigation 

const navBuild = () => {
    
    let nav = '';
    sections.forEach(section => {
        //store the sections ids
        let sectionId = section.id;
        
        //store datanav 
        let sectionDataNav = section.dataset.nav; 
        nav += `<li><a class="menu__link ${sectionId}" href="#${sectionId}">${sectionDataNav}</a></li>`;
    });
    topNav.innerHTML = nav;
}

navBuild();

/* Add a scroll to top button */

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        scrollToTop.style.display = "inline-block";
    } else {
        scrollToTop.style.display = "none";
    }

}

//Smooth scroll to top

scrollToTop.addEventListener('click', function(a) {
    a.preventDefault();

    window.scrollTo({top: 0, behavior: 'smooth'});
});

// Scroll to anchor ID using scrollTO event

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(a) {
        a.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Add class 'active' 

document.addEventListener('scroll', function() {
    sectionActive();
});