<?php
// Connexion à la base de données
$servername = "BryAurel";
$username = "root";
$password = "Basketball2.0";
$dbname = "musique";

$conn = new mysqli($servername, $username, $password, $dbname);
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Récupération des données du formulaire
$email = $_POST['email'];
$motdepasse = $_POST['motdepasse'];

// Vérification des identifiants de connexion
$sql = "SELECT * FROM utilisateurs WHERE email = '$email' AND mot_de_passe = '$motdepasse'";
$result = $conn->query($sql);
if ($result->num_rows > 0) {
    // Redirection vers la page d'accueil après connexion réussie
    header("Location: page-accueil.html");
    exit();
} else {
    echo "Adresse e-mail ou mot de passe incorrect.";
}

$conn->close();
?>
