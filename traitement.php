<?php
// Vérifier si le formulaire a été soumis
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Connexion à la base de données
    
    $serveur = "BryAurel";
    $port = 3306;
    $utilisateur = "root";
    $motdepasse = "Basketball";
    $base_de_donnees = "musique";
    
    $connexion = new mysqli($serveur, $utilisateur, $motdepasse, $base_de_donnees, $port);
    
    // Vérifier la connexion
    
    if ($connexion->connect_error) {
        die("Échec de la connexion à la base de données : " . $connexion->connect_error);
    } else {
        echo "Connexion réussie !"; // Affiche un message si la connexion est réussie
    }

    // Récupérer les données du formulaire
    $prenom = $_POST["prenom"];
    $nom = $_POST["nom"];
    $email = $_POST["email"];
    $motdepasse = password_hash($_POST["motdepasse"], PASSWORD_DEFAULT); // Hacher le mot de passe

    // Préparer la requête SQL pour l'insertion des données
    $requete = $connexion->prepare("INSERT INTO utilisateurs (prenom, nom, email, mot_de_passe) VALUES (?, ?, ?, ?)");
    $requete->bind_param("ssss", $prenom, $nom, $email, $motdepasse);

    // Exécuter la requête
    if ($requete->execute()) {
        echo "Inscription réussie !";
        // Après l'insertion réussie des données, redirige vers la page d'accueil
        header("Location: page-accueil.html");
        exit();
    } else {
        echo "Erreur lors de l'inscription : " . $requete->error;
    }

    // Fermer la connexion à la base de données
    $connexion->close();
}
?>
