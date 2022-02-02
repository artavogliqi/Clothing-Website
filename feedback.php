<?php
    $name = $_POST['name'];
    $email = $_POST['email'];
    $text = $_POST['text'];


  $server = "localhost";
  $username = "root";
  $password ="";
  $dbname = "feedback";

   //lidhja me databaze

   $conn = new mysqli('localhost','root','','feedback');
   if($conn->connect_error){
   die('Connection Failed   : '.$conn->connect_error);
}
else{
   $stmt = $conn->prepare("insert into feedback(name, email,text)values(?, ?, ?)");
   $stmt->bind_param("sss",$name, $email, $text);
   $stmt->execute();
   $stmt->close();
   echo "You have sent a comment successfully!";
   $conn->close();
}




?>