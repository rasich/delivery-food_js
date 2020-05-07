const cartButton = document.querySelector("#cart-button");
const modal = document.querySelector(".modal");
const close = document.querySelector(".close");

cartButton.addEventListener("click", toggleModal);
close.addEventListener("click", toggleModal);

function toggleModal() {
  modal.classList.toggle("is-open");
}



// day 1

const buttonAuth = document.querySelector('.button-auth');
const modalAuth = document.querySelector('.modal-auth');
const closeAuth = document.querySelector('.close-auth');
const logInForm = document.querySelector('#logInForm');
const logInput = document.querySelector('#login');

const userName = document.querySelector('.user-name');
const buttonOut = document.querySelector('.button-out');


let login = localStorage.getItem('Delivery');

function toogleModalAuth() {
  modalAuth.classList.toggle('is-open');

  // modalAuth.style.display = 'none';
}

function autorized() {

  function logOut() {
    login = null;
    localStorage.removeItem('Delivery');

    buttonAuth.style.display = '';
    userName.style.display = '';
    buttonOut.style.display = '';

    buttonOut.removeEventListener('click', logOut);

    
    checkAuth();
  }

  console.log('Авторизован');  
  
  userName.textContent = login;

  buttonAuth.style.display = 'none';
  userName.style.display = 'inline';
  buttonOut.style.display = 'block';

  buttonOut.addEventListener('click', logOut);
}

function notAutorized() {
  console.log('не авторизован');  

  function logIn(event) {
    event.preventDefault();
    login = logInput.value;

    localStorage.setItem('Delivery', login);

    toogleModalAuth();

    buttonAuth.removeEventListener('click', toogleModalAuth);
    closeAuth.removeEventListener('click', toogleModalAuth);
    logInForm.removeEventListener('submit', logIn);
    logInForm.reset();

    checkAuth();
  }
  
  buttonAuth.addEventListener('click', toogleModalAuth);
  closeAuth.addEventListener('click', toogleModalAuth);
  logInForm.addEventListener('submit', logIn);
}


function checkAuth() {
  if (login) {
    autorized();
  } else {
    notAutorized();
  }
}
checkAuth();