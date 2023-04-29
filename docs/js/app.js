/*---------------------------------------------------------- OVERLAY -------------------------------------------------------------*/

const overlay = document.querySelector('.overlay');
const body = document.querySelector('body');

//Remonte le site en haut lors du reload de page et affiche l'overlay
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

// Pour supprimer la barre de defilement verticale durant l'animation overlay
function preventDefault(e) {
    e.preventDefault();
}

/*---------------------------------------------------------- SLIDE COMPETENCES -------------------------------------------------------------*/

const flecheDroite = document.querySelector('.d');
const flecheGauche = document.querySelector('.g');

const box1 = document.querySelector('.box-swaping1');
const box2 = document.querySelector('.box-swaping2');
const box3 = document.querySelector('.box-swaping3');

// slide 1 = slide visible
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
    const h3 = event.currentTarget.querySelector('h3');
    const p = event.currentTarget.querySelector('p');
    const a = event.currentTarget.querySelector('a');

    // Reclick sur la meme box
    if (lastClickedBox !== null && lastClickedBox === event.currentTarget) {
      console.log('Reclick sur la meme box');
      lastClickedBox.classList.remove('backCard');
      lastClickedBox.classList.add('frontCard');

      images.forEach(img => {
        img.classList.remove('op');
        img.classList.add('op2');
      });
      h3.classList.remove('op');
      h3.classList.add('op2');

      p.classList.remove('op2');
      p.classList.add('op');

      a.classList.remove('op');
      a.classList.add('op2');
      
      setTimeout(() => {
        p.classList.add('none');
        setTimeout(() => {
          images.forEach(img => {
            img.classList.remove('none');
          });
          h3.classList.remove('none');
          a.classList.remove('none');
        }, 200);
      }, 375);

      setTimeout(() => {
        images.forEach(img => {
          img.classList.remove('op2');
        });
        h3.classList.remove('op2');
        a.classList.remove('op2');
        lastClickedBox.classList.remove('frontCard');
      }, 2000);
      lastClickedBox = null;
      return;
    }
    
    // Click sur une autre box apres avoir deja clické sur une box
    if (lastClickedBox !== null && lastClickedBox !== event.currentTarget) {
      console.log('Click sur une autre box apres avoir deja clické sur une box');
      const lastH3 = lastClickedBox.querySelector('h3');
      const lastA = lastClickedBox.querySelector('a');
      const lastP = lastClickedBox.querySelector('p');
      const lastImages = lastClickedBox.querySelectorAll('img');
      
      lastClickedBox.classList.remove('backCard');
      lastClickedBox.classList.add('frontCard');

      lastImages.forEach(img => {
        img.classList.remove('op');
        img.classList.add('op2');
      });
      lastH3.classList.remove('op');
      lastH3.classList.add('op2');

      lastP.classList.remove('op2');
      lastP.classList.add('op');

      lastA.classList.remove('op');
      lastA.classList.add('op2');
      
      setTimeout(() => {
        lastP.classList.add('none');
        setTimeout(() => {
          lastImages.forEach(img => {
            img.classList.remove('none');
          });
          lastH3.classList.remove('none');
          lastA.classList.remove('none');
        }, 200);
      }, 375);

      setTimeout(() => {
        lastImages.forEach(img => {
          img.classList.remove('op2');
        });
        lastH3.classList.remove('op2');
        lastA.classList.remove('op2');
        lastClickedBox.classList.remove('frontCard');
      }, 2000);
      lastClickedBox = null;
      box.click();
      return;
    }

    // Retournement de box
    else {
      console.log('Retournement de box');
      images.forEach(img => {
        img.classList.add('op');
      });
      h3.classList.add('op');
      a.classList.add('op');
      p.classList.remove('op');
      p.classList.add('op2');
      setTimeout(() => {
        p.classList.remove('none');
        h3.classList.add('none');
        a.classList.add('none');
        images.forEach(img => {
          img.classList.add('none')
        });
      }, 375);
      event.currentTarget.classList.add('backCard');
      // Enregistre la dernière box cliquée
      lastClickedBox = event.currentTarget;
      return;
    }  
  });
});
