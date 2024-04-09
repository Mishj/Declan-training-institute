document.addEventListener('DOMContentLoaded', function() {
    const menuButton = document.querySelector('.hamburger');
    const menu = document.getElementById('menu');
  
    menuButton.addEventListener('click', function() {
      menu.classList.toggle('showlink');
    });
  });