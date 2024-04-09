<?php
// Connexion à la base de données
$servername = "127.0.0.1"; // Nom d'hôte (Local)
$username = "root"; // Nom d'utilisateur
$password = "Basketball2.0"; // Mot de passe
$dbname = "musique"; // Nom de la base de données

// Vérifier si le formulaire de connexion est soumis
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Récupérer les données du formulaire de connexion
    $email = $_POST["email"];
    $motdepasse = $_POST["motdepasse"];

    // Établir la connexion à la base de données
    $conn = new mysqli($servername, $username, $password, $dbname);

    // Vérifier la connexion à la base de données
    if ($conn->connect_error) {
        die("Échec de la connexion à la base de données : " . $conn->connect_error);
    }

    // Vérifier les informations de connexion dans la base de données
    $sql = "SELECT * FROM utilisateurs WHERE email = '$email' AND mot_de_passe = '$motdepasse'";
    $result = $conn->query($sql);

    // Si les informations de connexion sont valides
    if ($result->num_rows > 0) {
        // Rediriger l'utilisateur vers la page d'accueil après la connexion réussie
        header("Location: page-accueil.html");
        exit();
    } else {
        echo "Adresse e-mail ou mot de passe incorrect.";
    }

    // Fermer la connexion à la base de données
    $conn->close();
}
?>
