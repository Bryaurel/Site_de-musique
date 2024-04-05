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
$prenom = $_POST['prenom'];
$nom = $_POST['nom'];
$email = $_POST['email'];
$motdepasse = $_POST['motdepasse'];

// Vérification si l'email est déjà utilisé
$sql = "SELECT * FROM utilisateurs WHERE email = '$email'";
$result = $conn->query($sql);
if ($result->num_rows > 0) {
    echo "Cette adresse e-mail est déjà utilisée. Veuillez en utiliser une autre.";
} else {
    // Insertion des données dans la base de données
    $sql = "INSERT INTO utilisateurs (prenom, nom, email, mot_de_passe) VALUES ('$prenom', '$nom', '$email', '$motdepasse')";
    if ($conn->query($sql) === TRUE) {
        // Redirection vers la page d'accueil après inscription réussie
        header("Location: page-accueil.html");
        exit();
    } else {
        echo "Error: " . $sql . "<br>" . $conn->error;
    }
}

$conn->close();
?>
