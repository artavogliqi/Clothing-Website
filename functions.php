<?php

  session_start();

  $server = "localhost";
  $username = "root";
  $password = "";
  $database = "dandelions";

  $con=mysqli_connect($server, $username, $password, $database);

  if(mysqli_connect_error()){
    exit('failed to connect to the database : ' . mysqli_connect_error());
  }

  if($stmt=$con->prepare('SELECT id, password FROM accounts where username = ?')){
    $stmt->bind_param('s', $_POST['username']);
    $stmt->execute();

    $stmt->store_result();

    if($stmt->num_rows > 0){
      $stmt->bind_result($id, $password);
      $stmt->fetch();

      if($_pos)
    }
  }

?>