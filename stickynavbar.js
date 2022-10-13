// When the user scrolls the page, execute myFunction
window.onscroll = function() {myFunction()};

// Get the navbar
var myNavbar = document.getElementById("navbar");

// Get the offset position of the navbar
var sticky = myNavbar.offsetTop;

// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
  if (window.pageYOffset >= sticky) {
    myNavbar.classList.add("sticky")
  } else {
    myNavbar.classList.remove("sticky");
  }
}