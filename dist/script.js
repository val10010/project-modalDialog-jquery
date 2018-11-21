(function () {
  const buttonTop = document.querySelector('.ButtonTop');
  const modals = document.querySelectorAll('.modal');

  // show modal
  buttonTop.addEventListener('click', (event) => {
    event.preventDefault();
    modals.forEach((modal) => {
      if (event.target.dataset.show == modal.dataset.show) {
        modal.classList.remove('hide');
        document.body.style.background = 'rgba(0,0,0,0.8)';
        buttonTop.classList.add('hide');
      }
    });
  });

  // add closer img
  modals.forEach((modal) => {
    const img = document.createElement('img');
    img.src = 'img/icon-popup-close.svg';
    img.setAttribute('data-cancel', 'closeModal');
    modal.insertBefore(img, modal.firstChild);
  });

  // close modal
  modals.forEach((modal) => {
    modal.addEventListener('click', (event) => {
      event.preventDefault();
      if (event.target.dataset.cancel == 'closeModal') {
        modal.classList.add('hide');
        document.body.style.removeProperty('background');
        buttonTop.classList.remove('hide');
      }
      if (event.target.dataset.unistal) {
        modal.classList.add('hide');
        document.body.style.removeProperty('background');
        setTimeout("alert('Unistal')", 100);
        buttonTop.classList.remove('hide');
      }
      if (event.target.dataset.install) {
        modal.classList.add('hide');
        document.body.style.removeProperty('background');
        setTimeout("alert('Install')", 100);
        buttonTop.classList.remove('hide');
      }
    });
    document.addEventListener('click', (event) => {
      console.log(event.target);
      if(event.target == document.body){
        modal.classList.add('hide');
        document.body.style.removeProperty('background');
        buttonTop.classList.remove('hide');
      }
    });
  });
}());
