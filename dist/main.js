//Make form Responsive


  const toggleButton = document.getElementById('mobile-toggle');
  const mobileMenu = document.getElementById('mobile-menu');
  const lighttoggle = document.getElementById('light-toggle');

  toggleButton.addEventListener('click', () => {
    toggleButton.innerHTML =`img class="bg-interBlack" src="../icons/cancel.svg" alt="downloadicon">`
    mobileMenu.classList.remove('hidden');
    lighttoggle.classList.toggle('hidden')
  });

  const navButton = document.getElementById('nav-button');
  navButton.addEventListener('click', () => {
      mobileMenu.classList.add('hidden')
          toggleButton.innerHTML =`img class="bg-interBlack" src="../icons/hamburger.svg" alt="downloadicon">`
  })



const inputName = document.querySelector('.js-inputName');
const inputEmail = document.querySelector('.js-inputEmail');
const inputMessage = document.querySelector('.js-inputMessage');

function submitButton() {
  if(inputName.value === '') {
    inputName.style.borderColor = 'red'

  }; 
  if(inputEmail.value === ''){
    // inputEmail.style.borderColor ='red';
    inputEmail.style.borderColor = 'red'
  };
  if(inputMessage === '') {
    inputMessage.style.borderColor = 'red'
  }

  //Check if the input are filled
  if(inputName.value !== '' && inputEmail.value !=='' && inputMessage !== '') {
    alert('Message Sent');
    inputEmail.value = '';
    inputName.value = '';
    inputMessage.value = '' ;
  }
}