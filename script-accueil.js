// script.js
document.querySelector('.navbar').addEventListener('mouseover', function() {
    this.style.left = '0'; // Dérouler la barre de navigation
});

document.querySelector('.navbar').addEventListener('mouseout', function() {
    this.style.left = '-80px'; // Cacher la barre de navigation
});

// Changer la section active
document.querySelectorAll('.icon').forEach(icon => {
    icon.addEventListener('click', function() {
        document.querySelector('.icon.active').classList.remove('active');
        this.classList.add('active');
    });
});

// Bouton jour/nuit
const toggleButton = document.createElement('button');
toggleButton.textContent = 'Mode Jour/Nuit';
toggleButton.addEventListener('click', function() {
    document.body.classList.toggle('night-mode');
});
document.body.appendChild(toggleButton);
