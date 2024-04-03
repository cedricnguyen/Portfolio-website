<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Récupérer les valeurs du formulaire
    $nom = $_POST["nom"];
    $prenom = $_POST["prenom"];
    $email = $_POST["email"];
    $message = $_POST["message"];

    // Envoyer un e-mail avec les données du formulaire
    $to = "Cedn2005@gmail.com"; 
    $subject = "Nouveau message de $nom $prenom";
    $headers = "De : $email";

    // Construire le corps du message
    $body = "Nom: $nom\n";
    $body .= "Prénom: $prenom\n";
    $body .= "Email: $email\n";
    $body .= "Message:\n$message";

    // Utiliser la fonction mail pour envoyer l'e-mail
    mail($to, $subject, $body, $headers);
    exit();
}
?>