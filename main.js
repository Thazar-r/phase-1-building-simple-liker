// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!
document.addEventListener('DOMContentLoaded', () => {
  const modal = document.getElementById('modal');
  modal.classList.add('hidden'); // Initially hide the modal

  const likeGlyphs = document.querySelectorAll('.like-glyph');

  likeGlyphs.forEach(likeGlyph => {
    likeGlyph.addEventListener('click', () => {
      if (likeGlyph.innerText === EMPTY_HEART) {
        mimicServerCall()
          .then(() => {
            likeGlyph.innerText = FULL_HEART;
            likeGlyph.classList.add('activated-heart');
          })
          .catch(error => {
            modal.classList.remove('hidden');
            const modalMessage = document.getElementById('modal-message');
            modalMessage.innerText = error;
            setTimeout(() => {
              modal.classList.add('hidden');
            }, 3000);
          });
      } else if (likeGlyph.innerText === FULL_HEART) {
        likeGlyph.innerText = EMPTY_HEART;
        likeGlyph.classList.remove('activated-heart');
      }
    });
  });
});




//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}

