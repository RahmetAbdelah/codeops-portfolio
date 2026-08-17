const form = document.getElementById('signupForm');
const nameInput = document.getElementById('name');
const phoneInput = document.getElementById('phone');
const errorMessage = document.getElementById('errorMessage');
const signupCount = document.getElementById('signupCount');

// Ethiopian Phone Regex: Accepts +251..., 251..., or 07... / 09... followed by 8 digits
const ethiopianPhoneRegex = /^(?:\+251|251|0)(9|7)\d{8}$/;

// Load existing signups from localStorage
function getSignups() {
  const data = localStorage.getItem('signups');
  return data ? JSON.parse(data) : [];
}

// Display signup count on load
function updateSignupCount() {
  const signups = getSignups();
  signupCount.textContent = `Total people signed up: ${signups.length}`;
}

// Handle Form Submission
form.addEventListener('submit', function (e) {
  e.preventDefault();
  errorMessage.textContent = '';

  const nameVal = nameInput.value.trim();
  const phoneVal = phoneInput.value.trim();

  // Validation 1: Name length
  if (nameVal.length < 2) {
    errorMessage.textContent = 'Name must be at least 2 characters long.';
    return;
  }

  // Validation 2: Ethiopian Phone Regex
  if (!ethiopianPhoneRegex.test(phoneVal)) {
    errorMessage.textContent = 'Please enter a valid Ethiopian phone number (e.g., +251912345678 or 0912345678).';
    return;
  }

  // Save to localStorage as JSON
  const signups = getSignups();
  signups.push({ name: nameVal, phone: phoneVal, date: new Date().toISOString() });
  localStorage.setItem('signups', JSON.stringify(signups));

  // Reset form & update count
  form.reset();
  updateSignupCount();
});

// Initialize count on page load
document.addEventListener('DOMContentLoaded', updateSignupCount);