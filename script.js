// JavaScript to toggle the visibility of the contact information
const toggleButton = document.getElementById('toggleButton');
const contactInfo = document.getElementById('contactInfo');

toggleButton.addEventListener('click', () => {
  if (contactInfo.style.display === 'none' || contactInfo.style.display === '') {
    contactInfo.style.display = 'block';
    toggleButton.textContent = 'Mostrar Menos';
  } else {
    contactInfo.style.display = 'none';
    toggleButton.textContent = 'Mostrar Mais';
  }
});



