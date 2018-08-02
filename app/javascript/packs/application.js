/* eslint no-console:0 */
// This file is automatically compiled by Webpack, along with any other files
// present in this directory. You're encouraged to place your actual application logic in
// a relevant structure within app/javascript and only use these pack files to reference
// that code so it'll be compiled.
//
// To reference this file, add <%= javascript_pack_tag 'application' %> to the appropriate
// layout file, like app/views/layouts/application.html.erb

console.log('Hello World from Webpacker')
import 'bootstrap';
// When the user scrolls the page, execute myFunction
window.onscroll = function() {myFunction()};

// Get the header
var button = document.getElementById("add-button");

// Get the offset position of the navbar
var sticky = button.offsetTop;

// Add the sticky class to the button when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
  if (window.pageYOffset > sticky) {
    button.classList.add("sticky");
  } else {
    button.classList.remove("sticky");
  }
}
