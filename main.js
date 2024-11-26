// Toggle the menu display when the button is clicked
function toggleMenu() {
    const menu = document.getElementById("menuLinks");
    menu.classList.toggle("show");
    console.log("Menu toggled:", menu.classList.contains("show"));
}

// Close the menu if the user clicks outside of it
window.addEventListener('click', function(event) {
    const menu = document.getElementById("menuLinks");
    const menuButton = document.querySelector('.menu-button');
    
    // Check if the click was outside the menu and the button
    if (!menu.contains(event.target) && !menuButton.contains(event.target)) {
        menu.classList.remove("show");  // Hide the menu
    }
});

// Close the menu when any of the scrollable containers are scrolled
document.querySelectorAll('.snap-scroll-container').forEach(container => {
    container.addEventListener('scroll', function() {
        const menu = document.getElementById("menuLinks");
        if (menu.classList.contains("show")) {
            menu.classList.remove("show");  // Hide the menu
        }
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const dropdownLinks = document.querySelectorAll(".dropdown-content a");
    const dropdownButton = document.querySelector(".dropdown-button");
  
    dropdownLinks.forEach(link => {
      if (window.location.href.includes(link.getAttribute("href"))) {
        dropdownButton.classList.add("active-dropdown");
      }
    });
});