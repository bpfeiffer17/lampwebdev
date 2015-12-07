<?php

//Require our login info from login.php
require_once 'login.php';
// Create connection
$conn = new mysqli($hn, $un, $pw, $db);
// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

$sql = "INSERT INTO users (first_name, last_name, street, city, state, zip) VALUES ('John', 'Doe', '123 Street', 'Cleveland', 'Ohio', '44111'); ";

if ($conn->query($sql) === TRUE) {
    echo "New record created successfully";
} else {
    echo "Error: " . $sql . "<br>" . $conn->error;
}

$conn->close();
?>

