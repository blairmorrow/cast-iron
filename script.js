// Project: Cast Iron
// Author: Blair Morrow

// When scrolling the web page call this function
window.onscroll = function () {

    // Declare variables for the header element of the page and the top offset pixels for the header
    var header = document.getElementById("stickyHeader");
    var sticky = header.offsetTop;

    // If the y-axis offset is greater than the header top offset
    if (window.pageYOffset > sticky) {

        // Fix the header to the top of the web page as the user scrolls
        header.classList.add("sticky");

    }

    // Otherwise
    else {

        // Make the header behave as it normally would
        header.classList.remove("sticky");

    }

}

// When the burger icon is clicked call this function
function responsiveMenu() {

    // Declare variable for the navigation div identifier
    var x = document.getElementById("navMenu");

    // If the responsive menu is inactive
    if (x.className === "navigation") {

        // Make it active
        x.className += " responsive";

    }
    // Otherwise, if it is active
    else {

        // Make it inactive
        x.className = "navigation";

    }

}
