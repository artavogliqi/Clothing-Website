<?php
    require('db.php');
    session_start();

    if (isset($_POST['username'])){
        
        $username = stripslashes($_REQUEST['username']); 
        $username = mysqli_real_escape_string($con,$username); 
        $password = stripslashes($_REQUEST['password']);
        $password = mysqli_real_escape_string($con,$password);
        
        $query = "SELECT * FROM `userss` WHERE username='$username' and password='".md5($password)."'"; 
        $result = mysqli_query($con,$query) or die(mysql_error());
        $rows = mysqli_num_rows($result); 
        if($rows==1){
            $_SESSION['username'] = $username;
            header("Location: index.php"); 
            }else{
                echo "<div class='form'><h3>Username/password is incorrect.</h3><br/>Click here to <a href='login.php'>Login</a></div>";
                }
    }else{
?>


<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Log In</title>   <link rel="icon" href="img/icon-d2.jpg">
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css">
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
  <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/js/bootstrap.min.js"></script>
        <link rel="stylesheet" href="style.css">
        <!-- <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css"> -->
        <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.7.0/css/all.css">
        
</head>
<body style="background-color: whitesmoke;">
    <div class="header navbar navbar-inverse navbar-fixed-top" id="header" role="headerbar">
    </div>
    <div class="login_content">
        <div class="login">
            <h1>LOG IN</h1>
            
        </div>
        <div class="login_form">
            <form action="" method="post">
                <div class="login_inputs">
                    <div class="login_username_input">
                        <label for="username" class="username_label">Username</label>
                        <input type="text" name="loginusername" id="loginusername" placeholder="Enter username" autocomplete="off">
                    </div>
                    <div class="login_password_input">
                        <label for="password" class="password_label">Password</label>
                        <input type="password" name="loginPassword" id="loginpassword" placeholder="Enter password">
                    </div>
                </div>
                <div class="signup_forgot">
                    <p>Don't have an account? <a href="signup.html" class="signup_link">Sign up</a>
                    <a href="forgot_pass.html" class="forgot_pass">Forgot Password?</a></p>
                </div>
                <button type="submit" value="Login" id="login_btn" class="login_btn">Login</button>
            </form>
        </div>
    </div>
    <div class="footer" id="footer" role="footer">
        </div>
        <script src="javascript.js"></script>
</body>
</html>


<?php
}
?>