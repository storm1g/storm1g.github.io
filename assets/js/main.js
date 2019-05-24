var modalContent = {
  fillModal(item) {
    const modalTitle = document.querySelector(".modal-info h2");
    const modalDetails = document.querySelector(".modal-info p");
    const modalPicture = document.querySelector(".modal-content img");
  
    modalTitle.innerText = this[item].title;
    modalDetails.innerText = this[item].details;
    modalPicture.src = `/assets/img/${this[item].img}`;
  },
  wotStats: {
    img: 'wot-stats.jpg',
    title: 'World of Tanks Statistics',
    details: 'Aliquam massa nunc, feugiat a nulla non, mollis rhoncus purus. Sed sit amet diam ipsum. Curabitur in turpis lorem. Proin dapibus vitae ipsum eu fringilla. Sed et ligula augue. Nam finibus mauris ex, ut gravida justo iaculis vitae. Suspendisse varius, libero vitae aliquet egestas, odio dolor viverra nibh, sed suscipit lacus ligula at elit.',
    tech: '',
    live: 'http://storm.eu5.org/',
    source: 'https://github.com/storm1g/world-of-tanks-stats'
  },
  bimboland: {
    img: 'bimboland.jpg',
    title: 'Browser Game Chrome Extension',
    details: 'Aliquam massa nunc, feugiat a nulla non, mollis rhoncus purus. Sed sit amet diam ipsum. Curabitur in turpis lorem. Proin dapibus vitae ipsum eu fringilla. Sed et ligula augue. Nam finibus mauris ex, ut gravida justo iaculis vitae. Suspendisse varius, libero vitae aliquet egestas, odio dolor viverra nibh, sed suscipit lacus ligula at elit.',
    tech: '',
    live: '',
    source: 'https://github.com/storm1g/bimboland-extension'
  },
  weatherApp: {
    img: 'weatherapp.gif',
    title: 'Weather App',
    details: 'Aliquam massa nunc, feugiat a nulla non, mollis rhoncus purus. Sed sit amet diam ipsum. Curabitur in turpis lorem. Proin dapibus vitae ipsum eu fringilla. Sed et ligula augue. Nam finibus mauris ex, ut gravida justo iaculis vitae. Suspendisse varius, libero vitae aliquet egestas, odio dolor viverra nibh, sed suscipit lacus ligula at elit.',
    tech: '',
    live: '',
    source: 'https://github.com/storm1g/weather-app'
  },
  todoApp: {
    img: 'todo.gif',
    title: 'ToDo App',
    details: 'Aliquam massa nunc, feugiat a nulla non, mollis rhoncus purus. Sed sit amet diam ipsum. Curabitur in turpis lorem. Proin dapibus vitae ipsum eu fringilla. Sed et ligula augue. Nam finibus mauris ex, ut gravida justo iaculis vitae. Suspendisse varius, libero vitae aliquet egestas, odio dolor viverra nibh, sed suscipit lacus ligula at elit.',
    tech: '',
    live: 'https://storm1g.github.io/todo-list/',
    source: 'https://github.com/storm1g/todo-list'
  },
  colorGame: {
    img: 'colorgame.gif',
    title: 'RGB Color Guessing Game',
    details: 'Aliquam massa nunc, feugiat a nulla non, mollis rhoncus purus. Sed sit amet diam ipsum. Curabitur in turpis lorem. Proin dapibus vitae ipsum eu fringilla. Sed et ligula augue. Nam finibus mauris ex, ut gravida justo iaculis vitae. Suspendisse varius, libero vitae aliquet egestas, odio dolor viverra nibh, sed suscipit lacus ligula at elit.',
    tech: '',
    live: 'https://storm1g.github.io/color-game/',
    source: 'https://github.com/storm1g/color-game'
  },
  patatap: {
    img: 'patatap.gif',
    title: 'Patatap Clone',
    details: 'Aliquam massa nunc, feugiat a nulla non, mollis rhoncus purus. Sed sit amet diam ipsum. Curabitur in turpis lorem. Proin dapibus vitae ipsum eu fringilla. Sed et ligula augue. Nam finibus mauris ex, ut gravida justo iaculis vitae. Suspendisse varius, libero vitae aliquet egestas, odio dolor viverra nibh, sed suscipit lacus ligula at elit.',
    tech: '',
    live: 'https://storm1g.github.io/patatap-clone/',
    source: 'https://github.com/storm1g/patatap-clone'
  },
  lvlupdater: {
    img: 'lvlupdater.gif',
    title: 'Lvlupdater',
    details: 'Aliquam massa nunc, feugiat a nulla non, mollis rhoncus purus. Sed sit amet diam ipsum. Curabitur in turpis lorem. Proin dapibus vitae ipsum eu fringilla. Sed et ligula augue. Nam finibus mauris ex, ut gravida justo iaculis vitae. Suspendisse varius, libero vitae aliquet egestas, odio dolor viverra nibh, sed suscipit lacus ligula at elit.',
    tech: '',
    live: '',
    source: ''
  }
};


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
      
      modalContent.fillModal(currentItem);
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

function fillModal(item) {
  const modalTitle = document.querySelector(".modal-info h2");
  const modalDetails = document.querySelector(".modal-info p");
  const modalPicture = document.querySelector(".modal-content img");

  modalTitle.innerText = modalContent[item].title;
  modalDetails.innerText = modalContent[item].details;
  modalPicture.src = `/assets/img/${modalContent[item].img}`;
};