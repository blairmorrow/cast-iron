// Project: Cast Iron
// Author: Blair Morrow

// Declare variables for the header element of the page and the top offset pixels for the header
let header = document.getElementById("stickyHeader");
let sticky = header.offsetTop;

// When scrolling the web page call this function
window.onscroll = function () {

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

};
