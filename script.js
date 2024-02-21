jQuery(document).ready(function ($) {
  console.log("called");
  $(window).on('scroll', function () {
      if ($(window).scrollTop() > 100) {
          $('.header').addClass('active');
      } else {
          $('.header').removeClass('active');
      }
  }
  );

  $('.toggle_btn').on('click', function () {
      $('.dropdown_menu').toggleClass('open');

      const isOpen = $('.dropdown_menu').hasClass('open');

      if (isOpen) {
          $('.toggle_btn').html('<i class="fa-solid fa-xmark"></i>');
      } else {
          $('.toggle_btn').html('<i class="fa-solid fa-bars"></i>');
      }
      
  });
  
  $('.dropdown_menu')
}
);

// // Add this script in your HTML file and make sure to include it after the HTML content.

// // Wait for the DOM to be ready
// document.addEventListener("DOMContentLoaded", function() {
  
//     // Get the navbar element
//     var navbar = document.getElementsByClassName("header"); // Replace 'yourNavbarId' with the actual ID of your navbar

//     // Set the initial state of the navbar
//     setNavbarOpacity();

//     // Listen for scroll events
//     window.addEventListener("scroll", function() {
//       // Update the navbar opacity on scroll
//       console.log("called");
//       setNavbarOpacity();
//     });

//     // Function to set the navbar opacity based on scroll position
//     function setNavbarOpacity() {
//       // Get the current scroll position
//       var scrollPosition = window.scrollY || document.documentElement.scrollTop;

//       // Define the scroll threshold where the navbar becomes opaque
//       var scrollThreshold = 100; // Adjust this value based on your design

//       // Set the navbar opacity based on the scroll position
//       if (scrollPosition > scrollThreshold) {
//         navbar.style.backgroundColor = "rgba(255, 255, 255, 0.9)"; // Set your desired opaque background color
//       } else {
//         navbar.style.backgroundColor = "transparent"; // Set your initial transparent background color
//       }
//     }
//   });

