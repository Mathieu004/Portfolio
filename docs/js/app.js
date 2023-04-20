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
        
        setTimeout(function() {
            overlay.style.zIndex = '-30';
        }, 1000);
    }, 3000);
    
};

function preventDefault(e) {
    e.preventDefault();
}

/*----------------------------------------------------------  -------------------------------------------------------------*/

const flecheDroite = document.querySelector('.d');
const flecheGauche = document.querySelector('.g');

const box1 = document.querySelector('.box-swaping1');
const box2 = document.querySelector('.box-swaping2');

flecheGauche.addEventListener("click", function() {
    box1.classList.add('animation1D');
    box2.classList.add('animation2D');
    box2.classList.remove('animation2G');
    box1.classList.remove('animation1G');
  
    setTimeout(() => {
      box2.classList.add('none');
    }, 500);
  });

flecheDroite.addEventListener("click", function() {
    box2.classList.remove('none');
    box2.classList.add('animation2G');
    box1.classList.add('animation1G');
    box1.classList.remove('animation1D');
    box2.classList.remove('animation2D');
})