<?php

//Require our login info from login.php
require_once 'login.php';
// Create connection
$conn = new mysqli($hn, $un, $pw, $db);
// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

$sql = "SELECT * FROM users;";

$users = $conn->query($sql);
if ($users) {
    $numRows = mysqli_num_rows($users);
    $output = '<label><u>Users:</u></label><br>';
    for ($i = 0; $i < $numRows; $i++){
	$users->data_seek($i);
	$firstName = $users->fetch_assoc()['first_name'];
	$users->data_seek($i);
        $lastName = $users->fetch_assoc()['last_name'];
	$users->data_seek($i);
        $street = $users->fetch_assoc()['street'];
	$users->data_seek($i);
        $city = $users->fetch_assoc()['city'];
	$users->data_seek($i);
        $state = $users->fetch_assoc()['state'];
	$users->data_seek($i);
        $zip = $users->fetch_assoc()['zip'];
	$output .= '<label>'.$firstName.' '.$lastName.': '.$street.' '.$city.', '.$state.' '.$zip.'</label><br>';

    }

	echo $output;
} else {
    echo "Error: " . $sql . "<br>" . $conn->error;
}

$conn->close();
?>


