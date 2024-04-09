document.addEventListener('DOMContentLoaded', function() {
    // Gestion de la soumission du formulaire d'inscription
    const inscriptionForm = document.getElementById('inscription-form');
    if (inscriptionForm) {
        inscriptionForm.addEventListener('submit', function(event) {
            // Validation des champs du formulaire
            const nom = inscriptionForm.querySelector('input[name="nom"]').value;
            const email = inscriptionForm.querySelector('input[name="email"]').value;
            const motDePasse = inscriptionForm.querySelector('input[name="motdepasse"]').value;

            if (nom === '' || email === '' || motDePasse === '') {
                event.preventDefault(); // Empêche l'envoi du formulaire si des champs sont vides
                alert('Veuillez remplir tous les champs !');
            } else {
                // Si tous les champs sont remplis, vérifiez l'email
                checkEmail(email);
            }
        });
    }

    // Gestion du clic sur le lien de connexion
    const lienConnexion = document.getElementById('lien-connexion');
    if (lienConnexion) {
        lienConnexion.addEventListener('click', function(event) {
            event.preventDefault(); // Pour éviter la navigation vers une nouvelle page
            const formulaireInscription = document.getElementById('inscription');
            const formulaireConnexion = document.getElementById('connexion');
            
            if (formulaireInscription && formulaireConnexion) {
                formulaireInscription.style.display = "none"; // Masquer le formulaire d'inscription
                formulaireConnexion.style.display = "block"; // Afficher le formulaire de connexion
            }
        });
    }
    
    function checkEmail(email) {
        // Effectuez une requête AJAX pour vérifier si l'email est déjà utilisé
        // Si l'email est déjà utilisé, mettez à jour le message d'erreur
        const emailError = document.getElementById('email-error');
        if (emailError) {
            // Vous pouvez remplacer cette ligne par votre propre code AJAX pour vérifier l'email
            const emailExists = false; // Remplacez par le résultat de la vérification de l'email
            if (emailExists) {
                emailError.textContent = 'Cette adresse e-mail est déjà utilisée. Veuillez en utiliser une autre.';
            } else {
                emailError.textContent = ''; // Effacez le message d'erreur s'il n'y a pas d'erreur
            }
        }
    }
});
