function isInViewport(element) {
    var rect = element.getBoundingClientRect();
    return (
        rect.top <= (window.innerHeight)
    );
}

function handleScroll() {
  let animatedAll = document.querySelectorAll('.to-animate');

  animatedAll.forEach(animated => {
    if (isInViewport(animated)) {
      animated.classList.add('animate');
    }
  });
}

  // Ajouter un gestionnaire de scroll
  window.addEventListener('scroll', handleScroll);
  
  // Gérer les animations au chargement initial de la page
  handleScroll();

// Menu hamburger
const menu = document.querySelector("#links");
const menuItems = document.querySelectorAll(".menuItem");
const hamburger= document.querySelector(".hamburger");
const closeIcon = document.querySelector(".xmark");
const menuIcon = document.querySelector(".fa-bars");

function toggleMenu() {

if (menu.classList.contains("showMenu")) {
menu.classList.remove("showMenu");
closeIcon.style.display = "none";
menuIcon.style.display = "block";
hamburger.classList.remove("inMenu");
closeIcon.classList.remove("show-before");

} else {
menu.classList.add("showMenu");
closeIcon.style.display = "block";
menuIcon.style.display = "none";
hamburger.classList.add("inMenu");
closeIcon.classList.add("show-before");
}
}

hamburger.addEventListener("click", toggleMenu);

// menuItems.forEach( 
// function(menuItem) { 
// menuItem.addEventListener("click", toggleMenu);
// }
// )