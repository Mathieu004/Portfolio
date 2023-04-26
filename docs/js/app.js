/*---------------------------------------------------------- OVERLAY -------------------------------------------------------------*/

const overlay = document.querySelector('.overlay');
const body = document.querySelector('body');

window.onload = function() {
    overlay.classList.remove('hidden');
    body.style.overflow = 'hidden';
    window.scrollBy(0, -1 * window.pageYOffset);

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

/*---------------------------------------------------------- SLIDE COMPETENCES -------------------------------------------------------------*/

const flecheDroite = document.querySelector('.d');
const flecheGauche = document.querySelector('.g');

const box1 = document.querySelector('.box-swaping1');
const box2 = document.querySelector('.box-swaping2');
const box3 = document.querySelector('.box-swaping3');

let numeroSlide = 1;

flecheGauche.addEventListener("click", function() {
    if(numeroSlide === 2) {
        box1.classList.add('animation1-1');
        box2.classList.add('animation2-2');
        box2.classList.remove('animation2-1G');
        box2.classList.remove('animation2-1D');
        box1.classList.remove('animation1-0');
        setTimeout(() => {
            box2.classList.add('none');
        }, 500);
        numeroSlide = 1;
    }
    else if(numeroSlide === 3) {
      box2.classList.remove('none');
      box2.classList.add('animation2-1G');
      box3.classList.add('animation3-3');
      box2.classList.remove('animation2-0');
      box3.classList.remove('animation3-1');
      setTimeout(() => {
          box3.classList.add('none');
      }, 500);
      numeroSlide = 2;
    }
  });

flecheDroite.addEventListener("click", function() {
    if(numeroSlide === 1) {
        box2.classList.remove('none');
        box2.classList.add('animation2-1D');
        box1.classList.add('animation1-0');
        box1.classList.remove('animation1-1');
        box2.classList.remove('animation2-2');
        numeroSlide = 2;
    }
    else if(numeroSlide === 2) {
      box3.classList.remove('none');
      box3.classList.add('animation3-1');
      box2.classList.add('animation2-0');
      box2.classList.remove('animation2-1G');
      box2.classList.remove('animation2-1D');
      box3.classList.remove('animation3-3');
      setTimeout(() => {
        box2.classList.add('none');
      }, 500);
      numeroSlide = 3;
  }
})

let lastClickedBox = null;

const boxes = document.querySelectorAll('.box');

boxes.forEach(box => {
  box.addEventListener('click', function(event) {
    const images = event.currentTarget.querySelectorAll('img');
    const h1 = event.currentTarget.querySelector('h1');
    
    if (lastClickedBox !== null && lastClickedBox !== event.currentTarget) {
      // Inverse l'état de la dernière box cliquée
      const lastImages = lastClickedBox.querySelectorAll('img');
      lastImages.forEach(img => {
        img.classList.remove('none');
      });
      lastClickedBox.classList.remove('backCard');
    }

    if (lastClickedBox !== null && lastClickedBox === event.currentTarget) {
        // Inverse l'état de la dernière box cliquée
        const lastImages = lastClickedBox.querySelectorAll('img');
        lastImages.forEach(img => {
          img.classList.remove('none');
        });
        lastClickedBox.classList.remove('backCard');
        lastClickedBox.classList.add('frontCard');
      }
    
    images.forEach(img => {
      img.classList.add('none');
    });
    
    event.currentTarget.classList.toggle('backCard');
    
    // Enregistre la dernière box cliquée
    lastClickedBox = event.currentTarget;
  });
});
