// Fonction pour scroll à l'appui de l'élément
function scrollToSection(sectionId) {
    var section = document.getElementById(sectionId);
    if (section) {
        var offset = -50;
        var position = section.offsetTop + offset;

        window.scrollTo({
            top: position,
            behavior: 'smooth',
            block: 'start',
        });
    }
}


// Fonction pour changer le fond de la barre de navigation après avoir scrollé tant de pixels
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    var navBar = document.querySelector('nav');
    var textElement = document.querySelector('.home'); 
    if (window.scrollY > window.innerHeight * 0.8) {
        navBar.style.backgroundColor = "#131e3a"; 
        textElement.style.display = "block"; 
    } else {
        navBar.style.backgroundColor = "transparent"; 
        textElement.style.display = "none"; 
    }
}