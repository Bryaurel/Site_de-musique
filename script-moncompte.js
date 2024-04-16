document.addEventListener('DOMContentLoaded', function() {
    const selectNationalite = document.getElementById('nationalite');
    
    // Fetch de la liste des pays depuis l'API
    fetch('https://restcountries.com/v3.1/all')
        .then(response => response.json())
        .then(data => {
            // Tri des pays par ordre alphabétique
            data.sort((a, b) => a.name.common.localeCompare(b.name.common));

            data.forEach(country => {
                const option = document.createElement('option');
                option.value = country.name.common;
                option.textContent = country.name.common;
                selectNationalite.appendChild(option);
            });
        })
        .catch(error => console.error('Erreur lors du chargement des pays : ', error));
});

document.addEventListener('DOMContentLoaded', function() {
    const selectGenres = document.getElementById('genres');
    
    // Liste des genres musicaux
    const genres = [
        'Rock',
        'Pop',
        'Hip Hop',
        'Jazz',
        'Blues',
        'R&B',
        'Reggae',
        'Country',
        'Electronic',
        'Classical',
        'Folk',
        'Indie',
        'Metal',
        'Punk',
        'Soul',
        'Funk',
        'Alternative',
        'Dance',
        'Gospel',
        'World',
        'Experimental',
        'Ambient',
        'Techno',
        'House',
        'Trance'
        // Ajoutez d'autres genres musicaux selon vos besoins
    ];

    // Ajout des genres à la sélection
    genres.forEach(genre => {
        const option = document.createElement('option');
        option.value = genre;
        option.textContent = genre;
        selectGenres.appendChild(option);
    });
    
});

const express = require('express');
const multer = require('multer'); // Middleware pour le traitement des fichiers

const app = express();
const upload = multer({ dest: 'uploads/' }); // Dossier de destination pour stocker les fichiers téléchargés

app.post('/upload', upload.single('photo'), (req, res) => {
    // Traitement du fichier téléchargé
    const file = req.file;

    // Validation du fichier
    if (!file || !file.mimetype.startsWith('image/')) {
        return res.status(400).json({ error: 'Veuillez télécharger une image.' });
    }

    // Stockage du fichier (ex : renommer et déplacer le fichier)
    const filename = `${Date.now()}_${file.originalname}`;
    // fs.renameSync(file.path, `uploads/${filename}`);

    // Mise à jour de la base de données (si nécessaire)

    // Réponse au client
    res.json({ filename: filename });
});

app.listen(3000, () => {
    console.log('Serveur démarré sur le port 3000');
});

// Fonction pour récupérer les données du formulaire et les stocker
function enregistrerProfil(event) {
    event.preventDefault(); // Empêcher le rechargement de la page lors de la soumission du formulaire
    
    // Récupération des valeurs des champs du formulaire
    const firstName = document.getElementById('firstName').value;
    const lastName = document.getElementById('lastName').value;
    const username = document.getElementById('username').value;
    const birthdate = document.getElementById('birthdate').value;
    const birthplace = document.getElementById('birthplace').value;
    const nationality = document.getElementById('nationalite').value;
    const city = document.getElementById('city').value;
    const country = document.getElementById('country').value;
    const bio = document.getElementById('bio').value;
    const musicGenres = Array.from(document.getElementById('genres').selectedOptions).map(option => option.value);
    // const photo = document.getElementById('photo').files[0]; // Récupérer le fichier photo

    // Créer un objet avec les données du formulaire
    const profileData = {
        firstName: firstName,
        lastName: lastName,
        username: username,
        birthdate: birthdate,
        birthplace: birthplace,
        nationality: nationality,
        city: city,
        country: country,
        bio: bio,
        musicGenres: musicGenres,
        // photo: photo
    };

    // Stocker les données dans le stockage local (localStorage) pour les utiliser sur la page profil.html
    localStorage.setItem('profileData', JSON.stringify(profileData));

    // Redirection vers la page profil.html
    window.location.href = 'profil.html';
}

// Ajouter un écouteur d'événement pour la soumission du formulaire
document.getElementById('profileForm').addEventListener('submit', enregistrerProfil);