<?php
require_once _DIR_ . '/../vendor/autoload.php';
use MongoDB\Client;

function getUserDetailsFromMySQL($userId) {
    // Your MySQL connection code here
    $mysqli = new mysqli("localhost", "ezhilvannan", "ezhilvannan", "guvi");
    if ($mysqli->connect_error) {
        die("Connection failed: " . $mysqli->connect_error);
    }

    $query = "SELECT * FROM users WHERE id = $userId";
    $result = $mysqli->query($query);

    return ($result->num_rows > 0) ? $result->fetch_assoc() : null;
}

function getUserDetailsFromMongoDB($userId) {
    $mongoClient = new Client("mongodb+srv://hariharan:harivicky@cluster0.7q42spz.mongodb.net/?retryWrites=true&w=majority");
    $mongoDatabase = $mongoClient->selectDatabase("users");
    $mongoCollection = $mongoDatabase->selectCollection("details");

    $userDocument = $mongoCollection->findOne(['_id' => $userId]);

    return ($userDocument) ? $userDocument : null;
}

$userId = $_GET['id'];

$userDetailsMySQL = getUserDetailsFromMySQL($userId);
$userDetailsMongoDB = getUserDetailsFromMongoDB($userId);

if (!$userDetailsMySQL || !$userDetailsMongoDB) {
    echo '<div class="alert alert-danger" role="alert">User not found!</div>';
} else {
?>