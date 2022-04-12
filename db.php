<?php
  $server = "localhost";
  $username = "root";
  $password = "";
  $database = "dandelions";

  $con = mysqli_connect($server, $username, $password, $database);

  if (mysqli_connect_error())
  {
  echo "Failed to connect to MySQL: " . mysqli_connect_error();
  }
?>
