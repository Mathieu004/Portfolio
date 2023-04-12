const overlay = document.querySelector('.overlay');

window.onload = function() {
    overlay.classList.remove('hidden');
    window.scrollTo(0, 0);
    setTimeout(function() {
        overlay.classList.add('hidden');
      }, 3000); 
};

