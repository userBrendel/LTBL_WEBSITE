
document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');
  
    hamburger.addEventListener('click', function() {
      navLinks.classList.toggle('active');
    });
  });

  
  document.addEventListener("DOMContentLoaded", function() {
    const elementsToAnimate = document.querySelectorAll('.fade-in, .slide-in-left, .slide-in-right');

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });

    elementsToAnimate.forEach(element => {
        observer.observe(element);
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

