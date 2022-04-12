<?php
    require('db.php');
    
    if (isset($_REQUEST['username'])){
        $username = stripslashes($_REQUEST['username']); 
        $username = mysqli_real_escape_string($con,$username); 
        $email = stripslashes($_REQUEST['email']);
        $email = mysqli_real_escape_string($con,$email);
        $password = stripslashes($_REQUEST['password']);
        $password = mysqli_real_escape_string($con,$password);

        $query = "INSERT INTO `users` (`id`, `username`, `email`, `password`)";
        $result = mysqli_query($con,$query);
        if($result){
            echo "<div class='form'><h3>You are registered successfully.</h3><br/>Click here to <a href='login.php'>Login</a></div>";
        }
    }else{
?>

<!DOCTYPE html>
<html>
<head>
    <meta charset='utf-8'>
    <meta http-equiv='X-UA-Compatible' content='IE=edge'>
    <title>Sign Up </title>   <link rel="icon" href="img/icon-d2.jpg">
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css">
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
  <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/js/bootstrap.min.js"></script>
    <meta name='viewport' content='width=device-width, initial-scale=1'>
    <link rel='stylesheet' type='text/css' media='screen' href='style.css'>
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.7.0/css/all.css">
    
</head>

<body class="bsignup">
    <div class="header navbar navbar-inverse navbar-fixed-top" id="header" role="headerbar">
    </div>
    <div class="sign-up">
        <img class="imguser" src="img/user-icon.jpg">
        <h1> Sign Up Now</h1>
        
        <form>
            
            <input type="username" id="username" name="username" class="input-box" placeholder="Username"><label id="usernameMsg" style="color: red;" for="username"></label><br>
            <input type="email" id="email" name="email" class="input-box" placeholder="Email"><label id="emailMsg" style="color: red;" for="email"></label><br>
            <input type="password" id="password" name="password" class="input-box" placeholder="Password"><label id="passwordMsg" style="color: red;" for="password"></label><br>
            <p> <span> <input type="checkbox" id="terms"> </span> I agree to the terms of services</p>
            
            <input type="submit" class="btn" name="signup" value="Sign up" />
            <hr>
            <br>

            <p class="or">OR</p>
            <button type="button" class="facebook-btn">Login With Facebook</button>
            <p>Already have an account ?<a href="login.html"> Log In</a></p> 

        </form>
    </div>
    <div class="footer" id="footer" role="footer">
    </div>
        <!-- js -->
         <script src="javascript.js"></script>
</body>
</html>
<?php
    }
?>