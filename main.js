let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');
let header = document.querySelector('header');

menu.onclick = () => {
    menu.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}

window.onscroll = () => {
    // Remove the active class from navbar and reset the menu icon on scroll
    if (navbar.classList.contains('active')) {
        menu.classList.remove('bx-x');
        navbar.classList.remove('active');
    }
    // Add shadow to header on scroll
    header.classList.toggle('shadow', window.scrollY > 0);
}
function toggleAccordion(header) {
    const content = header.nextElementSibling;
    const icon = header.querySelector("i");

    if (content.style.display === "block") {
        content.style.display = "none";
        icon.classList.remove("active");
    } else {
        content.style.display = "block";
        icon.classList.add("active");
    }
}