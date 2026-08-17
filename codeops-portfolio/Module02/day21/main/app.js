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

// Ethiopian Phone Regex: +251..., 251..., or 09.../07... followed by 8 digits
const ethiopianPhoneRegex = /^(?:\+251|251|0)(9|7)\d{8}$/;

form.addEventListener('submit', function (e) {
  e.preventDefault();
  errorMessage.textContent = '';

  const nameVal = nameInput.value.trim();
  const phoneVal = phoneInput.value.trim();

  // Validate name length
  if (nameVal.length < 2) {
    errorMessage.textContent = 'Name must be at least 2 characters long.';
    return;
  }

  // Validate Ethiopian phone number
  if (!ethiopianPhoneRegex.test(phoneVal)) {
    errorMessage.textContent = 'Please enter a valid Ethiopian phone number (e.g., +251912345678 or 0912345678).';
    return;
  }
});
function getSignups() {
  const data = localStorage.getItem('signups');
  return data ? JSON.parse(data) : [];
}

// Inside the form submit handler (after successful validation):
const signups = getSignups();
signups.push({ name: nameVal, phone: phoneVal, date: new Date().toISOString() });
localStorage.setItem('signups', JSON.stringify(signups));

form.reset();
const signupCount = document.getElementById('signupCount');

function updateSignupCount() {
  const signups = getSignups();
  signupCount.textContent = `Total people signed up: ${signups.length}`;
}


document.addEventListener('DOMContentLoaded', updateSignupCount);