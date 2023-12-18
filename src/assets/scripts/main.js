/**
 * Import dependencies from node_modules
 * see commented examples below
 */

// import 'some-node-module';
// import SomeModule from 'some-node-module';


/**
 * Write any other JavaScript below
 */

/* Boilerplate default JS code

+( function() {
  const university = "UOC";
  console.log(`Hello, ${university}!`);
} )();

*/

//Navbar link active class

$(document).ready(function() {
  var currentPage = window.location.pathname.split('/').pop();

  $('.nav a').removeClass('text-slate-600 text-default_green');

  if (currentPage === 'index' || currentPage === '') {
    $('.nav a[href="index"]').addClass('text-default_green');
  } else {
    $('.nav a[href="' + currentPage + '"]').addClass('text-default_green');
  }
});

//Initialize Aos library

AOS.init();
