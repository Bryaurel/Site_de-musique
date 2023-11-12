document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('form');

    form.addEventListener('submit', function(event) {
        const nom = form.querySelector('input[name="nom"]').value;
        const email = form.querySelector('input[name="email"]').value;
        const motDePasse = form.querySelector('input[name="motdepasse"]').value;

        if (nom === '' || email === '' || motDePasse === '') {
            event.preventDefault(); // Empêche l'envoi du formulaire si des champs sont vides
            alert('Veuillez remplir tous les champs !');
        }
    });
});

document.getElementById("lien-connexion").addEventListener("click", function(event) {
    event.preventDefault(); // Pour éviter la navigation vers une nouvelle page
    document.getElementById("connexion").style.display = "block"; // Afficher le formulaire de connexion
});
