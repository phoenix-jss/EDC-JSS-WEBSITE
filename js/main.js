class TypeWriter {
  constructor(txtElement, words, wait = 3000) {
    this.txtElement = txtElement;
    this.words = words;
    this.txt = '';
    this.wordIndex = 0;
    this.wait = parseInt(wait, 10);
    this.type();
    this.isDeleting = false;
  }

  type() {
    // Current index of word
    const current = this.wordIndex % this.words.length;
    // Get full text of current word
    const fullTxt = this.words[current];

    // Check if deleting
    if(this.isDeleting) {
      // Remove char
      this.txt = fullTxt.substring(0, this.txt.length - 1);
    } else {
      // Add char
      this.txt = fullTxt.substring(0, this.txt.length + 1);
    }

    // Insert txt into element
    this.txtElement.innerHTML = `<span class="txt">${this.txt}</span>`;

    // Initial Type Speed
    let typeSpeed = 300;

    if(this.isDeleting) {
      typeSpeed /= 2;
    }

    // If word is complete
    if(!this.isDeleting && this.txt === fullTxt) {
      // Make pause at end
      typeSpeed = this.wait;
      // Set delete to true
      this.isDeleting = true;
    } else if(this.isDeleting && this.txt === '') {
      this.isDeleting = false;
      // Move to next word
      this.wordIndex++;
      // Pause before start typing
      typeSpeed = 500;
    }

    setTimeout(() => this.type(), typeSpeed);
  }
}


// Init On DOM Load
document.addEventListener('DOMContentLoaded', init);

// Init App
function init() {
  const txtElement = document.querySelector('.txt-type');
  const words = JSON.parse(txtElement.getAttribute('data-words'));
  const wait = txtElement.getAttribute('data-wait');
  // Init TypeWriter
  new TypeWriter(txtElement, words, wait);
}


//scroll reveal
window.sr = ScrollReveal();
        sr.reveal('.intro-text', {
          duration: 2000,
          origin:'top',
          distance:'300px'
        });
        sr.reveal('.intro-img', {
          duration: 2000,
          origin:'right',
          distance:'300px'
        });
        sr.reveal('.card-group', {
          duration: 2000,
          delay: 1000,
          origin:'bottom'
        });
        
        sr.reveal('.latest', {
          duration: 2000,
          delay:500,
          origin:'bottom',
          distance:'300px'
        });
        sr.reveal('.snip1', {
          duration: 3000,
          origin:'right',
          delay:500,
          distance:'300px'
        });
        sr.reveal('.snip2', {
          duration: 3000,
          origin:'left',
          delay:500,
          distance:'300px'
        });

        sr.reveal('.footer', {
          duration: 1000,
          origin:'bottom'
        });

        var isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
        if (isMobile) {
          sr.reveal('.intro-img', {
            duration: 2000,
            origin:'bottom',
            distance:'300px'
          });
          sr.reveal('.footer', {
            duration: 500,
            origin:'bottom'
          });
        } 