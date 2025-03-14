$( "footer" ).load( "components/footerContent.html" );

function toggelBurgerMenuInNavbar() {
    var navbarLinks = document.getElementById("navbar-links");
    if (navbarLinks.style.display === "flex") {
        navbarLinks.style.display = "none";
        navbarLinks.classList.remove("menu-open");
    } else {
        navbarLinks.style.display = "flex";
        navbarLinks.classList.add("menu-open");
    }
}

// Makes navbar behave properly on resize
window.addEventListener('resize', function () {
    var navbarLinks = document.getElementById("navbar-links");
    if (window.innerWidth >= 768) {
        navbarLinks.style.display = "flex";
        navbarLinks.classList.remove("menu-open");
    } else if (!navbarLinks.classList.contains("menu-open")) {
        navbarLinks.style.display = "none";
    }
}
);