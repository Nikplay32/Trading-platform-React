<?php
include 'connect.php'; // Include the database connection file

if ($conn) {
    echo "Connection to the database successful!";
} else {
    echo "Failed to connect to the database";
}
?>
