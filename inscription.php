<?php
// Connexion à la base de données
$servername = "127.0.0.1"; // Nom d'hôte (Local)
$username = "root"; // Nom d'utilisateur
$password = "Basketball2.0"; // Mot de passe
$dbname = "musique"; // Nom de la base de données

// Vérifier si le formulaire d'inscription est soumis
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Récupérer les données du formulaire d'inscription
    $prenom = $_POST["prenom"];
    $nom = $_POST["nom"];
    $email = $_POST["email"];
    $motdepasse = $_POST["motdepasse"];

    // Établir la connexion à la base de données
    $conn = new mysqli($servername, $username, $password, $dbname);

    // Vérifier la connexion à la base de données
    if ($conn->connect_error) {
        die("Échec de la connexion à la base de données : " . $conn->connect_error);
    }

    // Vérifier si l'adresse e-mail est déjà utilisée
    $sql = "SELECT * FROM utilisateurs WHERE email = '$email'";
    $result = $conn->query($sql);
    if ($result->num_rows > 0) {
        echo "Cette adresse e-mail est déjà utilisée. Veuillez en utiliser une autre.";
    } else {
        // Insérer les données d'inscription dans la base de données
        $sql = "INSERT INTO utilisateurs (prenom, nom, email, mot_de_passe) VALUES ('$prenom', '$nom', '$email', '$motdepasse')";
        if ($conn->query($sql) === TRUE) {
            // Rediriger l'utilisateur vers la page d'accueil après l'inscription réussie
            header("Location: page-accueil.html");
            exit();
        } else {
            echo "Erreur lors de l'inscription : " . $conn->error;
        }
    }

    // Fermer la connexion à la base de données
    $conn->close();
}
?>
