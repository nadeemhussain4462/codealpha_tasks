// Handle form submission and show popup
document.getElementById('contact-form').addEventListener('submit', function (e) {
  e.preventDefault();

  // Clear the form after submission
  document.getElementById('contact-form').reset();

  // Show the popup message
  document.getElementById('popup').style.display = 'flex';
});

// Close the popup
function closePopup() {
  document.getElementById('popup').style.display = 'none';
}
