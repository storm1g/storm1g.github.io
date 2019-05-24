init ();

function init() {
  openModal();
  closeModal();
}


// 'Learn More' button opens a modal with more info
function openModal() {
  let modalBtns = document.querySelectorAll(".item-btn");
  const modalWindow = document.querySelector(".modal");
  const modalInfo = document.querySelector(".modal-info");
  
  // add event listeners to all 'Learn More' buttons
  modalBtns.forEach(function(btn){
    btn.addEventListener('click', function(event){
      let currentItem = this.parentNode.parentNode.id;

      event.preventDefault();
      // "open" the modal by setting its opacity and visibility to 1/visible using a css class
      modalWindow.classList.add('show');
      
      
    });
  });
};

  // "close" the modal by pressing the close button (X) or the overlay outside of content area
function closeModal() {
  let closeBtn = document.querySelector('.modal-close');
  let modalOverlay = document.querySelector('.modal-overlay');

  // close button event listener
  closeBtn.addEventListener('click', function(){
    modalOverlay.parentNode.classList.remove('show');
  });

  // overlay event listener
  modalOverlay.addEventListener('click', function(){
    this.parentNode.classList.remove('show');
  });
};