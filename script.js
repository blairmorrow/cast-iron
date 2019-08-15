// Project: Cast Iron
// Author: Blair Morrow

let header = document.getElementById("stickyHeader");
let sticky = header.offsetTop;

window.onscroll = function() {
	
	if (window.pageYOffset > sticky) {
		
		header.classList.add("sticky");
	
	} 
	
	else {
		
		header.classList.remove("sticky");
		
	}
  
};
