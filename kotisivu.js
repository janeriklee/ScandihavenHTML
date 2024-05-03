window.onload = function() {
    const contactDiv = document.querySelector('.contact');

    contactLink.addEventListener('click', function(event) {
      event.preventDefault();
      const contactContainer = document.querySelector('#contact');
      contactContainer.scrollIntoView({ behavior: 'smooth' });
    });
  }