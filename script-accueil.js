document.addEventListener('DOMContentLoaded', function() {
    // Code JavaScript à exécuter lorsque la page est chargée

    // Gestion de la navigation entre les sections
    const sections = document.querySelectorAll('nav a');
    sections.forEach(section => {
        section.addEventListener('click', function(event) {
            event.preventDefault(); // Empêche le comportement par défaut du lien
            const sectionId = section.getAttribute('href').substring(1); // Obtient l'ID de la section cible
            const targetSection = document.getElementById(sectionId); // Sélectionne la section cible par son ID
            if (targetSection) {
                // Défilement doux jusqu'à la section cible
                window.scrollTo({
                    top: targetSection.offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Code JavaScript supplémentaire ici
});
