// Contact Form Submission Message
document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector("form");
    
    if (form) {
      form.addEventListener("submit", function (e) {
        e.preventDefault(); // Stop form from refreshing the page
  
        alert("Thanks for reaching out! We'll get back to you soon.");
        form.reset(); // Clears the form fields
      });
    }
  });