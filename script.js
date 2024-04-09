document.addEventListener('DOMContentLoaded', function() {
    // Gestion de la soumission du formulaire d'inscription
    const inscriptionForm = document.getElementById('inscription-form');
    if (inscriptionForm) {
        inscriptionForm.addEventListener('submit', function(event) {
            event.preventDefault(); // Empêche l'envoi du formulaire

            // Validation des champs du formulaire
            const nom = inscriptionForm.querySelector('input[name="nom"]').value;
            const email = inscriptionForm.querySelector('input[name="email"]').value;
            const motDePasse = inscriptionForm.querySelector('input[name="motdepasse"]').value;

            if (nom === '' || email === '' || motDePasse === '') {
                alert('Veuillez remplir tous les champs !');
            } else if (!isValidEmail(email)) {
                alert('Veuillez saisir une adresse e-mail valide !');
            } else {
                // Si les données sont valides, vérifiez l'email côté serveur
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
});

// Fonction pour vérifier si l'email est au bon format
function isValidEmail(email) {
    const emailRegex = /\S+@\S+\.\S+/;
    return emailRegex.test(email);
}

// Fonction pour vérifier l'email côté serveur avec une requête AJAX
function checkEmail(email) {
    const xhr = new XMLHttpRequest();
    xhr.open('POST', 'inscription.php', true);
    xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
    xhr.onreadystatechange = function() {
        if (xhr.readyState === 4 && xhr.status === 200) {
            const response = JSON.parse(xhr.responseText);
            if (response.error) {
                const emailError = document.getElementById('email-error');
                if (emailError) {
                    emailError.textContent = response.message;
                }
            } else {
                // Réinitialiser le message d'erreur s'il n'y a pas d'erreur
                const emailError = document.getElementById('email-error');
                if (emailError) {
                    emailError.textContent = '';
                }
                // Rediriger vers la page d'accueil après une inscription réussie
                window.location.href = 'page-accueil.html';
            }
        }
    };
    xhr.send('email=' + email);
}
