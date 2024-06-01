document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');
  
    hamburger.addEventListener('click', function() {
      navLinks.classList.toggle('active');
    });
  });

  document.addEventListener("DOMContentLoaded", function() {
    const enrollButton = document.querySelector(".cta-button");
    const institutionSection = document.querySelector(".institution-section");

    enrollButton.addEventListener("click", function() {
        institutionSection.scrollIntoView({ behavior: "smooth" });
    });
});


function sendMail(){
  (function(){
    emailjs.init("mV9ZnARS-bxPrnYXl");
  })();

  var params = {
    name: document.getElementById('name').value,
    parentName: document.getElementById('parentName').value,
    email: document.getElementById('email').value,
    phone: document.getElementById('phone').value,
    message: document.getElementById('message').value
  };

  var serviceID = "service_k80kbgw";
  var templateID = "template_rrl4nph";

  emailjs.send(serviceID, templateID, params)
  .then(function(response) {
    console.log('Email sent successfully', response);
    alert('Thank you! Your message has been sent successfully.');
    document.getElementById('enrollmentForm').reset(); 
  }, function(error) {
    console.error('Email sending failed', error);
    alert('Oops! Something went wrong. Please try again later.');
  });
}

