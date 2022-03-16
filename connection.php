<?php
  $server = "localhost";
  $username = "root";
  $password = "";
  $database = "projekti";

  try {
    $conn = new PDO("mysql:host=$server;dbname=$database", $username, $password);
  } catch (PDOException $e) {
    echo "error: " . $e->getMessage();
  }
?>
