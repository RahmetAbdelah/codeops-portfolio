const form = document.getElementById('signupForm');
const nameInput = document.getElementById('name');
const phoneInput = document.getElementById('phone');
const errorMessage = document.getElementById('errorMessage');

form.addEventListener('submit', function (e) {
  e.preventDefault();
  errorMessage.textContent = '';

  const nameVal = nameInput.value.trim();
  const phoneVal = phoneInput.value.trim();
  
  console.log('Submitted:', nameVal, phoneVal);
});