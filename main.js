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

function openTab(evt, cityName) {
    // Declare all variables
    var i, tabcontent, tablinks;
  
    // Get all elements with class="tabcontent" and hide them
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
  
    // Get all elements with class="tablinks" and remove the class "active"
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
  
    // Show the current tab, and add an "active" class to the button that opened the tab
    document.getElementById(cityName).style.display = "block";
    evt.currentTarget.className += " active";
  }