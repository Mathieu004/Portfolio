const overlay = document.querySelector('.overlay');
const body = document.querySelector('body');

window.onload = function() {
    overlay.classList.remove('hidden');
    body.style.overflow = 'hidden';
    window.scrollTo(0, 0);

    document.addEventListener('wheel', preventDefault, { passive: false });
    setTimeout(function() {
        document.removeEventListener('wheel', preventDefault);
        body.style.overflow = '';
        overlay.classList.add('hidden');
      }, 3000); 
};

function preventDefault(e) {
    e.preventDefault();
}

/*----------------------------------------------------------  -------------------------------------------------------------*/
